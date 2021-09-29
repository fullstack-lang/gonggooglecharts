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
var __Ressource__dummysDeclaration__ models.Ressource
var __Ressource_time__dummyDeclaration time.Duration

// An RessourceID parameter model.
//
// This is used for operations that want the ID of an order in the path
// swagger:parameters getRessource updateRessource deleteRessource
type RessourceID struct {
	// The ID of the order
	//
	// in: path
	// required: true
	ID int64
}

// RessourceInput is a schema that can validate the user’s
// input to prevent us from getting invalid data
// swagger:parameters postRessource updateRessource
type RessourceInput struct {
	// The Ressource to submit or modify
	// in: body
	Ressource *orm.RessourceAPI
}

// GetRessources
//
// swagger:route GET /ressources ressources getRessources
//
// Get all ressources
//
// Responses:
//    default: genericError
//        200: ressourceDBsResponse
func GetRessources(c *gin.Context) {
	db := orm.BackRepo.BackRepoRessource.GetDB()
	
	// source slice
	var ressourceDBs []orm.RessourceDB
	query := db.Find(&ressourceDBs)
	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// slice that will be transmitted to the front
	ressourceAPIs := make([]orm.RessourceAPI, 0)

	// for each ressource, update fields from the database nullable fields
	for idx := range ressourceDBs {
		ressourceDB := &ressourceDBs[idx]
		_ = ressourceDB
		var ressourceAPI orm.RessourceAPI

		// insertion point for updating fields
		ressourceAPI.ID = ressourceDB.ID
		ressourceDB.CopyBasicFieldsToRessource(&ressourceAPI.Ressource)
		ressourceAPI.RessourcePointersEnconding = ressourceDB.RessourcePointersEnconding
		ressourceAPIs = append(ressourceAPIs, ressourceAPI)
	}

	c.JSON(http.StatusOK, ressourceAPIs)
}

// PostRessource
//
// swagger:route POST /ressources ressources postRessource
//
// Creates a ressource
//     Consumes:
//     - application/json
//
//     Produces:
//     - application/json
//
//     Responses:
//       200: ressourceDBResponse
func PostRessource(c *gin.Context) {
	db := orm.BackRepo.BackRepoRessource.GetDB()

	// Validate input
	var input orm.RessourceAPI

	err := c.ShouldBindJSON(&input)
	if err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Create ressource
	ressourceDB := orm.RessourceDB{}
	ressourceDB.RessourcePointersEnconding = input.RessourcePointersEnconding
	ressourceDB.CopyBasicFieldsFromRessource(&input.Ressource)

	query := db.Create(&ressourceDB)
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

	c.JSON(http.StatusOK, ressourceDB)
}

// GetRessource
//
// swagger:route GET /ressources/{ID} ressources getRessource
//
// Gets the details for a ressource.
//
// Responses:
//    default: genericError
//        200: ressourceDBResponse
func GetRessource(c *gin.Context) {
	db := orm.BackRepo.BackRepoRessource.GetDB()

	// Get ressourceDB in DB
	var ressourceDB orm.RessourceDB
	if err := db.First(&ressourceDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	var ressourceAPI orm.RessourceAPI
	ressourceAPI.ID = ressourceDB.ID
	ressourceAPI.RessourcePointersEnconding = ressourceDB.RessourcePointersEnconding
	ressourceDB.CopyBasicFieldsToRessource(&ressourceAPI.Ressource)

	c.JSON(http.StatusOK, ressourceAPI)
}

// UpdateRessource
//
// swagger:route PATCH /ressources/{ID} ressources updateRessource
//
// Update a ressource
//
// Responses:
//    default: genericError
//        200: ressourceDBResponse
func UpdateRessource(c *gin.Context) {
	db := orm.BackRepo.BackRepoRessource.GetDB()

	// Get model if exist
	var ressourceDB orm.RessourceDB

	// fetch the ressource
	query := db.First(&ressourceDB, c.Param("id"))

	if query.Error != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = query.Error.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// Validate input
	var input orm.RessourceAPI
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// update
	ressourceDB.CopyBasicFieldsFromRessource(&input.Ressource)
	ressourceDB.RessourcePointersEnconding = input.RessourcePointersEnconding

	query = db.Model(&ressourceDB).Updates(ressourceDB)
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

	// return status OK with the marshalling of the the ressourceDB
	c.JSON(http.StatusOK, ressourceDB)
}

// DeleteRessource
//
// swagger:route DELETE /ressources/{ID} ressources deleteRessource
//
// Delete a ressource
//
// Responses:
//    default: genericError
func DeleteRessource(c *gin.Context) {
	db := orm.BackRepo.BackRepoRessource.GetDB()

	// Get model if exist
	var ressourceDB orm.RessourceDB
	if err := db.First(&ressourceDB, c.Param("id")).Error; err != nil {
		var returnError GenericError
		returnError.Body.Code = http.StatusBadRequest
		returnError.Body.Message = err.Error()
		c.JSON(http.StatusBadRequest, returnError.Body)
		return
	}

	// with gorm.Model field, default delete is a soft delete. Unscoped() force delete
	db.Unscoped().Delete(&ressourceDB)

	// a DELETE generates a back repo commit increase
	// (this will be improved with implementation of unit of work design pattern)
	orm.BackRepo.IncrementPushFromFrontNb()

	c.JSON(http.StatusOK, gin.H{"data": true})
}
