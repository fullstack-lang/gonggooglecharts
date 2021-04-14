import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { TaskUseDB } from '../taskuse-db'
import { TaskUseService } from '../taskuse.service'

import { Router, RouterState, ActivatedRoute } from '@angular/router';

export interface taskuseDummyElement {
}

const ELEMENT_DATA: taskuseDummyElement[] = [
];

@Component({
	selector: 'app-taskuse-presentation',
	templateUrl: './taskuse-presentation.component.html',
	styleUrls: ['./taskuse-presentation.component.css'],
})
export class TaskUsePresentationComponent implements OnInit {

	// insertion point for declarations

	displayedColumns: string[] = [];
	dataSource = ELEMENT_DATA;

	taskuse: TaskUseDB;
 
	constructor(
		private taskuseService: TaskUseService,
		private route: ActivatedRoute,
		private router: Router,
	) {
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.getTaskUse();

		// observable for changes in 
		this.taskuseService.TaskUseServiceChanged.subscribe(
			message => {
				if (message == "update") {
					this.getTaskUse()
				}
			}
		)
	}

	getTaskUse(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.taskuseService.getTaskUse(id)
			.subscribe(
				taskuse => {
					this.taskuse = taskuse

					// insertion point for recovery of durations

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
				editor: ["taskuse-detail", ID]
			}
		}]);
	}
}
