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
var dummy_GanttChart_sql sql.NullBool
var dummy_GanttChart_time time.Duration
var dummy_GanttChart_sort sort.Float64Slice

// GanttChartAPI is the input in POST API
//
// for POST, API, one needs the fields of the model as well as the fields
// from associations ("Has One" and "Has Many") that are generated to
// fullfill the ORM requirements for associations
//
// swagger:model ganttchartAPI
type GanttChartAPI struct {
	gorm.Model

	models.GanttChart

	// encoding of pointers
	GanttChartPointersEnconding
}

// GanttChartPointersEnconding encodes pointers to Struct and
// reverse pointers of slice of poitners to Struct
type GanttChartPointersEnconding struct {
	// insertion for pointer fields encoding declaration
}

// GanttChartDB describes a ganttchart in the database
//
// It incorporates the GORM ID, basic fields from the model (because they can be serialized),
// the encoded version of pointers
//
// swagger:model ganttchartDB
type GanttChartDB struct {
	gorm.Model

	// insertion for basic fields declaration
	// Declation for basic field ganttchartDB.Name {{BasicKind}} (to be completed)
	Name_Data sql.NullString

	// encoding of pointers
	GanttChartPointersEnconding
}

// GanttChartDBs arrays ganttchartDBs
// swagger:response ganttchartDBsResponse
type GanttChartDBs []GanttChartDB

// GanttChartDBResponse provides response
// swagger:response ganttchartDBResponse
type GanttChartDBResponse struct {
	GanttChartDB
}

// GanttChartWOP is a GanttChart without pointers (WOP is an acronym for "Without Pointers")
// it holds the same basic fields but pointers are encoded into uint
type GanttChartWOP struct {
	ID int

	// insertion for WOP basic fields

	Name string
	// insertion for WOP pointer fields
}

var GanttChart_Fields = []string{
	// insertion for WOP basic fields
	"ID",
	"Name",
}

type BackRepoGanttChartStruct struct {
	// stores GanttChartDB according to their gorm ID
	Map_GanttChartDBID_GanttChartDB *map[uint]*GanttChartDB

	// stores GanttChartDB ID according to GanttChart address
	Map_GanttChartPtr_GanttChartDBID *map[*models.GanttChart]uint

	// stores GanttChart according to their gorm ID
	Map_GanttChartDBID_GanttChartPtr *map[uint]*models.GanttChart

	db *gorm.DB
}

func (backRepoGanttChart *BackRepoGanttChartStruct) GetDB() *gorm.DB {
	return backRepoGanttChart.db
}

// GetGanttChartDBFromGanttChartPtr is a handy function to access the back repo instance from the stage instance
func (backRepoGanttChart *BackRepoGanttChartStruct) GetGanttChartDBFromGanttChartPtr(ganttchart *models.GanttChart) (ganttchartDB *GanttChartDB) {
	id := (*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart]
	ganttchartDB = (*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB)[id]
	return
}

// BackRepoGanttChart.Init set up the BackRepo of the GanttChart
func (backRepoGanttChart *BackRepoGanttChartStruct) Init(db *gorm.DB) (Error error) {

	if backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr != nil {
		err := errors.New("In Init, backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr should be nil")
		return err
	}

	if backRepoGanttChart.Map_GanttChartDBID_GanttChartDB != nil {
		err := errors.New("In Init, backRepoGanttChart.Map_GanttChartDBID_GanttChartDB should be nil")
		return err
	}

	if backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID != nil {
		err := errors.New("In Init, backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID should be nil")
		return err
	}

	tmp := make(map[uint]*models.GanttChart, 0)
	backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr = &tmp

	tmpDB := make(map[uint]*GanttChartDB, 0)
	backRepoGanttChart.Map_GanttChartDBID_GanttChartDB = &tmpDB

	tmpID := make(map[*models.GanttChart]uint, 0)
	backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID = &tmpID

	backRepoGanttChart.db = db
	return
}

