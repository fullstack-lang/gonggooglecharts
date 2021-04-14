// generated from NgDetailTemplateTS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskUseDB } from '../taskuse-db'
import { TaskUseService } from '../taskuse.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'
import { MapOfComponents } from '../map-components'

// insertion point for imports

import { Router, RouterState, ActivatedRoute } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { NullInt64 } from '../front-repo.service'

@Component({
	selector: 'app-taskuse-detail',
	templateUrl: './taskuse-detail.component.html',
	styleUrls: ['./taskuse-detail.component.css'],
})
export class TaskUseDetailComponent implements OnInit {

	// insertion point for declarations

	// the TaskUseDB of interest
	taskuse: TaskUseDB;

	// front repo
	frontRepo: FrontRepo

	constructor(
		private taskuseService: TaskUseService,
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
		this.getTaskUse()

		// observable for changes in structs
		this.taskuseService.TaskUseServiceChanged.subscribe(
			message => {
				if (message == "post" || message == "update" || message == "delete") {
					this.getTaskUse()
				}
			}
		)

		// insertion point for initialisation of enums list
	}

	getTaskUse(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		const association = this.route.snapshot.paramMap.get('association');

		this.frontRepoService.pull().subscribe(
			frontRepo => {
				this.frontRepo = frontRepo
				console.log("front repo TaskUsePull returned")

				if (id != 0 && association == undefined) {
					this.taskuse = frontRepo.TaskUses.get(id)
				} else {
					this.taskuse = new (TaskUseDB)
				}

				// insertion point for recovery of form controls value for bool fields
			}
		)


	}

	save(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		const association = this.route.snapshot.paramMap.get('association');

		// insertion point for saving value of form controls of boolean fields
		if (this.taskuse.TaskID == undefined) {
			this.taskuse.TaskID = new NullInt64
		}
		if (this.taskuse.Task != undefined) {
			this.taskuse.TaskID.Int64 = this.taskuse.Task.ID
			this.taskuse.TaskID.Valid = true
			this.taskuse.TaskName = this.taskuse.Task.Name
		} else {
			this.taskuse.TaskID.Int64 = 0
			this.taskuse.TaskID.Valid = true
			this.taskuse.TaskName = ""
		}

		if (id != 0 && association == undefined) {
			// insertion point for saving value of reverse pointers
			if (this.taskuse.GanttChart_Tasks_reverse != undefined) {
				this.taskuse.GanttChart_TasksDBID = new NullInt64
				this.taskuse.GanttChart_TasksDBID.Int64 = this.taskuse.GanttChart_Tasks_reverse.ID
				this.taskuse.GanttChart_TasksDBID.Valid = true
				this.taskuse.GanttChart_Tasks_reverse = undefined // very important, otherwise, circular JSON
			}

			this.taskuseService.updateTaskUse(this.taskuse)
				.subscribe(taskuse => {
					this.taskuseService.TaskUseServiceChanged.next("update")

					console.log("taskuse saved")
				});
		} else {
			switch (association) {
				// insertion point for saving value of ONE_MANY association reverse pointer
				case "GanttChart_Tasks":
					this.taskuse.GanttChart_TasksDBID = new NullInt64
					this.taskuse.GanttChart_TasksDBID.Int64 = id
					this.taskuse.GanttChart_TasksDBID.Valid = true
					break
			}
			this.taskuseService.postTaskUse(this.taskuse).subscribe(taskuse => {

				this.taskuseService.TaskUseServiceChanged.next("post")

				this.taskuse = {} // reset fields
				console.log("taskuse added")
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
			ID: this.taskuse.ID,
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
