package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/fullstack-lang/gonggooglecharts/go/orm"
)

// genQuery return the name of the column
func genQuery(columnName string) string {
	return fmt.Sprintf("%s = ?", columnName)
}

// A GenericError is the default error message that is generated.
// For certain status codes there are more appropriate error structures.
//
// swagger:response genericError
type GenericError struct {
	// in: body
	Body struct {
		Code    int32  `json:"code"`
		Message string `json:"message"`
	} `json:"body"`
}

// A ValidationError is an that is generated for validation failures.
// It has the same fields as a generic error but adds a Field property.
//
// swagger:response validationError
type ValidationError struct {
	// in: body
	Body struct {
		Code    int32  `json:"code"`
		Message string `json:"message"`
		Field   string `json:"field"`
	} `json:"body"`
}

// RegisterControllers register controllers
func RegisterControllers(r *gin.Engine) {
	v1 := r.Group("/api/github.com/fullstack-lang/gonggooglecharts/go")
	{ // insertion point for registrations
		v1.GET("/v1/dependencys", GetDependencys)
		v1.GET("/v1/dependencys/:id", GetDependency)
		v1.POST("/v1/dependencys", PostDependency)
		v1.PATCH("/v1/dependencys/:id", UpdateDependency)
		v1.PUT("/v1/dependencys/:id", UpdateDependency)
		v1.DELETE("/v1/dependencys/:id", DeleteDependency)

		v1.GET("/v1/ganttcharts", GetGanttCharts)
		v1.GET("/v1/ganttcharts/:id", GetGanttChart)
		v1.POST("/v1/ganttcharts", PostGanttChart)
		v1.PATCH("/v1/ganttcharts/:id", UpdateGanttChart)
		v1.PUT("/v1/ganttcharts/:id", UpdateGanttChart)
		v1.DELETE("/v1/ganttcharts/:id", DeleteGanttChart)

		v1.GET("/v1/ressources", GetRessources)
		v1.GET("/v1/ressources/:id", GetRessource)
		v1.POST("/v1/ressources", PostRessource)
		v1.PATCH("/v1/ressources/:id", UpdateRessource)
		v1.PUT("/v1/ressources/:id", UpdateRessource)
		v1.DELETE("/v1/ressources/:id", DeleteRessource)

		v1.GET("/v1/tasks", GetTasks)
		v1.GET("/v1/tasks/:id", GetTask)
		v1.POST("/v1/tasks", PostTask)
		v1.PATCH("/v1/tasks/:id", UpdateTask)
		v1.PUT("/v1/tasks/:id", UpdateTask)
		v1.DELETE("/v1/tasks/:id", DeleteTask)

		v1.GET("/commitnb", GetLastCommitNb)
		v1.GET("/pushfromfrontnb", GetLastPushFromFrontNb)
	}
}

// swagger:route GET /commitnb backrepo GetLastCommitNb
func GetLastCommitNb(c *gin.Context) {
	res := orm.GetLastCommitNb()

	c.JSON(http.StatusOK, res)
}

// swagger:route GET /pushfromfrontnb backrepo GetLastPushFromFrontNb
func GetLastPushFromFrontNb(c *gin.Context) {
	res := orm.GetLastPushFromFrontNb()

	c.JSON(http.StatusOK, res)
}
