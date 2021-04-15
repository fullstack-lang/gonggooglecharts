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
var dummy_Task sql.NullBool
var __Task_time__dummyDeclaration time.Duration

// TaskAPI is the input in POST API
//
// for POST, API, one needs the fields of the model as well as the fields
// from associations ("Has One" and "Has Many") that are generated to
// fullfill the ORM requirements for associations
//
// swagger:model taskAPI
type TaskAPI struct {
	models.Task

	// insertion for fields declaration
	// Declation for basic field taskDB.Name {{BasicKind}} (to be completed)
	Name_Data sql.NullString

	// Declation for basic field taskDB.DisplayedName {{BasicKind}} (to be completed)
	DisplayedName_Data sql.NullString

	// field Ressource is a pointer to another Struct (optional or 0..1)
	// This field is generated into another field to enable AS ONE association
	RessourceID sql.NullInt64

	// all gong Struct has a Name field, this enables this data to object field
	RessourceName string

	// Declation for basic field taskDB.Start
	Start_Data sql.NullTime

	// Declation for basic field taskDB.End
	End_Data sql.NullTime

	// Declation for basic field taskDB.Duration {{BasicKind}} (to be completed)
	Duration_Data sql.NullInt64

	// Declation for basic field taskDB.PercentComplete {{BasicKind}} (to be completed)
	PercentComplete_Data sql.NullFloat64

	// field Dependencies is a pointer to another Struct (optional or 0..1)
	// This field is generated into another field to enable AS ONE association
	DependenciesID sql.NullInt64

	// all gong Struct has a Name field, this enables this data to object field
	DependenciesName string

	// Implementation of a reverse ID for field GanttChart{}.Tasks []*Task
	GanttChart_TasksDBID sql.NullInt64

	// end of insertion
}

// TaskDB describes a task in the database
//
// It incorporates all fields : from the model, from the generated field for the API and the GORM ID
//
// swagger:model taskDB
type TaskDB struct {
	gorm.Model

	TaskAPI
}

// TaskDBs arrays taskDBs
// swagger:response taskDBsResponse
type TaskDBs []TaskDB

// TaskDBResponse provides response
// swagger:response taskDBResponse
type TaskDBResponse struct {
	TaskDB
}

type BackRepoTaskStruct struct {
	// stores TaskDB according to their gorm ID
	Map_TaskDBID_TaskDB *map[uint]*TaskDB

	// stores TaskDB ID according to Task address
	Map_TaskPtr_TaskDBID *map[*models.Task]uint

	// stores Task according to their gorm ID
	Map_TaskDBID_TaskPtr *map[uint]*models.Task

	db *gorm.DB
}

// BackRepoTask.Init set up the BackRepo of the Task
func (backRepoTask *BackRepoTaskStruct) Init(db *gorm.DB) (Error error) {

	if backRepoTask.Map_TaskDBID_TaskPtr != nil {
		err := errors.New("In Init, backRepoTask.Map_TaskDBID_TaskPtr should be nil")
		return err
	}

	if backRepoTask.Map_TaskDBID_TaskDB != nil {
		err := errors.New("In Init, backRepoTask.Map_TaskDBID_TaskDB should be nil")
		return err
	}

	if backRepoTask.Map_TaskPtr_TaskDBID != nil {
		err := errors.New("In Init, backRepoTask.Map_TaskPtr_TaskDBID should be nil")
		return err
	}

	tmp := make(map[uint]*models.Task, 0)
	backRepoTask.Map_TaskDBID_TaskPtr = &tmp

	tmpDB := make(map[uint]*TaskDB, 0)
	backRepoTask.Map_TaskDBID_TaskDB = &tmpDB

	tmpID := make(map[*models.Task]uint, 0)
	backRepoTask.Map_TaskPtr_TaskDBID = &tmpID

	backRepoTask.db = db
	return
}

// BackRepoTask.CommitPhaseOne commits all staged instances of Task to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoTask *BackRepoTaskStruct) CommitPhaseOne(stage *models.StageStruct) (Error error) {

	for task := range stage.Tasks {
		backRepoTask.CommitPhaseOneInstance(task)
	}

	// parse all backRepo instance and checks wether some instance have been unstaged
	// in this case, remove them from the back repo
	for id, task := range *backRepoTask.Map_TaskDBID_TaskPtr {
		if _, ok := stage.Tasks[task]; !ok {
			backRepoTask.CommitDeleteInstance(id)
		}
	}

	return
}

