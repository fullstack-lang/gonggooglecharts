// generated by stacks/gong/go/models/orm_file_per_struct_back_repo.go
package orm

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/fullstack-lang/gonggooglecharts/go/models"
)

// dummy variable to have the import database/sql wihthout compile failure id no sql is used
var dummy_Dependency sql.NullBool
var __Dependency_time__dummyDeclaration time.Duration

// DependencyAPI is the input in POST API
//
// for POST, API, one needs the fields of the model as well as the fields
// from associations ("Has One" and "Has Many") that are generated to
// fullfill the ORM requirements for associations
//
// swagger:model dependencyAPI
type DependencyAPI struct {
	models.Dependency

	// insertion for fields declaration
	// Declation for basic field dependencyDB.Name {{BasicKind}} (to be completed)
	Name_Data sql.NullString

	// field Task is a pointer to another Struct (optional or 0..1)
	// This field is generated into another field to enable AS ONE association
	TaskID sql.NullInt64

	// all gong Struct has a Name field, this enables this data to object field
	TaskName string

	// Implementation of a reverse ID for field Task{}.Dependencies []*Dependency
	Task_DependenciesDBID sql.NullInt64

	// end of insertion
}

// DependencyDB describes a dependency in the database
//
// It incorporates all fields : from the model, from the generated field for the API and the GORM ID
//
// swagger:model dependencyDB
type DependencyDB struct {
	gorm.Model

	DependencyAPI
}

// DependencyDBs arrays dependencyDBs
// swagger:response dependencyDBsResponse
type DependencyDBs []DependencyDB

// DependencyDBResponse provides response
// swagger:response dependencyDBResponse
type DependencyDBResponse struct {
	DependencyDB
}

type BackRepoDependencyStruct struct {
	// stores DependencyDB according to their gorm ID
	Map_DependencyDBID_DependencyDB *map[uint]*DependencyDB

	// stores DependencyDB ID according to Dependency address
	Map_DependencyPtr_DependencyDBID *map[*models.Dependency]uint

	// stores Dependency according to their gorm ID
	Map_DependencyDBID_DependencyPtr *map[uint]*models.Dependency

	db *gorm.DB
}

// BackRepoDependency.Init set up the BackRepo of the Dependency
func (backRepoDependency *BackRepoDependencyStruct) Init(db *gorm.DB) (Error error) {

	if backRepoDependency.Map_DependencyDBID_DependencyPtr != nil {
		err := errors.New("In Init, backRepoDependency.Map_DependencyDBID_DependencyPtr should be nil")
		return err
	}

	if backRepoDependency.Map_DependencyDBID_DependencyDB != nil {
		err := errors.New("In Init, backRepoDependency.Map_DependencyDBID_DependencyDB should be nil")
		return err
	}

	if backRepoDependency.Map_DependencyPtr_DependencyDBID != nil {
		err := errors.New("In Init, backRepoDependency.Map_DependencyPtr_DependencyDBID should be nil")
		return err
	}

	tmp := make(map[uint]*models.Dependency, 0)
	backRepoDependency.Map_DependencyDBID_DependencyPtr = &tmp

	tmpDB := make(map[uint]*DependencyDB, 0)
	backRepoDependency.Map_DependencyDBID_DependencyDB = &tmpDB

	tmpID := make(map[*models.Dependency]uint, 0)
	backRepoDependency.Map_DependencyPtr_DependencyDBID = &tmpID

	backRepoDependency.db = db
	return
}

// BackRepoDependency.CommitPhaseOne commits all staged instances of Dependency to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoDependency *BackRepoDependencyStruct) CommitPhaseOne(stage *models.StageStruct) (Error error) {

	for dependency := range stage.Dependencys {
		backRepoDependency.CommitPhaseOneInstance(dependency)
	}

	// parse all backRepo instance and checks wether some instance have been unstaged
	// in this case, remove them from the back repo
	for id, dependency := range *backRepoDependency.Map_DependencyDBID_DependencyPtr {
		if _, ok := stage.Dependencys[dependency]; !ok {
			backRepoDependency.CommitDeleteInstance(id)
		}
	}

	return
}

