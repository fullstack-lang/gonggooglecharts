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
var dummy_TaskUse sql.NullBool
var __TaskUse_time__dummyDeclaration time.Duration

// TaskUseAPI is the input in POST API
//
// for POST, API, one needs the fields of the model as well as the fields
// from associations ("Has One" and "Has Many") that are generated to
// fullfill the ORM requirements for associations
//
// swagger:model taskuseAPI
type TaskUseAPI struct {
	models.TaskUse

	// insertion for fields declaration
	// Declation for basic field taskuseDB.Name {{BasicKind}} (to be completed)
	Name_Data sql.NullString

	// field Task is a pointer to another Struct (optional or 0..1)
	// This field is generated into another field to enable AS ONE association
	TaskID sql.NullInt64

	// all gong Struct has a Name field, this enables this data to object field
	TaskName string

	// Declation for basic field taskuseDB.RankInGanttDiagram {{BasicKind}} (to be completed)
	RankInGanttDiagram_Data sql.NullInt64

	// Implementation of a reverse ID for field GanttChart{}.Tasks []*TaskUse
	GanttChart_TasksDBID sql.NullInt64

	// end of insertion
}

// TaskUseDB describes a taskuse in the database
//
// It incorporates all fields : from the model, from the generated field for the API and the GORM ID
//
// swagger:model taskuseDB
type TaskUseDB struct {
	gorm.Model

	TaskUseAPI
}

// TaskUseDBs arrays taskuseDBs
// swagger:response taskuseDBsResponse
type TaskUseDBs []TaskUseDB

// TaskUseDBResponse provides response
// swagger:response taskuseDBResponse
type TaskUseDBResponse struct {
	TaskUseDB
}

type BackRepoTaskUseStruct struct {
	// stores TaskUseDB according to their gorm ID
	Map_TaskUseDBID_TaskUseDB *map[uint]*TaskUseDB

	// stores TaskUseDB ID according to TaskUse address
	Map_TaskUsePtr_TaskUseDBID *map[*models.TaskUse]uint

	// stores TaskUse according to their gorm ID
	Map_TaskUseDBID_TaskUsePtr *map[uint]*models.TaskUse

	db *gorm.DB
}

// BackRepoTaskUse.Init set up the BackRepo of the TaskUse
func (backRepoTaskUse *BackRepoTaskUseStruct) Init(db *gorm.DB) (Error error) {

	if backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr != nil {
		err := errors.New("In Init, backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr should be nil")
		return err
	}

	if backRepoTaskUse.Map_TaskUseDBID_TaskUseDB != nil {
		err := errors.New("In Init, backRepoTaskUse.Map_TaskUseDBID_TaskUseDB should be nil")
		return err
	}

	if backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID != nil {
		err := errors.New("In Init, backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID should be nil")
		return err
	}

	tmp := make(map[uint]*models.TaskUse, 0)
	backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr = &tmp

	tmpDB := make(map[uint]*TaskUseDB, 0)
	backRepoTaskUse.Map_TaskUseDBID_TaskUseDB = &tmpDB

	tmpID := make(map[*models.TaskUse]uint, 0)
	backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID = &tmpID

	backRepoTaskUse.db = db
	return
}

// BackRepoTaskUse.CommitPhaseOne commits all staged instances of TaskUse to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoTaskUse *BackRepoTaskUseStruct) CommitPhaseOne(stage *models.StageStruct) (Error error) {

	for taskuse := range stage.TaskUses {
		backRepoTaskUse.CommitPhaseOneInstance(taskuse)
	}

	// parse all backRepo instance and checks wether some instance have been unstaged
	// in this case, remove them from the back repo
	for id, taskuse := range *backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr {
		if _, ok := stage.TaskUses[taskuse]; !ok {
			backRepoTaskUse.CommitDeleteInstance(id)
		}
	}

	return
}

