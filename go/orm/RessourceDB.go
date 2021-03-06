// generated by stacks/gong/go/models/orm_file_per_struct_back_repo.go
package orm

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"sort"
	"time"

	"gorm.io/gorm"

	"github.com/tealeg/xlsx/v3"

	"github.com/fullstack-lang/gonggooglecharts/go/models"
)

// dummy variable to have the import declaration wihthout compile failure (even if no code needing this import is generated)
var dummy_Ressource_sql sql.NullBool
var dummy_Ressource_time time.Duration
var dummy_Ressource_sort sort.Float64Slice

// RessourceAPI is the input in POST API
//
// for POST, API, one needs the fields of the model as well as the fields
// from associations ("Has One" and "Has Many") that are generated to
// fullfill the ORM requirements for associations
//
// swagger:model ressourceAPI
type RessourceAPI struct {
	gorm.Model

	models.Ressource

	// encoding of pointers
	RessourcePointersEnconding
}

// RessourcePointersEnconding encodes pointers to Struct and
// reverse pointers of slice of poitners to Struct
type RessourcePointersEnconding struct {
	// insertion for pointer fields encoding declaration
}

// RessourceDB describes a ressource in the database
//
// It incorporates the GORM ID, basic fields from the model (because they can be serialized),
// the encoded version of pointers
//
// swagger:model ressourceDB
type RessourceDB struct {
	gorm.Model

	// insertion for basic fields declaration
	// Declation for basic field ressourceDB.Name {{BasicKind}} (to be completed)
	Name_Data sql.NullString

	// encoding of pointers
	RessourcePointersEnconding
}

// RessourceDBs arrays ressourceDBs
// swagger:response ressourceDBsResponse
type RessourceDBs []RessourceDB

// RessourceDBResponse provides response
// swagger:response ressourceDBResponse
type RessourceDBResponse struct {
	RessourceDB
}

// RessourceWOP is a Ressource without pointers (WOP is an acronym for "Without Pointers")
// it holds the same basic fields but pointers are encoded into uint
type RessourceWOP struct {
	ID int

	// insertion for WOP basic fields

	Name string
	// insertion for WOP pointer fields
}

var Ressource_Fields = []string{
	// insertion for WOP basic fields
	"ID",
	"Name",
}

type BackRepoRessourceStruct struct {
	// stores RessourceDB according to their gorm ID
	Map_RessourceDBID_RessourceDB *map[uint]*RessourceDB

	// stores RessourceDB ID according to Ressource address
	Map_RessourcePtr_RessourceDBID *map[*models.Ressource]uint

	// stores Ressource according to their gorm ID
	Map_RessourceDBID_RessourcePtr *map[uint]*models.Ressource

	db *gorm.DB
}

func (backRepoRessource *BackRepoRessourceStruct) GetDB() *gorm.DB {
	return backRepoRessource.db
}

// GetRessourceDBFromRessourcePtr is a handy function to access the back repo instance from the stage instance
func (backRepoRessource *BackRepoRessourceStruct) GetRessourceDBFromRessourcePtr(ressource *models.Ressource) (ressourceDB *RessourceDB) {
	id := (*backRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource]
	ressourceDB = (*backRepoRessource.Map_RessourceDBID_RessourceDB)[id]
	return
}

// BackRepoRessource.Init set up the BackRepo of the Ressource
func (backRepoRessource *BackRepoRessourceStruct) Init(db *gorm.DB) (Error error) {

	if backRepoRessource.Map_RessourceDBID_RessourcePtr != nil {
		err := errors.New("In Init, backRepoRessource.Map_RessourceDBID_RessourcePtr should be nil")
		return err
	}

	if backRepoRessource.Map_RessourceDBID_RessourceDB != nil {
		err := errors.New("In Init, backRepoRessource.Map_RessourceDBID_RessourceDB should be nil")
		return err
	}

	if backRepoRessource.Map_RessourcePtr_RessourceDBID != nil {
		err := errors.New("In Init, backRepoRessource.Map_RessourcePtr_RessourceDBID should be nil")
		return err
	}

	tmp := make(map[uint]*models.Ressource, 0)
	backRepoRessource.Map_RessourceDBID_RessourcePtr = &tmp

	tmpDB := make(map[uint]*RessourceDB, 0)
	backRepoRessource.Map_RessourceDBID_RessourceDB = &tmpDB

	tmpID := make(map[*models.Ressource]uint, 0)
	backRepoRessource.Map_RessourcePtr_RessourceDBID = &tmpID

	backRepoRessource.db = db
	return
}

