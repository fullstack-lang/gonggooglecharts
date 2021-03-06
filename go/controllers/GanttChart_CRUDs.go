// generated by stacks/gong/go/models/controller_file.go
package controllers

import (
	"net/http"
	"time"

	"github.com/fullstack-lang/gonggooglecharts/go/models"
	"github.com/fullstack-lang/gonggooglecharts/go/orm"

	"github.com/gin-gonic/gin"
)

// declaration in order to justify use of the models import
var __GanttChart__dummysDeclaration__ models.GanttChart
var __GanttChart_time__dummyDeclaration time.Duration

// An GanttChartID parameter model.
//
// This is used for operations that want the ID of an order in the path
// swagger:parameters getGanttChart updateGanttChart deleteGanttChart
type GanttChartID struct {
	// The ID of the order
	//
	// in: path
	// required: true
	ID int64
}

// GanttChartInput is a schema that can validate the user’s
// input to prevent us from getting invalid data
// swagger:parameters postGanttChart updateGanttChart
type GanttChartInput struct {
	// The GanttChart to submit or modify
	// in: body
	GanttChart *orm.GanttChartAPI
}

// GetGanttCharts
//
// swagger:route GET /ganttcharts ganttcharts getGanttCharts
//
// Get all ganttcharts
//
// Responses:
//    default: genericError
//        200: ganttchartDBsResponse
func GetGanttCharts(c *gin.Context) {
	db := orm.BackRepo.BackRepoGanttChart.GetDB()
	
	// source slice
	var ganttchartDBs []orm.GanttChartDB
	query := db.Find(&ganttchartDBs)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// slice that will be transmitted to the front
	ganttchartAPIs := make([]orm.GanttChartAPI, 0)

	// for each ganttchart, update fields from the database nullable fields
	for idx := range ganttchartDBs {
		ganttchartDB := &ganttchartDBs[idx]
		_ = ganttchartDB
		var ganttchartAPI orm.GanttChartAPI

		// insertion point for updating fields
		ganttchartAPI.ID = ganttchartDB.ID
		ganttchartDB.CopyBasicFieldsToGanttChart(&ganttchartAPI.GanttChart)
		ganttchartAPI.GanttChartPointersEnconding = ganttchartDB.GanttChartPointersEnconding
		ganttchartAPIs = append(ganttchartAPIs, ganttchartAPI)
	}

	c.JSON(http.StatusOK, ganttchartAPIs)
}

// PostGanttChart
//
// swagger:route POST /ganttcharts ganttcharts postGanttChart
//
// Creates a ganttchart
//     Consumes:
//     - application/json
//
//     Produces:
//     - application/json
//
//     Responses:
//       200: ganttchartDBResponse
func PostGanttChart(c *gin.Context) {
	db := orm.BackRepo.BackRepoGanttChart.GetDB()

	// Validate input
	var input orm.GanttChartAPI

	err := c.ShouldBindJSON(&input)
	if err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Create ganttchart
	ganttchartDB := orm.GanttChartDB{}
	ganttchartDB.GanttChartPointersEnconding = input.GanttChartPointersEnconding
	ganttchartDB.CopyBasicFieldsFromGanttChart(&input.GanttChart)

	query := db.Create(&ganttchartDB)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// a POST is equivalent to a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementPushFromFrontNb()

	c.JSON(http.StatusOK, ganttchartDB)
}

// GetGanttChart
//
// swagger:route GET /ganttcharts/{ID} ganttcharts getGanttChart
//
// Gets the details for a ganttchart.
//
// Responses:
//    default: genericError
//        200: ganttchartDBResponse
func GetGanttChart(c *gin.Context) {
	db := orm.BackRepo.BackRepoGanttChart.GetDB()

	// Get ganttchartDB in DB
	var ganttchartDB orm.GanttChartDB
	if err := db.First(&ganttchartDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	var ganttchartAPI orm.GanttChartAPI
	ganttchartAPI.ID = ganttchartDB.ID
	ganttchartAPI.GanttChartPointersEnconding = ganttchartDB.GanttChartPointersEnconding
	ganttchartDB.CopyBasicFieldsToGanttChart(&ganttchartAPI.GanttChart)

	c.JSON(http.StatusOK, ganttchartAPI)
}

// UpdateGanttChart
//
// swagger:route PATCH /ganttcharts/{ID} ganttcharts updateGanttChart
//
// Update a ganttchart
//
// Responses:
//    default: genericError
//        200: ganttchartDBResponse
func UpdateGanttChart(c *gin.Context) {
	db := orm.BackRepo.BackRepoGanttChart.GetDB()

	// Get model if exist
	var ganttchartDB orm.GanttChartDB

	// fetch the ganttchart
	query := db.First(&ganttchartDB, c.Param("id"))

	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Validate input
	var input orm.GanttChartAPI
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// update
	ganttchartDB.CopyBasicFieldsFromGanttChart(&input.GanttChart)
	ganttchartDB.GanttChartPointersEnconding = input.GanttChartPointersEnconding

	query = db.Model(&ganttchartDB).Updates(ganttchartDB)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// an UPDATE generates a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementPushFromFrontNb()

	// return status OK with the marshalling of the the ganttchartDB
	c.JSON(http.StatusOK, ganttchartDB)
}

// DeleteGanttChart
//
// swagger:route DELETE /ganttcharts/{ID} ganttcharts deleteGanttChart
//
// Delete a ganttchart
//
// Responses:
//    default: genericError
func DeleteGanttChart(c *gin.Context) {
	db := orm.BackRepo.BackRepoGanttChart.GetDB()

	// Get model if exist
	var ganttchartDB orm.GanttChartDB
	if err := db.First(&ganttchartDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// with gorm.Model field, default delete is a soft delete. Unscoped() force delete
	db.Unscoped().Delete(&ganttchartDB)

	// a DELETE generates a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementPushFromFrontNb()

	c.JSON(http.StatusOK, gin.H{"data": true})
}
