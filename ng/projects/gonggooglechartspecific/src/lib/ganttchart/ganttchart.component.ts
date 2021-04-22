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
import { take } from 'rxjs/operators';

function daysToMilliseconds(days: number): number {
  return days * 24 * 60 * 60 * 1000;
}

class GoogleGanttChart {
  title: string;
  type: ChartType;
  data: any[][];
  columns?: Column[];
  options?: {};
}

class GoogleGanttTask {
  Task_ID: string;
  Task_Name: string;
  Resource: string;
  Start: Date;
  End: Date;
  Duration: number;
  PercentComplete: number;
  Dependencies: string;
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
            let ganttTargetChart = new GoogleGanttChart()
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

                console.log(task.Name + " start at " + task.Start + " with ressource " + task.Ressource?.Name)

                let start = new Date(task.Start)
                // console.log("start " + start.getFullYear() + " " + start.getMonth() + " " + start.getDay())

                let end = new Date(task.End)
                // console.log("end " + end.getFullYear() + " " + end.getMonth() + " " + end.getDay())

                // see https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format

                let googleGanttTask = new (GoogleGanttTask)

                googleGanttTask.Task_ID = task.Name
                googleGanttTask.Task_Name = task.DisplayedName
                googleGanttTask.Resource = task.Ressource?.Name
                googleGanttTask.Start = new Date(start.getFullYear(), start.getMonth(), start.getDay())
                googleGanttTask.End = new Date(end.getFullYear(), end.getMonth(), end.getDay())
                googleGanttTask.Duration = daysToMilliseconds(0)
                googleGanttTask.PercentComplete = task.PercentComplete
                // googleGanttTask.Dependencies = task.Dependencies?.Name
                let dependencies = ""
                let index = 0
                if ( task.Dependencies) {
                  for (let dependency of task.Dependencies) {

                    // dependencies are separated by ','
                    if (index++ > 0 && dependency.Task) {
                      dependencies += ','
                    }
                    dependencies += dependency.Task?.Name
                  }  
                }
                googleGanttTask.Dependencies = dependencies

                ganttTargetChart.data.push(
                  [googleGanttTask.Task_ID,
                  googleGanttTask.Task_Name,
                  googleGanttTask.Resource,
                  googleGanttTask.Start,
                  googleGanttTask.End,
                  googleGanttTask.Duration,
                  googleGanttTask.PercentComplete,
                  googleGanttTask.Dependencies]
                )

                // specify that task have not to be ordered
                ganttTargetChart.options = {
                  gantt: {
                    sortTasks: false,
                    
                  },
                }
              }
            )

            this.charts.push(ganttTargetChart)
          }
        )
      }
    )

  }

}
