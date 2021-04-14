// generated by stacks/gong/go/models/controller_file.go
package controllers

import (
	"net/http"
	"time"

	"github.com/fullstack-lang/gonggooglecharts/go/models"
	"github.com/fullstack-lang/gonggooglecharts/go/orm"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// declaration in order to justify use of the models import
var __TaskUse__dummysDeclaration__ models.TaskUse
var __TaskUse_time__dummyDeclaration time.Duration

// An TaskUseID parameter model.
//
// This is used for operations that want the ID of an order in the path
// swagger:parameters getTaskUse updateTaskUse deleteTaskUse
type TaskUseID struct {
	// The ID of the order
	//
	// in: path
	// required: true
	ID int64
}

// TaskUseInput is a schema that can validate the user’s
// input to prevent us from getting invalid data
// swagger:parameters postTaskUse updateTaskUse
type TaskUseInput struct {
	// The TaskUse to submit or modify
	// in: body
	TaskUse *orm.TaskUseAPI
}

// GetTaskUses
//
// swagger:route GET /taskuses taskuses getTaskUses
//
// Get all taskuses
//
// Responses:
//    default: genericError
//        200: taskuseDBsResponse
func GetTaskUses(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var taskuses []orm.TaskUseDB
	query := db.Find(&taskuses)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// for each taskuse, update fields from the database nullable fields
	for idx := range taskuses {
		taskuse := &taskuses[idx]
		_ = taskuse
		// insertion point for updating fields
		if taskuse.Name_Data.Valid {
			taskuse.Name = taskuse.Name_Data.String
		}

		if taskuse.RankInGanttDiagram_Data.Valid {
			taskuse.RankInGanttDiagram = int(taskuse.RankInGanttDiagram_Data.Int64)
		}

	}

	c.JSON(http.StatusOK, taskuses)
}

// PostTaskUse
//
// swagger:route POST /taskuses taskuses postTaskUse
//
// Creates a taskuse
//     Consumes:
//     - application/json
//
//     Produces:
//     - application/json
//
//     Responses:
//       200: taskuseDBResponse
func PostTaskUse(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	// Validate input
	var input orm.TaskUseAPI

	err := c.ShouldBindJSON(&input)
	if err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Create taskuse
	taskuseDB := orm.TaskUseDB{}
	taskuseDB.TaskUseAPI = input
	// insertion point for nullable field set
	taskuseDB.Name_Data.String = input.Name
	taskuseDB.Name_Data.Valid = true

	taskuseDB.RankInGanttDiagram_Data.Int64 = int64(input.RankInGanttDiagram)
	taskuseDB.RankInGanttDiagram_Data.Valid = true

	query := db.Create(&taskuseDB)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// a POST is equivalent to a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementCommitNb()

	c.JSON(http.StatusOK, taskuseDB)
}

// GetTaskUse
//
// swagger:route GET /taskuses/{ID} taskuses getTaskUse
//
// Gets the details for a taskuse.
//
// Responses:
//    default: genericError
//        200: taskuseDBResponse
func GetTaskUse(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	// Get taskuse in DB
	var taskuse orm.TaskUseDB
	if err := db.First(&taskuse, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// insertion point for fields value set from nullable fields
	if taskuse.Name_Data.Valid {
		taskuse.Name = taskuse.Name_Data.String
	}

	if taskuse.RankInGanttDiagram_Data.Valid {
		taskuse.RankInGanttDiagram = int(taskuse.RankInGanttDiagram_Data.Int64)
	}

	c.JSON(http.StatusOK, taskuse)
}

// UpdateTaskUse
//
// swagger:route PATCH /taskuses/{ID} taskuses updateTaskUse
//
// Update a taskuse
//
// Responses:
//    default: genericError
//        200: taskuseDBResponse
func UpdateTaskUse(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	// Get model if exist
	var taskuseDB orm.TaskUseDB

	// fetch the taskuse
	query := db.First(&taskuseDB, c.Param("id"))

	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Validate input
	var input orm.TaskUseAPI
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// update
	// insertion point for nullable field set
	input.Name_Data.String = input.Name
	input.Name_Data.Valid = true

	input.RankInGanttDiagram_Data.Int64 = int64(input.RankInGanttDiagram)
	input.RankInGanttDiagram_Data.Valid = true

	query = db.Model(&taskuseDB).Updates(input)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// an UPDATE generates a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementCommitNb()

	// return status OK with the marshalling of the the taskuseDB
	c.JSON(http.StatusOK, taskuseDB)
}

// DeleteTaskUse
//
// swagger:route DELETE /taskuses/{ID} taskuses deleteTaskUse
//
// Delete a taskuse
//
// Responses:
//    default: genericError
func DeleteTaskUse(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	// Get model if exist
	var taskuseDB orm.TaskUseDB
	if err := db.First(&taskuseDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// with gorm.Model field, default delete is a soft delete. Unscoped() force delete
	db.Unscoped().Delete(&taskuseDB)

	// a DELETE generates a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementCommitNb()

	c.JSON(http.StatusOK, gin.H{"data": true})
}