// BackRepoTask.CommitDeleteInstance commits deletion of Task to the BackRepo
func (backRepoTask *BackRepoTaskStruct) CommitDeleteInstance(id uint) (Error error) {

	task := (*backRepoTask.Map_TaskDBID_TaskPtr)[id]

	// task is not staged anymore, remove taskDB
	taskDB := (*backRepoTask.Map_TaskDBID_TaskDB)[id]
	query := backRepoTask.db.Unscoped().Delete(&taskDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	delete((*backRepoTask.Map_TaskPtr_TaskDBID), task)
	delete((*backRepoTask.Map_TaskDBID_TaskPtr), id)
	delete((*backRepoTask.Map_TaskDBID_TaskDB), id)

	return
}

// BackRepoTask.CommitPhaseOneInstance commits task staged instances of Task to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoTask *BackRepoTaskStruct) CommitPhaseOneInstance(task *models.Task) (Error error) {

	// check if the task is not commited yet
	if _, ok := (*backRepoTask.Map_TaskPtr_TaskDBID)[task]; ok {
		return
	}

	// initiate task
	var taskDB TaskDB
	taskDB.Task = *task

	query := backRepoTask.db.Create(&taskDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	(*backRepoTask.Map_TaskPtr_TaskDBID)[task] = taskDB.ID
	(*backRepoTask.Map_TaskDBID_TaskPtr)[taskDB.ID] = task
	(*backRepoTask.Map_TaskDBID_TaskDB)[taskDB.ID] = &taskDB

	return
}

// BackRepoTask.CommitPhaseTwo commits all staged instances of Task to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTask *BackRepoTaskStruct) CommitPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	for idx, task := range *backRepoTask.Map_TaskDBID_TaskPtr {
		backRepoTask.CommitPhaseTwoInstance(backRepo, idx, task)
	}

	return
}

// BackRepoTask.CommitPhaseTwoInstance commits {{structname }} of models.Task to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTask *BackRepoTaskStruct) CommitPhaseTwoInstance(backRepo *BackRepoStruct, idx uint, task *models.Task) (Error error) {

	// fetch matching taskDB
	if taskDB, ok := (*backRepoTask.Map_TaskDBID_TaskDB)[idx]; ok {

		{
			{
				// insertion point for fields commit
				taskDB.Name_Data.String = task.Name
				taskDB.Name_Data.Valid = true

				taskDB.DisplayedName_Data.String = task.DisplayedName
				taskDB.DisplayedName_Data.Valid = true

				// commit pointer value task.Ressource translates to updating the task.RessourceID
				taskDB.RessourceID.Valid = true // allow for a 0 value (nil association)
				if task.Ressource != nil {
					if RessourceId, ok := (*backRepo.BackRepoRessource.Map_RessourcePtr_RessourceDBID)[task.Ressource]; ok {
						taskDB.RessourceID.Int64 = int64(RessourceId)
					}
				}

				taskDB.Start_Data.Time = task.Start
				taskDB.Start_Data.Valid = true

				taskDB.End_Data.Time = task.End
				taskDB.End_Data.Valid = true

				taskDB.Duration_Data.Int64 = int64(task.Duration)
				taskDB.Duration_Data.Valid = true

				taskDB.PercentComplete_Data.Float64 = task.PercentComplete
				taskDB.PercentComplete_Data.Valid = true

				// commit pointer value task.Dependencies translates to updating the task.DependenciesID
				taskDB.DependenciesID.Valid = true // allow for a 0 value (nil association)
				if task.Dependencies != nil {
					if DependenciesId, ok := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[task.Dependencies]; ok {
						taskDB.DependenciesID.Int64 = int64(DependenciesId)
					}
				}

			}
		}
		query := backRepoTask.db.Save(&taskDB)
		if query.Error != nil {
			return query.Error
		}

	} else {
		err := errors.New(
			fmt.Sprintf("Unkown Task intance %s", task.Name))
		return err
	}

	return
}

