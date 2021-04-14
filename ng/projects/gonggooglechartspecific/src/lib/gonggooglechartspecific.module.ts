import { NgModule } from '@angular/core';
import { GonggooglechartspecificComponent } from './gonggooglechartspecific.component';
import { GanttchartComponent } from './ganttchart/ganttchart.component';
import { BrowserModule } from '@angular/platform-browser'
import { GoogleChartsModule } from 'angular-google-charts';



@NgModule({
  declarations: [
    GonggooglechartspecificComponent,
    GanttchartComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule
  ],
  exports: [
    GonggooglechartspecificComponent,
    GanttchartComponent
  ]
})
export class GonggooglechartspecificModule { }