// BackRepoRessource.CommitPhaseOne commits all staged instances of Ressource to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoRessource *BackRepoRessourceStruct) CommitPhaseOne(stage *models.StageStruct) (Error error) {

	for ressource := range stage.Ressources {
		backRepoRessource.CommitPhaseOneInstance(ressource)
	}

	// parse all backRepo instance and checks wether some instance have been unstaged
	// in this case, remove them from the back repo
	for id, ressource := range *backRepoRessource.Map_RessourceDBID_RessourcePtr {
		if _, ok := stage.Ressources[ressource]; !ok {
			backRepoRessource.CommitDeleteInstance(id)
		}
	}

	return
}

// BackRepoRessource.CommitDeleteInstance commits deletion of Ressource to the BackRepo
func (backRepoRessource *BackRepoRessourceStruct) CommitDeleteInstance(id uint) (Error error) {

	ressource := (*backRepoRessource.Map_RessourceDBID_RessourcePtr)[id]

	// ressource is not staged anymore, remove ressourceDB
	ressourceDB := (*backRepoRessource.Map_RessourceDBID_RessourceDB)[id]
	query := backRepoRessource.db.Unscoped().Delete(&ressourceDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	delete((*backRepoRessource.Map_RessourcePtr_RessourceDBID), ressource)
	delete((*backRepoRessource.Map_RessourceDBID_RessourcePtr), id)
	delete((*backRepoRessource.Map_RessourceDBID_RessourceDB), id)

	return
}

// BackRepoRessource.CommitPhaseOneInstance commits ressource staged instances of Ressource to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoRessource *BackRepoRessourceStruct) CommitPhaseOneInstance(ressource *models.Ressource) (Error error) {

	// check if the ressource is not commited yet
	if _, ok := (*backRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource]; ok {
		return
	}

	// initiate ressource
	var ressourceDB RessourceDB
	ressourceDB.CopyBasicFieldsFromRessource(ressource)

	query := backRepoRessource.db.Create(&ressourceDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	(*backRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource] = ressourceDB.ID
	(*backRepoRessource.Map_RessourceDBID_RessourcePtr)[ressourceDB.ID] = ressource
	(*backRepoRessource.Map_RessourceDBID_RessourceDB)[ressourceDB.ID] = &ressourceDB

	return
}

// BackRepoRessource.CommitPhaseTwo commits all staged instances of Ressource to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoRessource *BackRepoRessourceStruct) CommitPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	for idx, ressource := range *backRepoRessource.Map_RessourceDBID_RessourcePtr {
		backRepoRessource.CommitPhaseTwoInstance(backRepo, idx, ressource)
	}

	return
}

// BackRepoRessource.CommitPhaseTwoInstance commits {{structname }} of models.Ressource to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoRessource *BackRepoRessourceStruct) CommitPhaseTwoInstance(backRepo *BackRepoStruct, idx uint, ressource *models.Ressource) (Error error) {

	// fetch matching ressourceDB
	if ressourceDB, ok := (*backRepoRessource.Map_RessourceDBID_RessourceDB)[idx]; ok {

		ressourceDB.CopyBasicFieldsFromRessource(ressource)

		// insertion point for translating pointers encodings into actual pointers
		query := backRepoRessource.db.Save(&ressourceDB)
		if query.Error != nil {
			return query.Error
		}

	} else {
		err := errors.New(
			fmt.Sprintf("Unkown Ressource intance %s", ressource.Name))
		return err
	}

	return
}

// BackRepoRessource.CheckoutPhaseOne Checkouts all BackRepo instances to the Stage
//
// Phase One will result in having instances on the stage aligned with the back repo
// pointers are not initialized yet (this is for pahse two)
//
func (backRepoRessource *BackRepoRessourceStruct) CheckoutPhaseOne() (Error error) {

	ressourceDBArray := make([]RessourceDB, 0)
	query := backRepoRessource.db.Find(&ressourceDBArray)
	if query.Error != nil {
		return query.Error
	}

	// list of instances to be removed
	// start from the initial map on the stage and remove instances that have been checked out
	ressourceInstancesToBeRemovedFromTheStage := make(map[*models.Ressource]struct{})
	for key, value := range models.Stage.Ressources {
		ressourceInstancesToBeRemovedFromTheStage[key] = value
	}

	// copy orm objects to the the map
	for _, ressourceDB := range ressourceDBArray {
		backRepoRessource.CheckoutPhaseOneInstance(&ressourceDB)

		// do not remove this instance from the stage, therefore
		// remove instance from the list of instances to be be removed from the stage
		ressource, ok := (*backRepoRessource.Map_RessourceDBID_RessourcePtr)[ressourceDB.ID]
		if ok {
			delete(ressourceInstancesToBeRemovedFromTheStage, ressource)
		}
	}

	// remove from stage and back repo's 3 maps all ressources that are not in the checkout
	for ressource := range ressourceInstancesToBeRemovedFromTheStage {
		ressource.Unstage()

		// remove instance from the back repo 3 maps
		ressourceID := (*backRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource]
		delete((*backRepoRessource.Map_RessourcePtr_RessourceDBID), ressource)
		delete((*backRepoRessource.Map_RessourceDBID_RessourceDB), ressourceID)
		delete((*backRepoRessource.Map_RessourceDBID_RessourcePtr), ressourceID)
	}

	return
}

