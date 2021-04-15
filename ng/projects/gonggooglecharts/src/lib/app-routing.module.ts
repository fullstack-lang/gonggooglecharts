import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [ // insertion point for routes declarations
	{ path: 'ganttcharts', component: GanttChartsTableComponent, outlet: 'table' },
	{ path: 'ganttchart-adder', component: GanttChartDetailComponent, outlet: 'editor' },
	{ path: 'ganttchart-adder/:id/:association', component: GanttChartDetailComponent, outlet: 'editor' },
	{ path: 'ganttchart-detail/:id', component: GanttChartDetailComponent, outlet: 'editor' },
	{ path: 'ganttchart-presentation/:id', component: GanttChartPresentationComponent, outlet: 'presentation' },
	{ path: 'ganttchart-presentation-special/:id', component: GanttChartPresentationComponent, outlet: 'ganttchartpres' },

	{ path: 'ressources', component: RessourcesTableComponent, outlet: 'table' },
	{ path: 'ressource-adder', component: RessourceDetailComponent, outlet: 'editor' },
	{ path: 'ressource-adder/:id/:association', component: RessourceDetailComponent, outlet: 'editor' },
	{ path: 'ressource-detail/:id', component: RessourceDetailComponent, outlet: 'editor' },
	{ path: 'ressource-presentation/:id', component: RessourcePresentationComponent, outlet: 'presentation' },
	{ path: 'ressource-presentation-special/:id', component: RessourcePresentationComponent, outlet: 'ressourcepres' },

	{ path: 'tasks', component: TasksTableComponent, outlet: 'table' },
	{ path: 'task-adder', component: TaskDetailComponent, outlet: 'editor' },
	{ path: 'task-adder/:id/:association', component: TaskDetailComponent, outlet: 'editor' },
	{ path: 'task-detail/:id', component: TaskDetailComponent, outlet: 'editor' },
	{ path: 'task-presentation/:id', component: TaskPresentationComponent, outlet: 'presentation' },
	{ path: 'task-presentation-special/:id', component: TaskPresentationComponent, outlet: 'taskpres' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
