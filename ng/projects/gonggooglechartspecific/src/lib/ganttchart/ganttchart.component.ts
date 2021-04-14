import { Component, OnInit, ViewChild } from '@angular/core';

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


@Component({
  selector: 'lib-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css']
})
export class GanttchartComponent implements OnInit {

  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
  }[] = [];

  public totos: {
    title: string;
  }[] = [];

  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  constructor() {
    this.totos.push({
      title: "toto",
    })

    this.charts.push({
      title: "gantt",
      type: ChartType.Gantt,
      columns: [
        'Task ID',
        'Task Name',
        'Resource',
        'Start Date',
        'End Date',
        'Duration',
        'Percent Complete',
        'Dependencies'
      ],
      data: [
        ['Research', 'Identify a gant js framework', null,
          new Date(2015, 0, 1), new Date(2015, 0, 30), null, 1, null],
        ['Write', 'Extract the model in go', 'write',
          null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Develop backend', 'write',
          null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        ['Complete', 'Develop front-end', 'complete',
          null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Develop stand-alone application that uses the stack', 'write',
          null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
      ]

    })
  }

  ngOnInit(): void {


  }

}
