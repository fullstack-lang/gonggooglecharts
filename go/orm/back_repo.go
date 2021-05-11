// generated by genORMTranslation.go
package orm

import (
	"github.com/jinzhu/gorm"
	"github.com/fullstack-lang/gonggooglecharts/go/models"
)

// BackRepoStruct supports callback functions
type BackRepoStruct struct {
	// insertion point for per struct back repo declarations
	BackRepoDependency BackRepoDependencyStruct

	BackRepoGanttChart BackRepoGanttChartStruct

	BackRepoRessource BackRepoRessourceStruct

	BackRepoTask BackRepoTaskStruct

	CommitNb uint // this ng is updated at the BackRepo level but also at the BackRepo<GongStruct> level
}

func (backRepo *BackRepoStruct) GetLastCommitNb() uint {
	return backRepo.CommitNb
}

func (backRepo *BackRepoStruct) IncrementCommitNb() uint {
	if models.Stage.OnInitCommitCallback != nil {
		models.Stage.OnInitCommitCallback.BeforeCommit(&models.Stage)
	}
	backRepo.CommitNb = backRepo.CommitNb + 1
	return backRepo.CommitNb
}

// Init the BackRepoStruct inner variables and link to the database
func (backRepo *BackRepoStruct) Init(db *gorm.DB) {
	// insertion point for per struct back repo declarations
	backRepo.BackRepoDependency.Init(db)
	backRepo.BackRepoGanttChart.Init(db)
	backRepo.BackRepoRessource.Init(db)
	backRepo.BackRepoTask.Init(db)

	models.Stage.BackRepo = backRepo
}

// Commit the BackRepoStruct inner variables and link to the database
func (backRepo *BackRepoStruct) Commit(stage *models.StageStruct) {
	// insertion point for per struct back repo phase one commit
	backRepo.BackRepoDependency.CommitPhaseOne(stage)
	backRepo.BackRepoGanttChart.CommitPhaseOne(stage)
	backRepo.BackRepoRessource.CommitPhaseOne(stage)
	backRepo.BackRepoTask.CommitPhaseOne(stage)

	// insertion point for per struct back repo phase two commit
	backRepo.BackRepoDependency.CommitPhaseTwo(backRepo)
	backRepo.BackRepoGanttChart.CommitPhaseTwo(backRepo)
	backRepo.BackRepoRessource.CommitPhaseTwo(backRepo)
	backRepo.BackRepoTask.CommitPhaseTwo(backRepo)

	backRepo.IncrementCommitNb()
}

// Checkout the database into the stage
func (backRepo *BackRepoStruct) Checkout(stage *models.StageStruct) {
	// insertion point for per struct back repo phase one commit
	backRepo.BackRepoDependency.CheckoutPhaseOne()
	backRepo.BackRepoGanttChart.CheckoutPhaseOne()
	backRepo.BackRepoRessource.CheckoutPhaseOne()
	backRepo.BackRepoTask.CheckoutPhaseOne()

	// insertion point for per struct back repo phase two commit
	backRepo.BackRepoDependency.CheckoutPhaseTwo(backRepo)
	backRepo.BackRepoGanttChart.CheckoutPhaseTwo(backRepo)
	backRepo.BackRepoRessource.CheckoutPhaseTwo(backRepo)
	backRepo.BackRepoTask.CheckoutPhaseTwo(backRepo)
}

var BackRepo BackRepoStruct

func GetLastCommitNb() uint {
	return BackRepo.GetLastCommitNb()
}
