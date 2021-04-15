import { Component, OnInit, ViewChild } from '@angular/core';

import * as gonggooglechart from 'gonggooglecharts'

import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

function daysToMilliseconds(days: number): number {
  return days * 24 * 60 * 60 * 1000;
}

export class GantChartStruct {
  title: string;
  type: ChartType;
  data: any[][];
  columns?: Column[];
  options?: {};
}

@Component({
  selector: 'lib-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css']
})
export class GanttchartComponent implements OnInit {

  public gonggooglechartFrontRepo: gonggooglechart.FrontRepo

  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
  }[] = [];

  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  constructor(
    private gonggooglechartFrontRepoService: gonggooglechart.FrontRepoService
  ) {

  }

  ngOnInit(): void {

    this.gonggooglechartFrontRepoService.pull().subscribe(
      gonggooglechartsFrontRepo => {
        this.gonggooglechartFrontRepo = gonggooglechartsFrontRepo

        this.gonggooglechartFrontRepo.GanttCharts_array.forEach(
          ganttChart => {
            let ganttTargetChart = new GantChartStruct()
            ganttTargetChart.title = ganttChart.Name
            ganttTargetChart.type = ChartType.Gantt
            ganttTargetChart.columns = [
              'Task ID',
              'Task Name',
              'Resource',
              'Start Date',
              'End Date',
              'Duration',
              'Percent Complete',
              'Dependencies'
            ]
            ganttTargetChart.data = [
              //   ['Research', 'Identify a gant js framework', null,
              //     new Date(2015, 0, 1), new Date(2015, 0, 30), daysToMilliseconds(3), 1, null],
            ]
            ganttChart.Tasks.forEach(
              task => {

                console.log(task.Name + " start at " + task.Start)

                let start = new Date(task.Start)
                console.log("start " + start.getFullYear() + " " + start.getMonth() + " " + start.getDay())

                let end = new Date(task.End)
                console.log("end " + end.getFullYear() + " " + end.getMonth() + " " + end.getDay())

                ganttTargetChart.data.push(
                  [task.Name, task.Name, null,
                  new Date(start.getFullYear(), start.getMonth(), start.getDay()),
                  new Date(end.getFullYear(), end.getMonth(), end.getDay()), daysToMilliseconds(3), 1, null]
                )
              }
            )

            this.charts.push(ganttTargetChart)
          }
        )
      }
    )

  }

}