// BackRepoGanttChart.CommitPhaseOne commits all staged instances of GanttChart to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoGanttChart *BackRepoGanttChartStruct) CommitPhaseOne(stage *models.StageStruct) (Error error) {

	for ganttchart := range stage.GanttCharts {
		backRepoGanttChart.CommitPhaseOneInstance(ganttchart)
	}

	// parse all backRepo instance and checks wether some instance have been unstaged
	// in this case, remove them from the back repo
	for id, ganttchart := range *backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr {
		if _, ok := stage.GanttCharts[ganttchart]; !ok {
			backRepoGanttChart.CommitDeleteInstance(id)
		}
	}

	return
}

// BackRepoGanttChart.CommitDeleteInstance commits deletion of GanttChart to the BackRepo
func (backRepoGanttChart *BackRepoGanttChartStruct) CommitDeleteInstance(id uint) (Error error) {

	ganttchart := (*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr)[id]

	// ganttchart is not staged anymore, remove ganttchartDB
	ganttchartDB := (*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB)[id]
	query := backRepoGanttChart.db.Unscoped().Delete(&ganttchartDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	delete((*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID), ganttchart)
	delete((*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr), id)
	delete((*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB), id)

	return
}

// BackRepoGanttChart.CommitPhaseOneInstance commits ganttchart staged instances of GanttChart to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoGanttChart *BackRepoGanttChartStruct) CommitPhaseOneInstance(ganttchart *models.GanttChart) (Error error) {

	// check if the ganttchart is not commited yet
	if _, ok := (*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart]; ok {
		return
	}

	// initiate ganttchart
	var ganttchartDB GanttChartDB
	ganttchartDB.CopyBasicFieldsFromGanttChart(ganttchart)

	query := backRepoGanttChart.db.Create(&ganttchartDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	(*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart] = ganttchartDB.ID
	(*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr)[ganttchartDB.ID] = ganttchart
	(*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB)[ganttchartDB.ID] = &ganttchartDB

	return
}

// BackRepoGanttChart.CommitPhaseTwo commits all staged instances of GanttChart to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoGanttChart *BackRepoGanttChartStruct) CommitPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	for idx, ganttchart := range *backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr {
		backRepoGanttChart.CommitPhaseTwoInstance(backRepo, idx, ganttchart)
	}

	return
}

// BackRepoGanttChart.CommitPhaseTwoInstance commits {{structname }} of models.GanttChart to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoGanttChart *BackRepoGanttChartStruct) CommitPhaseTwoInstance(backRepo *BackRepoStruct, idx uint, ganttchart *models.GanttChart) (Error error) {

	// fetch matching ganttchartDB
	if ganttchartDB, ok := (*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB)[idx]; ok {

		ganttchartDB.CopyBasicFieldsFromGanttChart(ganttchart)

		// insertion point for translating pointers encodings into actual pointers
		// This loop encodes the slice of pointers ganttchart.Tasks into the back repo.
		// Each back repo instance at the end of the association encode the ID of the association start
		// into a dedicated field for coding the association. The back repo instance is then saved to the db
		for idx, taskAssocEnd := range ganttchart.Tasks {

			// get the back repo instance at the association end
			taskAssocEnd_DB :=
				backRepo.BackRepoTask.GetTaskDBFromTaskPtr(taskAssocEnd)

			// encode reverse pointer in the association end back repo instance
			taskAssocEnd_DB.GanttChart_TasksDBID.Int64 = int64(ganttchartDB.ID)
			taskAssocEnd_DB.GanttChart_TasksDBID.Valid = true
			taskAssocEnd_DB.GanttChart_TasksDBID_Index.Int64 = int64(idx)
			taskAssocEnd_DB.GanttChart_TasksDBID_Index.Valid = true
			if q := backRepoGanttChart.db.Save(taskAssocEnd_DB); q.Error != nil {
				return q.Error
			}
		}

		query := backRepoGanttChart.db.Save(&ganttchartDB)
		if query.Error != nil {
			return query.Error
		}

	} else {
		err := errors.New(
			fmt.Sprintf("Unkown GanttChart intance %s", ganttchart.Name))
		return err
	}

	return
}