// CheckoutPhaseOneInstance takes a ressourceDB that has been found in the DB, updates the backRepo and stages the
// models version of the ressourceDB
func (backRepoRessource *BackRepoRessourceStruct) CheckoutPhaseOneInstance(ressourceDB *RessourceDB) (Error error) {

	ressource, ok := (*backRepoRessource.Map_RessourceDBID_RessourcePtr)[ressourceDB.ID]
	if !ok {
		ressource = new(models.Ressource)

		(*backRepoRessource.Map_RessourceDBID_RessourcePtr)[ressourceDB.ID] = ressource
		(*backRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource] = ressourceDB.ID

		// append model store with the new element
		ressource.Name = ressourceDB.Name_Data.String
		ressource.Stage()
	}
	ressourceDB.CopyBasicFieldsToRessource(ressource)

	// preserve pointer to ressourceDB. Otherwise, pointer will is recycled and the map of pointers
	// Map_RessourceDBID_RessourceDB)[ressourceDB hold variable pointers
	ressourceDB_Data := *ressourceDB
	preservedPtrToRessource := &ressourceDB_Data
	(*backRepoRessource.Map_RessourceDBID_RessourceDB)[ressourceDB.ID] = preservedPtrToRessource

	return
}

// BackRepoRessource.CheckoutPhaseTwo Checkouts all staged instances of Ressource to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoRessource *BackRepoRessourceStruct) CheckoutPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	// parse all DB instance and update all pointer fields of the translated models instance
	for _, ressourceDB := range *backRepoRessource.Map_RessourceDBID_RessourceDB {
		backRepoRessource.CheckoutPhaseTwoInstance(backRepo, ressourceDB)
	}
	return
}

// BackRepoRessource.CheckoutPhaseTwoInstance Checkouts staged instances of Ressource to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoRessource *BackRepoRessourceStruct) CheckoutPhaseTwoInstance(backRepo *BackRepoStruct, ressourceDB *RessourceDB) (Error error) {

	ressource := (*backRepoRessource.Map_RessourceDBID_RessourcePtr)[ressourceDB.ID]
	_ = ressource // sometimes, there is no code generated. This lines voids the "unused variable" compilation error

	// insertion point for checkout of pointer encoding
	return
}

// CommitRessource allows commit of a single ressource (if already staged)
func (backRepo *BackRepoStruct) CommitRessource(ressource *models.Ressource) {
	backRepo.BackRepoRessource.CommitPhaseOneInstance(ressource)
	if id, ok := (*backRepo.BackRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource]; ok {
		backRepo.BackRepoRessource.CommitPhaseTwoInstance(backRepo, id, ressource)
	}
}

// CommitRessource allows checkout of a single ressource (if already staged and with a BackRepo id)
func (backRepo *BackRepoStruct) CheckoutRessource(ressource *models.Ressource) {
	// check if the ressource is staged
	if _, ok := (*backRepo.BackRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource]; ok {

		if id, ok := (*backRepo.BackRepoRessource.Map_RessourcePtr_RessourceDBID)[ressource]; ok {
			var ressourceDB RessourceDB
			ressourceDB.ID = id

			if err := backRepo.BackRepoRessource.db.First(&ressourceDB, id).Error; err != nil {
				log.Panicln("CheckoutRessource : Problem with getting object with id:", id)
			}
			backRepo.BackRepoRessource.CheckoutPhaseOneInstance(&ressourceDB)
			backRepo.BackRepoRessource.CheckoutPhaseTwoInstance(backRepo, &ressourceDB)
		}
	}
}

// CopyBasicFieldsFromRessource
func (ressourceDB *RessourceDB) CopyBasicFieldsFromRessource(ressource *models.Ressource) {
	// insertion point for fields commit
	ressourceDB.Name_Data.String = ressource.Name
	ressourceDB.Name_Data.Valid = true

}

// CopyBasicFieldsFromRessourceWOP
func (ressourceDB *RessourceDB) CopyBasicFieldsFromRessourceWOP(ressource *RessourceWOP) {
	// insertion point for fields commit
	ressourceDB.Name_Data.String = ressource.Name
	ressourceDB.Name_Data.Valid = true

}

// CopyBasicFieldsToRessource
func (ressourceDB *RessourceDB) CopyBasicFieldsToRessource(ressource *models.Ressource) {
	// insertion point for checkout of basic fields (back repo to stage)
	ressource.Name = ressourceDB.Name_Data.String
}

