// insertion point for imports
import { RessourceDB } from './ressource-db'
import { GanttChartDB } from './ganttchart-db'

// usefull for managing pointer ID values that can be nullable
import { NullInt64 } from './front-repo.service'

export class TaskDB {
	CreatedAt?: string;
	DeletedAt?: string;
	ID?: number;

	// insertion point for basic fields declarations
	Name?: string
	DisplayedName?: string
	Start?: Date
	End?: Date
	Duration?: number
	PercentComplete?: number

	// insertion point for other declarations
	Ressource?: RessourceDB
	RessourceID?: NullInt64
	RessourceName?: string

	Duration_string?: string
	Dependencies?: Array<TaskDB>
	GanttChart_TasksDBID?: NullInt64
	GanttChart_Tasks_reverse?: GanttChartDB

	Task_DependenciesDBID?: NullInt64
	Task_Dependencies_reverse?: TaskDB

}
