package models

import "time"

// swagger:model Task
type Task struct {
	Name            string
	DisplayedName   string
	Ressource       *Ressource
	Start           time.Time
	End             time.Time
	Duration        time.Duration
	PercentComplete float64
	Dependencies    []*Dependency // preceeding tasks (can be used to compute start time atomaticaly)
}