// CopyBasicFieldsToRessourceWOP
func (ressourceDB *RessourceDB) CopyBasicFieldsToRessourceWOP(ressource *RessourceWOP) {
	ressource.ID = int(ressourceDB.ID)
	// insertion point for checkout of basic fields (back repo to stage)
	ressource.Name = ressourceDB.Name_Data.String
}

// Backup generates a json file from a slice of all RessourceDB instances in the backrepo
func (backRepoRessource *BackRepoRessourceStruct) Backup(dirPath string) {

	filename := filepath.Join(dirPath, "RessourceDB.json")

	// organize the map into an array with increasing IDs, in order to have repoductible
	// backup file
	forBackup := make([]*RessourceDB, 0)
	for _, ressourceDB := range *backRepoRessource.Map_RessourceDBID_RessourceDB {
		forBackup = append(forBackup, ressourceDB)
	}

	sort.Slice(forBackup[:], func(i, j int) bool {
		return forBackup[i].ID < forBackup[j].ID
	})

	file, err := json.MarshalIndent(forBackup, "", " ")

	if err != nil {
		log.Panic("Cannot json Ressource ", filename, " ", err.Error())
	}

	err = ioutil.WriteFile(filename, file, 0644)
	if err != nil {
		log.Panic("Cannot write the json Ressource file", err.Error())
	}
}

// Backup generates a json file from a slice of all RessourceDB instances in the backrepo
func (backRepoRessource *BackRepoRessourceStruct) BackupXL(file *xlsx.File) {

	// organize the map into an array with increasing IDs, in order to have repoductible
	// backup file
	forBackup := make([]*RessourceDB, 0)
	for _, ressourceDB := range *backRepoRessource.Map_RessourceDBID_RessourceDB {
		forBackup = append(forBackup, ressourceDB)
	}

	sort.Slice(forBackup[:], func(i, j int) bool {
		return forBackup[i].ID < forBackup[j].ID
	})

	sh, err := file.AddSheet("Ressource")
	if err != nil {
		log.Panic("Cannot add XL file", err.Error())
	}
	_ = sh

	row := sh.AddRow()
	row.WriteSlice(&Ressource_Fields, -1)
	for _, ressourceDB := range forBackup {

		var ressourceWOP RessourceWOP
		ressourceDB.CopyBasicFieldsToRessourceWOP(&ressourceWOP)

		row := sh.AddRow()
		row.WriteStruct(&ressourceWOP, -1)
	}
}

// RestorePhaseOne read the file "RessourceDB.json" in dirPath that stores an array
// of RessourceDB and stores it in the database
// the map BackRepoRessourceid_atBckpTime_newID is updated accordingly
func (backRepoRessource *BackRepoRessourceStruct) RestorePhaseOne(dirPath string) {

	// resets the map
	BackRepoRessourceid_atBckpTime_newID = make(map[uint]uint)

	filename := filepath.Join(dirPath, "RessourceDB.json")
	jsonFile, err := os.Open(filename)
	// if we os.Open returns an error then handle it
	if err != nil {
		log.Panic("Cannot restore/open the json Ressource file", filename, " ", err.Error())
	}

	// read our opened jsonFile as a byte array.
	byteValue, _ := ioutil.ReadAll(jsonFile)

	var forRestore []*RessourceDB

	err = json.Unmarshal(byteValue, &forRestore)

	// fill up Map_RessourceDBID_RessourceDB
	for _, ressourceDB := range forRestore {

		ressourceDB_ID_atBackupTime := ressourceDB.ID
		ressourceDB.ID = 0
		query := backRepoRessource.db.Create(ressourceDB)
		if query.Error != nil {
			log.Panic(query.Error)
		}
		(*backRepoRessource.Map_RessourceDBID_RessourceDB)[ressourceDB.ID] = ressourceDB
		BackRepoRessourceid_atBckpTime_newID[ressourceDB_ID_atBackupTime] = ressourceDB.ID
	}

	if err != nil {
		log.Panic("Cannot restore/unmarshall json Ressource file", err.Error())
	}
}

// RestorePhaseTwo uses all map BackRepo<Ressource>id_atBckpTime_newID
// to compute new index
func (backRepoRessource *BackRepoRessourceStruct) RestorePhaseTwo() {

	for _, ressourceDB := range *backRepoRessource.Map_RessourceDBID_RessourceDB {

		// next line of code is to avert unused variable compilation error
		_ = ressourceDB

		// insertion point for reindexing pointers encoding
		// update databse with new index encoding
		query := backRepoRessource.db.Model(ressourceDB).Updates(*ressourceDB)
		if query.Error != nil {
			log.Panic(query.Error)
		}
	}

}

// this field is used during the restauration process.
// it stores the ID at the backup time and is used for renumbering
var BackRepoRessourceid_atBckpTime_newID map[uint]uint
