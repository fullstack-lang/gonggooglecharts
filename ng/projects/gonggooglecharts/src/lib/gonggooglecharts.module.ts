import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// for angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTableModule } from '@angular/material/table'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';

import { AngularSplitModule, SplitComponent } from 'angular-split';

import { AppRoutingModule } from './app-routing.module';

import { SplitterComponent } from './splitter/splitter.component'
import { SidebarComponent } from './sidebar/sidebar.component';

// insertion point for imports 
import { GanttChartsTableComponent } from './ganttcharts-table/ganttcharts-table.component'
import { GanttChartDetailComponent } from './ganttchart-detail/ganttchart-detail.component'
import { GanttChartPresentationComponent } from './ganttchart-presentation/ganttchart-presentation.component'

import { RessourcesTableComponent } from './ressources-table/ressources-table.component'
import { RessourceDetailComponent } from './ressource-detail/ressource-detail.component'
import { RessourcePresentationComponent } from './ressource-presentation/ressource-presentation.component'

import { TasksTableComponent } from './tasks-table/tasks-table.component'
import { TaskDetailComponent } from './task-detail/task-detail.component'
import { TaskPresentationComponent } from './task-presentation/task-presentation.component'

import { TaskUsesTableComponent } from './taskuses-table/taskuses-table.component'
import { TaskUseDetailComponent } from './taskuse-detail/taskuse-detail.component'
import { TaskUsePresentationComponent } from './taskuse-presentation/taskuse-presentation.component'


@NgModule({
	declarations: [
		// insertion point for declarations 
		GanttChartsTableComponent,
		GanttChartDetailComponent,
		GanttChartPresentationComponent,

		RessourcesTableComponent,
		RessourceDetailComponent,
		RessourcePresentationComponent,

		TasksTableComponent,
		TaskDetailComponent,
		TaskPresentationComponent,

		TaskUsesTableComponent,
		TaskUseDetailComponent,
		TaskUsePresentationComponent,


		SplitterComponent,
		SidebarComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule,

		AppRoutingModule,

		MatSliderModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatTableModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatExpansionModule,
		MatListModule,
		MatDialogModule,
		MatGridListModule,
		MatTreeModule,

		AngularSplitModule,
	],
	exports: [
		// insertion point for declarations 
		GanttChartsTableComponent,
		GanttChartDetailComponent,
		GanttChartPresentationComponent,

		RessourcesTableComponent,
		RessourceDetailComponent,
		RessourcePresentationComponent,

		TasksTableComponent,
		TaskDetailComponent,
		TaskPresentationComponent,

		TaskUsesTableComponent,
		TaskUseDetailComponent,
		TaskUsePresentationComponent,


		SplitterComponent,
		SidebarComponent,

	],
	providers: [
		{
			provide: MatDialogRef,
			useValue: {}
		},
	],
})
export class GonggooglechartsModule { }
