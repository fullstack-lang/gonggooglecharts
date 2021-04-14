// generated from NgDetailTemplateTS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GanttChartDB } from '../ganttchart-db'
import { GanttChartService } from '../ganttchart.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'
import { MapOfComponents } from '../map-components'

// insertion point for imports

import { Router, RouterState, ActivatedRoute } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { NullInt64 } from '../front-repo.service'

@Component({
	selector: 'app-ganttchart-detail',
	templateUrl: './ganttchart-detail.component.html',
	styleUrls: ['./ganttchart-detail.component.css'],
})
export class GanttChartDetailComponent implements OnInit {

	// insertion point for declarations

	// the GanttChartDB of interest
	ganttchart: GanttChartDB;

	// front repo
	frontRepo: FrontRepo

	constructor(
		private ganttchartService: GanttChartService,
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
		this.getGanttChart()

		// observable for changes in structs
		this.ganttchartService.GanttChartServiceChanged.subscribe(
			message => {
				if (message == "post" || message == "update" || message == "delete") {
					this.getGanttChart()
				}
			}
		)

		// insertion point for initialisation of enums list
	}

	getGanttChart(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		const association = this.route.snapshot.paramMap.get('association');

		this.frontRepoService.pull().subscribe(
			frontRepo => {
				this.frontRepo = frontRepo
				console.log("front repo GanttChartPull returned")

				if (id != 0 && association == undefined) {
					this.ganttchart = frontRepo.GanttCharts.get(id)
				} else {
					this.ganttchart = new (GanttChartDB)
				}

				// insertion point for recovery of form controls value for bool fields
			}
		)


	}

	save(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		const association = this.route.snapshot.paramMap.get('association');

		// insertion point for saving value of form controls of boolean fields

		if (id != 0 && association == undefined) {
			// insertion point for saving value of reverse pointers

			this.ganttchartService.updateGanttChart(this.ganttchart)
				.subscribe(ganttchart => {
					this.ganttchartService.GanttChartServiceChanged.next("update")

					console.log("ganttchart saved")
				});
		} else {
			switch (association) {
				// insertion point for saving value of ONE_MANY association reverse pointer
			}
			this.ganttchartService.postGanttChart(this.ganttchart).subscribe(ganttchart => {

				this.ganttchartService.GanttChartServiceChanged.next("post")

				this.ganttchart = {} // reset fields
				console.log("ganttchart added")
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
			ID: this.ganttchart.ID,
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