// BackRepoDependency.CommitDeleteInstance commits deletion of Dependency to the BackRepo
func (backRepoDependency *BackRepoDependencyStruct) CommitDeleteInstance(id uint) (Error error) {

	dependency := (*backRepoDependency.Map_DependencyDBID_DependencyPtr)[id]

	// dependency is not staged anymore, remove dependencyDB
	dependencyDB := (*backRepoDependency.Map_DependencyDBID_DependencyDB)[id]
	query := backRepoDependency.db.Unscoped().Delete(&dependencyDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	delete((*backRepoDependency.Map_DependencyPtr_DependencyDBID), dependency)
	delete((*backRepoDependency.Map_DependencyDBID_DependencyPtr), id)
	delete((*backRepoDependency.Map_DependencyDBID_DependencyDB), id)

	return
}

// BackRepoDependency.CommitPhaseOneInstance commits dependency staged instances of Dependency to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoDependency *BackRepoDependencyStruct) CommitPhaseOneInstance(dependency *models.Dependency) (Error error) {

	// check if the dependency is not commited yet
	if _, ok := (*backRepoDependency.Map_DependencyPtr_DependencyDBID)[dependency]; ok {
		return
	}

	// initiate dependency
	var dependencyDB DependencyDB
	dependencyDB.Dependency = *dependency

	query := backRepoDependency.db.Create(&dependencyDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	(*backRepoDependency.Map_DependencyPtr_DependencyDBID)[dependency] = dependencyDB.ID
	(*backRepoDependency.Map_DependencyDBID_DependencyPtr)[dependencyDB.ID] = dependency
	(*backRepoDependency.Map_DependencyDBID_DependencyDB)[dependencyDB.ID] = &dependencyDB

	return
}

// BackRepoDependency.CommitPhaseTwo commits all staged instances of Dependency to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoDependency *BackRepoDependencyStruct) CommitPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	for idx, dependency := range *backRepoDependency.Map_DependencyDBID_DependencyPtr {
		backRepoDependency.CommitPhaseTwoInstance(backRepo, idx, dependency)
	}

	return
}

// BackRepoDependency.CommitPhaseTwoInstance commits {{structname }} of models.Dependency to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoDependency *BackRepoDependencyStruct) CommitPhaseTwoInstance(backRepo *BackRepoStruct, idx uint, dependency *models.Dependency) (Error error) {

	// fetch matching dependencyDB
	if dependencyDB, ok := (*backRepoDependency.Map_DependencyDBID_DependencyDB)[idx]; ok {

		{
			{
				// insertion point for fields commit
				dependencyDB.Name_Data.String = dependency.Name
				dependencyDB.Name_Data.Valid = true

				// commit pointer value dependency.Task translates to updating the dependency.TaskID
				dependencyDB.TaskID.Valid = true // allow for a 0 value (nil association)
				if dependency.Task != nil {
					if TaskId, ok := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[dependency.Task]; ok {
						dependencyDB.TaskID.Int64 = int64(TaskId)
					}
				}

			}
		}
		query := backRepoDependency.db.Save(&dependencyDB)
		if query.Error != nil {
			return query.Error
		}

	} else {
		err := errors.New(
			fmt.Sprintf("Unkown Dependency intance %s", dependency.Name))
		return err
	}

	return
}

// BackRepoDependency.CheckoutPhaseOne Checkouts all BackRepo instances to the Stage
//
// Phase One is the creation of instance in the stage
//
// NOTE: the is supposed to have been reset before
//
func (backRepoDependency *BackRepoDependencyStruct) CheckoutPhaseOne() (Error error) {

	dependencyDBArray := make([]DependencyDB, 0)
	query := backRepoDependency.db.Find(&dependencyDBArray)
	if query.Error != nil {
		return query.Error
	}

	// copy orm objects to the the map
	for _, dependencyDB := range dependencyDBArray {
		backRepoDependency.CheckoutPhaseOneInstance(&dependencyDB)
	}

	return
}

