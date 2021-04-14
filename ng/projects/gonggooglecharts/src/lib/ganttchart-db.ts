// insertion point for imports
import { TaskUseDB } from './taskuse-db'

// usefull for managing pointer ID values that can be nullable
import { NullInt64 } from './front-repo.service'

export class GanttChartDB {
	CreatedAt?: string;
	DeletedAt?: string;
	ID?: number;

	// insertion point for basic fields declarations
	Name?: string

	// insertion point for other declarations
	Tasks?: Array<TaskUseDB>
}
