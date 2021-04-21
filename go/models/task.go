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
	Dependencies    []*Task // preceeding tasks (can be used to compute start time atomaticaly)
}
