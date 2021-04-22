package models

// swagger:model Dependency
type Dependency struct {
	Name string
	Task *Task
}