// BackRepoGanttChart.CheckoutPhaseOne Checkouts all BackRepo instances to the Stage
//
// Phase One will result in having instances on the stage aligned with the back repo
// pointers are not initialized yet (this is for pahse two)
//
func (backRepoGanttChart *BackRepoGanttChartStruct) CheckoutPhaseOne() (Error error) {

	ganttchartDBArray := make([]GanttChartDB, 0)
	query := backRepoGanttChart.db.Find(&ganttchartDBArray)
	if query.Error != nil {
		return query.Error
	}

	// list of instances to be removed
	// start from the initial map on the stage and remove instances that have been checked out
	ganttchartInstancesToBeRemovedFromTheStage := make(map[*models.GanttChart]struct{})
	for key, value := range models.Stage.GanttCharts {
		ganttchartInstancesToBeRemovedFromTheStage[key] = value
	}

	// copy orm objects to the the map
	for _, ganttchartDB := range ganttchartDBArray {
		backRepoGanttChart.CheckoutPhaseOneInstance(&ganttchartDB)

		// do not remove this instance from the stage, therefore
		// remove instance from the list of instances to be be removed from the stage
		ganttchart, ok := (*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr)[ganttchartDB.ID]
		if ok {
			delete(ganttchartInstancesToBeRemovedFromTheStage, ganttchart)
		}
	}

	// remove from stage and back repo's 3 maps all ganttcharts that are not in the checkout
	for ganttchart := range ganttchartInstancesToBeRemovedFromTheStage {
		ganttchart.Unstage()

		// remove instance from the back repo 3 maps
		ganttchartID := (*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart]
		delete((*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID), ganttchart)
		delete((*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB), ganttchartID)
		delete((*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr), ganttchartID)
	}

	return
}

// CheckoutPhaseOneInstance takes a ganttchartDB that has been found in the DB, updates the backRepo and stages the
// models version of the ganttchartDB
func (backRepoGanttChart *BackRepoGanttChartStruct) CheckoutPhaseOneInstance(ganttchartDB *GanttChartDB) (Error error) {

	ganttchart, ok := (*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr)[ganttchartDB.ID]
	if !ok {
		ganttchart = new(models.GanttChart)

		(*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr)[ganttchartDB.ID] = ganttchart
		(*backRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart] = ganttchartDB.ID

		// append model store with the new element
		ganttchart.Name = ganttchartDB.Name_Data.String
		ganttchart.Stage()
	}
	ganttchartDB.CopyBasicFieldsToGanttChart(ganttchart)

	// preserve pointer to ganttchartDB. Otherwise, pointer will is recycled and the map of pointers
	// Map_GanttChartDBID_GanttChartDB)[ganttchartDB hold variable pointers
	ganttchartDB_Data := *ganttchartDB
	preservedPtrToGanttChart := &ganttchartDB_Data
	(*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB)[ganttchartDB.ID] = preservedPtrToGanttChart

	return
}

// BackRepoGanttChart.CheckoutPhaseTwo Checkouts all staged instances of GanttChart to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoGanttChart *BackRepoGanttChartStruct) CheckoutPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	// parse all DB instance and update all pointer fields of the translated models instance
	for _, ganttchartDB := range *backRepoGanttChart.Map_GanttChartDBID_GanttChartDB {
		backRepoGanttChart.CheckoutPhaseTwoInstance(backRepo, ganttchartDB)
	}
	return
}

// BackRepoGanttChart.CheckoutPhaseTwoInstance Checkouts staged instances of GanttChart to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoGanttChart *BackRepoGanttChartStruct) CheckoutPhaseTwoInstance(backRepo *BackRepoStruct, ganttchartDB *GanttChartDB) (Error error) {

	ganttchart := (*backRepoGanttChart.Map_GanttChartDBID_GanttChartPtr)[ganttchartDB.ID]
	_ = ganttchart // sometimes, there is no code generated. This lines voids the "unused variable" compilation error

	// insertion point for checkout of pointer encoding
	// This loop redeem ganttchart.Tasks in the stage from the encode in the back repo
	// It parses all TaskDB in the back repo and if the reverse pointer encoding matches the back repo ID
	// it appends the stage instance
	// 1. reset the slice
	ganttchart.Tasks = ganttchart.Tasks[:0]
	// 2. loop all instances in the type in the association end
	for _, taskDB_AssocEnd := range *backRepo.BackRepoTask.Map_TaskDBID_TaskDB {
		// 3. Does the ID encoding at the end and the ID at the start matches ?
		if taskDB_AssocEnd.GanttChart_TasksDBID.Int64 == int64(ganttchartDB.ID) {
			// 4. fetch the associated instance in the stage
			task_AssocEnd := (*backRepo.BackRepoTask.Map_TaskDBID_TaskPtr)[taskDB_AssocEnd.ID]
			// 5. append it the association slice
			ganttchart.Tasks = append(ganttchart.Tasks, task_AssocEnd)
		}
	}

	// sort the array according to the order
	sort.Slice(ganttchart.Tasks, func(i, j int) bool {
		taskDB_i_ID := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[ganttchart.Tasks[i]]
		taskDB_j_ID := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[ganttchart.Tasks[j]]

		taskDB_i := (*backRepo.BackRepoTask.Map_TaskDBID_TaskDB)[taskDB_i_ID]
		taskDB_j := (*backRepo.BackRepoTask.Map_TaskDBID_TaskDB)[taskDB_j_ID]

		return taskDB_i.GanttChart_TasksDBID_Index.Int64 < taskDB_j.GanttChart_TasksDBID_Index.Int64
	})

	return
}

