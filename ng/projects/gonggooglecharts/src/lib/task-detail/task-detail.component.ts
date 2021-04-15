// generated from NgDetailTemplateTS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskDB } from '../task-db'
import { TaskService } from '../task.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'
import { MapOfComponents } from '../map-components'

// insertion point for imports

import { Router, RouterState, ActivatedRoute } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { NullInt64 } from '../front-repo.service'

@Component({
	selector: 'app-task-detail',
	templateUrl: './task-detail.component.html',
	styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {

	// insertion point for declarations
	Duration_Hours: number
	Duration_Minutes: number
	Duration_Seconds: number

	// the TaskDB of interest
	task: TaskDB;

	// front repo
	frontRepo: FrontRepo

	constructor(
		private taskService: TaskService,
		private frontRepoService: FrontRepoService,
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
	) {
		// https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
		// this is for routerLink on same component when only queryParameter changes
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.getTask()

		// observable for changes in structs
		this.taskService.TaskServiceChanged.subscribe(
			message => {
				if (message == "post" || message == "update" || message == "delete") {
					this.getTask()
				}
			}
		)

		// insertion point for initialisation of enums list
	}

	getTask(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		const association = this.route.snapshot.paramMap.get('association');

		this.frontRepoService.pull().subscribe(
			frontRepo => {
				this.frontRepo = frontRepo
				console.log("front repo TaskPull returned")

				if (id != 0 && association == undefined) {
					this.task = frontRepo.Tasks.get(id)
				} else {
					this.task = new (TaskDB)
				}

				// insertion point for recovery of form controls value for bool fields
				// computation of Hours, Minutes, Seconds for Duration
				this.Duration_Hours = Math.floor(this.task.Duration / (3600 * 1000 * 1000 * 1000))
				this.Duration_Minutes = Math.floor(this.task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000))
				this.Duration_Seconds = this.task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000)
			}
		)


	}

	save(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		const association = this.route.snapshot.paramMap.get('association');

		// insertion point for saving value of form controls of boolean fields
		if (this.task.RessourceID == undefined) {
			this.task.RessourceID = new NullInt64
		}
		if (this.task.Ressource != undefined) {
			this.task.RessourceID.Int64 = this.task.Ressource.ID
			this.task.RessourceID.Valid = true
			this.task.RessourceName = this.task.Ressource.Name
		} else {
			this.task.RessourceID.Int64 = 0
			this.task.RessourceID.Valid = true
			this.task.RessourceName = ""
		}
		this.task.Duration =
			this.Duration_Hours * (3600 * 1000 * 1000 * 1000) +
			this.Duration_Minutes * (60 * 1000 * 1000 * 1000) +
			this.Duration_Seconds * (1000 * 1000 * 1000)

		if (id != 0 && association == undefined) {
			// insertion point for saving value of reverse pointers
			if (this.task.GanttChart_Tasks_reverse != undefined) {
				this.task.GanttChart_TasksDBID = new NullInt64
				this.task.GanttChart_TasksDBID.Int64 = this.task.GanttChart_Tasks_reverse.ID
				this.task.GanttChart_TasksDBID.Valid = true
				this.task.GanttChart_Tasks_reverse = undefined // very important, otherwise, circular JSON
			}
			if (this.task.Task_Dependencies_reverse != undefined) {
				this.task.Task_DependenciesDBID = new NullInt64
				this.task.Task_DependenciesDBID.Int64 = this.task.Task_Dependencies_reverse.ID
				this.task.Task_DependenciesDBID.Valid = true
				this.task.Task_Dependencies_reverse = undefined // very important, otherwise, circular JSON
			}

			this.taskService.updateTask(this.task)
				.subscribe(task => {
					this.taskService.TaskServiceChanged.next("update")

					console.log("task saved")
				});
		} else {
			switch (association) {
				// insertion point for saving value of ONE_MANY association reverse pointer
				case "GanttChart_Tasks":
					this.task.GanttChart_TasksDBID = new NullInt64
					this.task.GanttChart_TasksDBID.Int64 = id
					this.task.GanttChart_TasksDBID.Valid = true
					break
				case "Task_Dependencies":
					this.task.Task_DependenciesDBID = new NullInt64
					this.task.Task_DependenciesDBID.Int64 = id
					this.task.Task_DependenciesDBID.Valid = true
					break
			}
			this.taskService.postTask(this.task).subscribe(task => {

				this.taskService.TaskServiceChanged.next("post")

				this.task = {} // reset fields
				console.log("task added")
			});
		}
	}

	// openReverseSelection is a generic function that calls dialog for the edition of 
	// ONE-MANY association
	// It uses the MapOfComponent provided by the front repo
	openReverseSelection(AssociatedStruct: string, reverseField: string) {

		const dialogConfig = new MatDialogConfig();

		// dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			ID: this.task.ID,
			ReversePointer: reverseField,
		};
		const dialogRef: MatDialogRef<string, any> = this.dialog.open(
			MapOfComponents.get(AssociatedStruct).get(
				AssociatedStruct + 'sTableComponent'
			),
			dialogConfig
		);

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}
