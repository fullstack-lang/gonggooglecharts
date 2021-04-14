import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { TaskDB } from '../task-db'
import { TaskService } from '../task.service'

import { Router, RouterState, ActivatedRoute } from '@angular/router';

export interface taskDummyElement {
}

const ELEMENT_DATA: taskDummyElement[] = [
];

@Component({
	selector: 'app-task-presentation',
	templateUrl: './task-presentation.component.html',
	styleUrls: ['./task-presentation.component.css'],
})
export class TaskPresentationComponent implements OnInit {

	// insertion point for declarations
	// fields from Duration
	Duration_Hours: number
	Duration_Minutes: number
	Duration_Seconds: number

	displayedColumns: string[] = [];
	dataSource = ELEMENT_DATA;

	task: TaskDB;
 
	constructor(
		private taskService: TaskService,
		private route: ActivatedRoute,
		private router: Router,
	) {
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.getTask();

		// observable for changes in 
		this.taskService.TaskServiceChanged.subscribe(
			message => {
				if (message == "update") {
					this.getTask()
				}
			}
		)
	}

	getTask(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.taskService.getTask(id)
			.subscribe(
				task => {
					this.task = task

					// insertion point for recovery of durations
					// computation of Hours, Minutes, Seconds for Duration
					this.Duration_Hours = Math.floor(this.task.Duration / (3600 * 1000 * 1000 * 1000))
					this.Duration_Minutes = Math.floor(this.task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000))
					this.Duration_Seconds = this.task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000)

				}
			);
	}

	// set presentation outlet
	setPresentationRouterOutlet(structName: string, ID: number) {
		this.router.navigate([{
			outlets: {
				presentation: [structName + "-presentation", ID]
			}
		}]);
	}

	// set editor outlet
	setEditorRouterOutlet(ID: number) {
		this.router.navigate([{
			outlets: {
				editor: ["task-detail", ID]
			}
		}]);
	}
}