// BackRepoTaskUse.CommitDeleteInstance commits deletion of TaskUse to the BackRepo
func (backRepoTaskUse *BackRepoTaskUseStruct) CommitDeleteInstance(id uint) (Error error) {

	taskuse := (*backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr)[id]

	// taskuse is not staged anymore, remove taskuseDB
	taskuseDB := (*backRepoTaskUse.Map_TaskUseDBID_TaskUseDB)[id]
	query := backRepoTaskUse.db.Unscoped().Delete(&taskuseDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	delete((*backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID), taskuse)
	delete((*backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr), id)
	delete((*backRepoTaskUse.Map_TaskUseDBID_TaskUseDB), id)

	return
}

// BackRepoTaskUse.CommitPhaseOneInstance commits taskuse staged instances of TaskUse to the BackRepo
// Phase One is the creation of instance in the database if it is not yet done to get the unique ID for each staged instance
func (backRepoTaskUse *BackRepoTaskUseStruct) CommitPhaseOneInstance(taskuse *models.TaskUse) (Error error) {

	// check if the taskuse is not commited yet
	if _, ok := (*backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID)[taskuse]; ok {
		return
	}

	// initiate taskuse
	var taskuseDB TaskUseDB
	taskuseDB.TaskUse = *taskuse

	query := backRepoTaskUse.db.Create(&taskuseDB)
	if query.Error != nil {
		return query.Error
	}

	// update stores
	(*backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID)[taskuse] = taskuseDB.ID
	(*backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr)[taskuseDB.ID] = taskuse
	(*backRepoTaskUse.Map_TaskUseDBID_TaskUseDB)[taskuseDB.ID] = &taskuseDB

	return
}

// BackRepoTaskUse.CommitPhaseTwo commits all staged instances of TaskUse to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTaskUse *BackRepoTaskUseStruct) CommitPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	for idx, taskuse := range *backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr {
		backRepoTaskUse.CommitPhaseTwoInstance(backRepo, idx, taskuse)
	}

	return
}

// BackRepoTaskUse.CommitPhaseTwoInstance commits {{structname }} of models.TaskUse to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTaskUse *BackRepoTaskUseStruct) CommitPhaseTwoInstance(backRepo *BackRepoStruct, idx uint, taskuse *models.TaskUse) (Error error) {

	// fetch matching taskuseDB
	if taskuseDB, ok := (*backRepoTaskUse.Map_TaskUseDBID_TaskUseDB)[idx]; ok {

		{
			{
				// insertion point for fields commit
				taskuseDB.Name_Data.String = taskuse.Name
				taskuseDB.Name_Data.Valid = true

				// commit pointer value taskuse.Task translates to updating the taskuse.TaskID
				taskuseDB.TaskID.Valid = true // allow for a 0 value (nil association)
				if taskuse.Task != nil {
					if TaskId, ok := (*backRepo.BackRepoTask.Map_TaskPtr_TaskDBID)[taskuse.Task]; ok {
						taskuseDB.TaskID.Int64 = int64(TaskId)
					}
				}

				taskuseDB.RankInGanttDiagram_Data.Int64 = int64(taskuse.RankInGanttDiagram)
				taskuseDB.RankInGanttDiagram_Data.Valid = true

			}
		}
		query := backRepoTaskUse.db.Save(&taskuseDB)
		if query.Error != nil {
			return query.Error
		}

	} else {
		err := errors.New(
			fmt.Sprintf("Unkown TaskUse intance %s", taskuse.Name))
		return err
	}

	return
}

// BackRepoTaskUse.CheckoutPhaseOne Checkouts all BackRepo instances to the Stage
//
// Phase One is the creation of instance in the stage
//
// NOTE: the is supposed to have been reset before
//
func (backRepoTaskUse *BackRepoTaskUseStruct) CheckoutPhaseOne() (Error error) {

	taskuseDBArray := make([]TaskUseDB, 0)
	query := backRepoTaskUse.db.Find(&taskuseDBArray)
	if query.Error != nil {
		return query.Error
	}

	// copy orm objects to the the map
	for _, taskuseDB := range taskuseDBArray {
		backRepoTaskUse.CheckoutPhaseOneInstance(&taskuseDB)
	}

	return
}

