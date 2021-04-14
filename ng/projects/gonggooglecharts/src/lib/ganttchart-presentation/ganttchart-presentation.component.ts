import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { GanttChartDB } from '../ganttchart-db'
import { GanttChartService } from '../ganttchart.service'

import { Router, RouterState, ActivatedRoute } from '@angular/router';

export interface ganttchartDummyElement {
}

const ELEMENT_DATA: ganttchartDummyElement[] = [
];

@Component({
	selector: 'app-ganttchart-presentation',
	templateUrl: './ganttchart-presentation.component.html',
	styleUrls: ['./ganttchart-presentation.component.css'],
})
export class GanttChartPresentationComponent implements OnInit {

	// insertion point for declarations

	displayedColumns: string[] = [];
	dataSource = ELEMENT_DATA;

	ganttchart: GanttChartDB;
 
	constructor(
		private ganttchartService: GanttChartService,
		private route: ActivatedRoute,
		private router: Router,
	) {
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.getGanttChart();

		// observable for changes in 
		this.ganttchartService.GanttChartServiceChanged.subscribe(
			message => {
				if (message == "update") {
					this.getGanttChart()
				}
			}
		)
	}

	getGanttChart(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.ganttchartService.getGanttChart(id)
			.subscribe(
				ganttchart => {
					this.ganttchart = ganttchart

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
				editor: ["ganttchart-detail", ID]
			}
		}]);
	}
}