// CheckoutPhaseOneInstance takes a dependencyDB that has been found in the DB, updates the backRepo and stages the
// models version of the dependencyDB
func (backRepoDependency *BackRepoDependencyStruct) CheckoutPhaseOneInstance(dependencyDB *DependencyDB) (Error error) {

	// if absent, create entries in the backRepoDependency maps.
	dependencyWithNewFieldValues := dependencyDB.Dependency
	if _, ok := (*backRepoDependency.Map_DependencyDBID_DependencyPtr)[dependencyDB.ID]; !ok {

		(*backRepoDependency.Map_DependencyDBID_DependencyPtr)[dependencyDB.ID] = &dependencyWithNewFieldValues
		(*backRepoDependency.Map_DependencyPtr_DependencyDBID)[&dependencyWithNewFieldValues] = dependencyDB.ID

		// append model store with the new element
		dependencyWithNewFieldValues.Stage()
	}
	dependencyDBWithNewFieldValues := *dependencyDB
	(*backRepoDependency.Map_DependencyDBID_DependencyDB)[dependencyDB.ID] = &dependencyDBWithNewFieldValues

	return
}

// BackRepoDependency.CheckoutPhaseTwo Checkouts all staged instances of Dependency to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoDependency *BackRepoDependencyStruct) CheckoutPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	// parse all DB instance and update all pointer fields of the translated models instance
	for _, dependencyDB := range *backRepoDependency.Map_DependencyDBID_DependencyDB {
		backRepoDependency.CheckoutPhaseTwoInstance(backRepo, dependencyDB)
	}
	return
}

// BackRepoDependency.CheckoutPhaseTwoInstance Checkouts staged instances of Dependency to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoDependency *BackRepoDependencyStruct) CheckoutPhaseTwoInstance(backRepo *BackRepoStruct, dependencyDB *DependencyDB) (Error error) {

	dependency := (*backRepoDependency.Map_DependencyDBID_DependencyPtr)[dependencyDB.ID]
	_ = dependency // sometimes, there is no code generated. This lines voids the "unused variable" compilation error
	{
		{
			// insertion point for checkout, i.e. update of fields of stage instance from fields of back repo instances
			//
			dependency.Name = dependencyDB.Name_Data.String

			// Task field
			if dependencyDB.TaskID.Int64 != 0 {
				dependency.Task = (*backRepo.BackRepoTask.Map_TaskDBID_TaskPtr)[uint(dependencyDB.TaskID.Int64)]
			}

		}
	}
	return
}

// CommitDependency allows commit of a single dependency (if already staged)
func (backRepo *BackRepoStruct) CommitDependency(dependency *models.Dependency) {
	backRepo.BackRepoDependency.CommitPhaseOneInstance(dependency)
	if id, ok := (*backRepo.BackRepoDependency.Map_DependencyPtr_DependencyDBID)[dependency]; ok {
		backRepo.BackRepoDependency.CommitPhaseTwoInstance(backRepo, id, dependency)
	}
}

// CommitDependency allows checkout of a single dependency (if already staged and with a BackRepo id)
func (backRepo *BackRepoStruct) CheckoutDependency(dependency *models.Dependency) {
	// check if the dependency is staged
	if _, ok := (*backRepo.BackRepoDependency.Map_DependencyPtr_DependencyDBID)[dependency]; ok {

		if id, ok := (*backRepo.BackRepoDependency.Map_DependencyPtr_DependencyDBID)[dependency]; ok {
			var dependencyDB DependencyDB
			dependencyDB.ID = id

			if err := backRepo.BackRepoDependency.db.First(&dependencyDB, id).Error; err != nil {
				log.Panicln("CheckoutDependency : Problem with getting object with id:", id)
			}
			backRepo.BackRepoDependency.CheckoutPhaseOneInstance(&dependencyDB)
			backRepo.BackRepoDependency.CheckoutPhaseTwoInstance(backRepo, &dependencyDB)
		}
	}
}