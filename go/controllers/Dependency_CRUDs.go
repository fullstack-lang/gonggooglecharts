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
var __Dependency__dummysDeclaration__ models.Dependency
var __Dependency_time__dummyDeclaration time.Duration

// An DependencyID parameter model.
//
// This is used for operations that want the ID of an order in the path
// swagger:parameters getDependency updateDependency deleteDependency
type DependencyID struct {
	// The ID of the order
	//
	// in: path
	// required: true
	ID int64
}

// DependencyInput is a schema that can validate the user’s
// input to prevent us from getting invalid data
// swagger:parameters postDependency updateDependency
type DependencyInput struct {
	// The Dependency to submit or modify
	// in: body
	Dependency *orm.DependencyAPI
}

// GetDependencys
//
// swagger:route GET /dependencys dependencys getDependencys
//
// Get all dependencys
//
// Responses:
//    default: genericError
//        200: dependencyDBsResponse
func GetDependencys(c *gin.Context) {
	db := orm.BackRepo.BackRepoDependency.GetDB()
	
	// source slice
	var dependencyDBs []orm.DependencyDB
	query := db.Find(&dependencyDBs)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// slice that will be transmitted to the front
	dependencyAPIs := make([]orm.DependencyAPI, 0)

	// for each dependency, update fields from the database nullable fields
	for idx := range dependencyDBs {
		dependencyDB := &dependencyDBs[idx]
		_ = dependencyDB
		var dependencyAPI orm.DependencyAPI

		// insertion point for updating fields
		dependencyAPI.ID = dependencyDB.ID
		dependencyDB.CopyBasicFieldsToDependency(&dependencyAPI.Dependency)
		dependencyAPI.DependencyPointersEnconding = dependencyDB.DependencyPointersEnconding
		dependencyAPIs = append(dependencyAPIs, dependencyAPI)
	}

	c.JSON(http.StatusOK, dependencyAPIs)
}

// PostDependency
//
// swagger:route POST /dependencys dependencys postDependency
//
// Creates a dependency
//     Consumes:
//     - application/json
//
//     Produces:
//     - application/json
//
//     Responses:
//       200: dependencyDBResponse
func PostDependency(c *gin.Context) {
	db := orm.BackRepo.BackRepoDependency.GetDB()

	// Validate input
	var input orm.DependencyAPI

	err := c.ShouldBindJSON(&input)
	if err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Create dependency
	dependencyDB := orm.DependencyDB{}
	dependencyDB.DependencyPointersEnconding = input.DependencyPointersEnconding
	dependencyDB.CopyBasicFieldsFromDependency(&input.Dependency)

	query := db.Create(&dependencyDB)
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

	c.JSON(http.StatusOK, dependencyDB)
}

// GetDependency
//
// swagger:route GET /dependencys/{ID} dependencys getDependency
//
// Gets the details for a dependency.
//
// Responses:
//    default: genericError
//        200: dependencyDBResponse
func GetDependency(c *gin.Context) {
	db := orm.BackRepo.BackRepoDependency.GetDB()

	// Get dependencyDB in DB
	var dependencyDB orm.DependencyDB
	if err := db.First(&dependencyDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	var dependencyAPI orm.DependencyAPI
	dependencyAPI.ID = dependencyDB.ID
	dependencyAPI.DependencyPointersEnconding = dependencyDB.DependencyPointersEnconding
	dependencyDB.CopyBasicFieldsToDependency(&dependencyAPI.Dependency)

	c.JSON(http.StatusOK, dependencyAPI)
}

// UpdateDependency
//
// swagger:route PATCH /dependencys/{ID} dependencys updateDependency
//
// Update a dependency
//
// Responses:
//    default: genericError
//        200: dependencyDBResponse
func UpdateDependency(c *gin.Context) {
	db := orm.BackRepo.BackRepoDependency.GetDB()

	// Get model if exist
	var dependencyDB orm.DependencyDB

	// fetch the dependency
	query := db.First(&dependencyDB, c.Param("id"))

	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Validate input
	var input orm.DependencyAPI
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// update
	dependencyDB.CopyBasicFieldsFromDependency(&input.Dependency)
	dependencyDB.DependencyPointersEnconding = input.DependencyPointersEnconding

	query = db.Model(&dependencyDB).Updates(dependencyDB)
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

	// return status OK with the marshalling of the the dependencyDB
	c.JSON(http.StatusOK, dependencyDB)
}

// DeleteDependency
//
// swagger:route DELETE /dependencys/{ID} dependencys deleteDependency
//
// Delete a dependency
//
// Responses:
//    default: genericError
func DeleteDependency(c *gin.Context) {
	db := orm.BackRepo.BackRepoDependency.GetDB()

	// Get model if exist
	var dependencyDB orm.DependencyDB
	if err := db.First(&dependencyDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// with gorm.Model field, default delete is a soft delete. Unscoped() force delete
	db.Unscoped().Delete(&dependencyDB)

	// a DELETE generates a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementPushFromFrontNb()

	c.JSON(http.StatusOK, gin.H{"data": true})
}
