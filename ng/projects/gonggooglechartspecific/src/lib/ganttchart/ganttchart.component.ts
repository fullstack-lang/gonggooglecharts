import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
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


  /**
 * the component is refreshed when modification are performed in the back repo 
 * 
 * the checkCommitNbTimer polls the commit number of the back repo
 * if the commit number has increased, it pulls the front repo and redraw the diagram
 */
  checkGongdocCommitNbTimer: Observable<number> = timer(500, 500);
  lastCommitNb = -1
  currTime: number

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
    private gonggooglechartFrontRepoService: gonggooglechart.FrontRepoService,
    private gonggooglechartCommitNbService: gonggooglechart.CommitNbService,
  ) {

  }

  ngOnInit(): void {

    this.checkGongdocCommitNbTimer.subscribe(
      currTime => {
        this.currTime = currTime

        // see above for the explanation
        this.gonggooglechartCommitNbService.getCommitNb().subscribe(
          commitNb => {
            if (this.lastCommitNb < commitNb) {

              console.log("last commit nb " + this.lastCommitNb + " new: " + commitNb)
              this.refresh()
              this.lastCommitNb = commitNb
            }
          }
        )
      }
    )

  }
  refresh(): void {

    this.charts = []

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
                  [task.Name,
                  task.Name,
                  task.RessourceName,
                  new Date(start.getFullYear(), start.getMonth(), start.getDay()),
                  new Date(end.getFullYear(), end.getMonth(), end.getDay()),
                  daysToMilliseconds(50),
                  task.PercentComplete,
                    null]
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