// CommitGanttChart allows commit of a single ganttchart (if already staged)
func (backRepo *BackRepoStruct) CommitGanttChart(ganttchart *models.GanttChart) {
	backRepo.BackRepoGanttChart.CommitPhaseOneInstance(ganttchart)
	if id, ok := (*backRepo.BackRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart]; ok {
		backRepo.BackRepoGanttChart.CommitPhaseTwoInstance(backRepo, id, ganttchart)
	}
}

// CommitGanttChart allows checkout of a single ganttchart (if already staged and with a BackRepo id)
func (backRepo *BackRepoStruct) CheckoutGanttChart(ganttchart *models.GanttChart) {
	// check if the ganttchart is staged
	if _, ok := (*backRepo.BackRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart]; ok {

		if id, ok := (*backRepo.BackRepoGanttChart.Map_GanttChartPtr_GanttChartDBID)[ganttchart]; ok {
			var ganttchartDB GanttChartDB
			ganttchartDB.ID = id

			if err := backRepo.BackRepoGanttChart.db.First(&ganttchartDB, id).Error; err != nil {
				log.Panicln("CheckoutGanttChart : Problem with getting object with id:", id)
			}
			backRepo.BackRepoGanttChart.CheckoutPhaseOneInstance(&ganttchartDB)
			backRepo.BackRepoGanttChart.CheckoutPhaseTwoInstance(backRepo, &ganttchartDB)
		}
	}
}

// CopyBasicFieldsFromGanttChart
func (ganttchartDB *GanttChartDB) CopyBasicFieldsFromGanttChart(ganttchart *models.GanttChart) {
	// insertion point for fields commit
	ganttchartDB.Name_Data.String = ganttchart.Name
	ganttchartDB.Name_Data.Valid = true

}

// CopyBasicFieldsFromGanttChartWOP
func (ganttchartDB *GanttChartDB) CopyBasicFieldsFromGanttChartWOP(ganttchart *GanttChartWOP) {
	// insertion point for fields commit
	ganttchartDB.Name_Data.String = ganttchart.Name
	ganttchartDB.Name_Data.Valid = true

}

// CopyBasicFieldsToGanttChart
func (ganttchartDB *GanttChartDB) CopyBasicFieldsToGanttChart(ganttchart *models.GanttChart) {
	// insertion point for checkout of basic fields (back repo to stage)
	ganttchart.Name = ganttchartDB.Name_Data.String
}

// CopyBasicFieldsToGanttChartWOP
func (ganttchartDB *GanttChartDB) CopyBasicFieldsToGanttChartWOP(ganttchart *GanttChartWOP) {
	ganttchart.ID = int(ganttchartDB.ID)
	// insertion point for checkout of basic fields (back repo to stage)
	ganttchart.Name = ganttchartDB.Name_Data.String
}

