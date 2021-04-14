// insertion point for imports
import { RessourceDB } from './ressource-db'

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
	Task_DependenciesDBID?: NullInt64
	Task_Dependencies_reverse?: TaskDB

}
