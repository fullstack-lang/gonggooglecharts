import { NgModule } from '@angular/core';
import { GonggooglechartspecificComponent } from './gonggooglechartspecific.component';
import { GanttchartComponent } from './ganttchart/ganttchart.component';



@NgModule({
  declarations: [
    GonggooglechartspecificComponent,
    GanttchartComponent
  ],
  imports: [
  ],
  exports: [
    GonggooglechartspecificComponent,
    GanttchartComponent
  ]
})
export class GonggooglechartspecificModule { }
