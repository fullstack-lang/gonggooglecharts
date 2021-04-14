package models

import "time"

type Task struct {
	Name            string
	DisplayedName   string
	Ressource       *Ressource
	Start           time.Time
	End             time.Time
	Duration        time.Duration
	PercentComplete float64
	Dependencies    []*Task // preceeding tasks
}

// TaskUse is a Task used in a given Gantt Diagramm
// A TaskUse can be used by at most one Diagram
type TaskUse struct {
	Name               string
	Task               *Task
	RankInGanttDiagram int
}