// CheckoutPhaseOneInstance takes a taskuseDB that has been found in the DB, updates the backRepo and stages the
// models version of the taskuseDB
func (backRepoTaskUse *BackRepoTaskUseStruct) CheckoutPhaseOneInstance(taskuseDB *TaskUseDB) (Error error) {

	// if absent, create entries in the backRepoTaskUse maps.
	taskuseWithNewFieldValues := taskuseDB.TaskUse
	if _, ok := (*backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr)[taskuseDB.ID]; !ok {

		(*backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr)[taskuseDB.ID] = &taskuseWithNewFieldValues
		(*backRepoTaskUse.Map_TaskUsePtr_TaskUseDBID)[&taskuseWithNewFieldValues] = taskuseDB.ID

		// append model store with the new element
		taskuseWithNewFieldValues.Stage()
	}
	taskuseDBWithNewFieldValues := *taskuseDB
	(*backRepoTaskUse.Map_TaskUseDBID_TaskUseDB)[taskuseDB.ID] = &taskuseDBWithNewFieldValues

	return
}

// BackRepoTaskUse.CheckoutPhaseTwo Checkouts all staged instances of TaskUse to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTaskUse *BackRepoTaskUseStruct) CheckoutPhaseTwo(backRepo *BackRepoStruct) (Error error) {

	// parse all DB instance and update all pointer fields of the translated models instance
	for _, taskuseDB := range *backRepoTaskUse.Map_TaskUseDBID_TaskUseDB {
		backRepoTaskUse.CheckoutPhaseTwoInstance(backRepo, taskuseDB)
	}
	return
}

// BackRepoTaskUse.CheckoutPhaseTwoInstance Checkouts staged instances of TaskUse to the BackRepo
// Phase Two is the update of instance with the field in the database
func (backRepoTaskUse *BackRepoTaskUseStruct) CheckoutPhaseTwoInstance(backRepo *BackRepoStruct, taskuseDB *TaskUseDB) (Error error) {

	taskuse := (*backRepoTaskUse.Map_TaskUseDBID_TaskUsePtr)[taskuseDB.ID]
	_ = taskuse // sometimes, there is no code generated. This lines voids the "unused variable" compilation error
	{
		{
			// insertion point for checkout, i.e. update of fields of stage instance from fields of back repo instances
			//
			taskuse.Name = taskuseDB.Name_Data.String

			// Task field
			if taskuseDB.TaskID.Int64 != 0 {
				taskuse.Task = (*backRepo.BackRepoTask.Map_TaskDBID_TaskPtr)[uint(taskuseDB.TaskID.Int64)]
			}

			taskuse.RankInGanttDiagram = int(taskuseDB.RankInGanttDiagram_Data.Int64)

		}
	}
	return
}

// CommitTaskUse allows commit of a single taskuse (if already staged)
func (backRepo *BackRepoStruct) CommitTaskUse(taskuse *models.TaskUse) {
	backRepo.BackRepoTaskUse.CommitPhaseOneInstance(taskuse)
	if id, ok := (*backRepo.BackRepoTaskUse.Map_TaskUsePtr_TaskUseDBID)[taskuse]; ok {
		backRepo.BackRepoTaskUse.CommitPhaseTwoInstance(backRepo, id, taskuse)
	}
}

// CommitTaskUse allows checkout of a single taskuse (if already staged and with a BackRepo id)
func (backRepo *BackRepoStruct) CheckoutTaskUse(taskuse *models.TaskUse) {
	// check if the taskuse is staged
	if _, ok := (*backRepo.BackRepoTaskUse.Map_TaskUsePtr_TaskUseDBID)[taskuse]; ok {

		if id, ok := (*backRepo.BackRepoTaskUse.Map_TaskUsePtr_TaskUseDBID)[taskuse]; ok {
			var taskuseDB TaskUseDB
			taskuseDB.ID = id

			if err := backRepo.BackRepoTaskUse.db.First(&taskuseDB, id).Error; err != nil {
				log.Panicln("CheckoutTaskUse : Problem with getting object with id:", id)
			}
			backRepo.BackRepoTaskUse.CheckoutPhaseOneInstance(&taskuseDB)
			backRepo.BackRepoTaskUse.CheckoutPhaseTwoInstance(backRepo, &taskuseDB)
		}
	}
}