// BackRepoTask.CheckoutPhaseOne Checkouts all BackRepo instances to the Stage
//
// Phase One is the creation of instance in the stage
//
// NOTE: the is supposed to have been reset before
//
func (backRepoTask *BackRepoTaskStruct) CheckoutPhaseOne() (Error error) {

	taskDBArray := make([]TaskDB, 0)
	query := backRepoTask.db.Find(&taskDBArray)
	if query.Error != nil {
		return query.Error
	}

	// copy orm objects to the the map
	for _, taskDB := range taskDBArray {
		backRepoTask.CheckoutPhaseOneInstance(&taskDB)
	}

	return
}

// CheckoutPhaseOneInstance takes a taskDB that has been found in the DB, updates the backRepo and stages the
// models version of the taskDB
func (backRepoTask *BackRepoTaskStruct) CheckoutPhaseOneInstance(taskDB *TaskDB) (Error error) {

	// if absent, create entries in the backRepoTask maps.
	taskWithNewFieldValues := taskDB.Task
	if _, ok := (*backRepoTask.Map_TaskDBID_TaskPtr)[taskDB.ID]; !ok {

		(*backRepoTask.Map_TaskDBID_TaskPtr)[taskDB.ID] = &taskWithNewFieldValues
		(*backRepoTask.Map_TaskPtr_TaskDBID)[&taskWithNewFieldValues] = taskDB.ID

		// append model store with the new element
		taskWithNewFieldValues.Stage()
	}
	taskDBWithNewFieldValues := *taskDB
	(*backRepoTask.Map_TaskDBID_TaskDB)[taskDB.ID] = &taskDBWithNewFieldValues

	return
}

// BackRepoTask.CheckoutPhaseTwo Checkouts all staged instances of Task to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTask *BackRepoTaskStruct) CheckoutPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	// parse all DB instance and update all pointer fields of the translated models instance
	for _, taskDB := range *backRepoTask.Map_TaskDBID_TaskDB {
		backRepoTask.CheckoutPhaseTwoInstance(backRepo, taskDB)
	}
	return
}

// BackRepoTask.CheckoutPhaseTwoInstance Checkouts staged instances of Task to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTask *BackRepoTaskStruct) CheckoutPhaseTwoInstance(backRepo *BackRepoStruct, taskDB *TaskDB) (Error error) {

	task := (*backRepoTask.Map_TaskDBID_TaskPtr)[taskDB.ID]
	_ = task // sometimes, there is no code generated. This lines voids the "unused variable" compilation error
	{
		{
			// insertion point for checkout, i.e. update of fields of stage instance from fields of back repo instances
			//
			task.Name = taskDB.Name_Data.String

			task.DisplayedName = taskDB.DisplayedName_Data.String

			// Ressource field
			if taskDB.RessourceID.Int64 != 0 {
				task.Ressource = (*backRepo.BackRepoRessource.Map_RessourceDBID_RessourcePtr)[uint(taskDB.RessourceID.Int64)]
			}

			task.Start = taskDB.Start_Data.Time

			task.End = taskDB.End_Data.Time

			task.Duration = time.Duration(taskDB.Duration_Data.Int64)

			task.PercentComplete = taskDB.PercentComplete_Data.Float64

			// Dependencies field
			if taskDB.DependenciesID.Int64 != 0 {
				task.Dependencies = (*backRepo.BackRepoTask.Map_TaskDBID_TaskPtr)[uint(taskDB.DependenciesID.Int64)]
			}

		}
	}
	return
}

// CommitTask allows commit of a single task (if already staged)
func (backRepo *BackRepoStruct) CommitTask(task *models.Task) {
	backRepo.BackRepoTask.CommitPhaseOneInstance(task)
	if id, ok := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[task]; ok {
		backRepo.BackRepoTask.CommitPhaseTwoInstance(backRepo, id, task)
	}
}

// CommitTask allows checkout of a single task (if already staged and with a BackRepo id)
func (backRepo *BackRepoStruct) CheckoutTask(task *models.Task) {
	// check if the task is staged
	if _, ok := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[task]; ok {

		if id, ok := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[task]; ok {
			var taskDB TaskDB
			taskDB.ID = id

			if err := backRepo.BackRepoTask.db.First(&taskDB, id).Error; err != nil {
				log.Panicln("CheckoutTask : Problem with getting object with id:", id)
			}
			backRepo.BackRepoTask.CheckoutPhaseOneInstance(&taskDB)
			backRepo.BackRepoTask.CheckoutPhaseTwoInstance(backRepo, &taskDB)
		}
	}
}