// Backup generates a json file from a slice of all GanttChartDB instances in the backrepo
func (backRepoGanttChart *BackRepoGanttChartStruct) Backup(dirPath string) {

	filename := filepath.Join(dirPath, "GanttChartDB.json")

	// organize the map into an array with increasing IDs, in order to have repoductible
	// backup file
	forBackup := make([]*GanttChartDB, 0)
	for _, ganttchartDB := range *backRepoGanttChart.Map_GanttChartDBID_GanttChartDB {
		forBackup = append(forBackup, ganttchartDB)
	}

	sort.Slice(forBackup[:], func(i, j int) bool {
		return forBackup[i].ID < forBackup[j].ID
	})

	file, err := json.MarshalIndent(forBackup, "", " ")

	if err != nil {
		log.Panic("Cannot json GanttChart ", filename, " ", err.Error())
	}

	err = ioutil.WriteFile(filename, file, 0644)
	if err != nil {
		log.Panic("Cannot write the json GanttChart file", err.Error())
	}
}

// Backup generates a json file from a slice of all GanttChartDB instances in the backrepo
func (backRepoGanttChart *BackRepoGanttChartStruct) BackupXL(file *xlsx.File) {

	// organize the map into an array with increasing IDs, in order to have repoductible
	// backup file
	forBackup := make([]*GanttChartDB, 0)
	for _, ganttchartDB := range *backRepoGanttChart.Map_GanttChartDBID_GanttChartDB {
		forBackup = append(forBackup, ganttchartDB)
	}

	sort.Slice(forBackup[:], func(i, j int) bool {
		return forBackup[i].ID < forBackup[j].ID
	})

	sh, err := file.AddSheet("GanttChart")
	if err != nil {
		log.Panic("Cannot add XL file", err.Error())
	}
	_ = sh

	row := sh.AddRow()
	row.WriteSlice(&GanttChart_Fields, -1)
	for _, ganttchartDB := range forBackup {

		var ganttchartWOP GanttChartWOP
		ganttchartDB.CopyBasicFieldsToGanttChartWOP(&ganttchartWOP)

		row := sh.AddRow()
		row.WriteStruct(&ganttchartWOP, -1)
	}
}

// RestorePhaseOne read the file "GanttChartDB.json" in dirPath that stores an array
// of GanttChartDB and stores it in the database
// the map BackRepoGanttChartid_atBckpTime_newID is updated accordingly
func (backRepoGanttChart *BackRepoGanttChartStruct) RestorePhaseOne(dirPath string) {

	// resets the map
	BackRepoGanttChartid_atBckpTime_newID = make(map[uint]uint)

	filename := filepath.Join(dirPath, "GanttChartDB.json")
	jsonFile, err := os.Open(filename)
	// if we os.Open returns an error then handle it
	if err != nil {
		log.Panic("Cannot restore/open the json GanttChart file", filename, " ", err.Error())
	}

	// read our opened jsonFile as a byte array.
	byteValue, _ := ioutil.ReadAll(jsonFile)

	var forRestore []*GanttChartDB

	err = json.Unmarshal(byteValue, &forRestore)

	// fill up Map_GanttChartDBID_GanttChartDB
	for _, ganttchartDB := range forRestore {

		ganttchartDB_ID_atBackupTime := ganttchartDB.ID
		ganttchartDB.ID = 0
		query := backRepoGanttChart.db.Create(ganttchartDB)
		if query.Error != nil {
			log.Panic(query.Error)
		}
		(*backRepoGanttChart.Map_GanttChartDBID_GanttChartDB)[ganttchartDB.ID] = ganttchartDB
		BackRepoGanttChartid_atBckpTime_newID[ganttchartDB_ID_atBackupTime] = ganttchartDB.ID
	}

	if err != nil {
		log.Panic("Cannot restore/unmarshall json GanttChart file", err.Error())
	}
}

// RestorePhaseTwo uses all map BackRepo<GanttChart>id_atBckpTime_newID
// to compute new index
func (backRepoGanttChart *BackRepoGanttChartStruct) RestorePhaseTwo() {

	for _, ganttchartDB := range *backRepoGanttChart.Map_GanttChartDBID_GanttChartDB {

		// next line of code is to avert unused variable compilation error
		_ = ganttchartDB

		// insertion point for reindexing pointers encoding
		// update databse with new index encoding
		query := backRepoGanttChart.db.Model(ganttchartDB).Updates(*ganttchartDB)
		if query.Error != nil {
			log.Panic(query.Error)
		}
	}

}

// this field is used during the restauration process.
// it stores the ID at the backup time and is used for renumbering
var BackRepoGanttChartid_atBckpTime_newID map[uint]uint
