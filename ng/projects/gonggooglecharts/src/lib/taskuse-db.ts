// insertion point for imports
import { TaskDB } from './task-db'
import { GanttChartDB } from './ganttchart-db'

// usefull for managing pointer ID values that can be nullable
import { NullInt64 } from './front-repo.service'

export class TaskUseDB {
	CreatedAt?: string;
	DeletedAt?: string;
	ID?: number;

	// insertion point for basic fields declarations
	Name?: string
	RankInGanttDiagram?: number

	// insertion point for other declarations
	Task?: TaskDB
	TaskID?: NullInt64
	TaskName?: string

	GanttChart_TasksDBID?: NullInt64
	GanttChart_Tasks_reverse?: GanttChartDB

}
