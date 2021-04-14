import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, combineLatest } from 'rxjs';

// insertion point sub template for services imports 
import { GanttChartDB } from './ganttchart-db'
import { GanttChartService } from './ganttchart.service'

import { RessourceDB } from './ressource-db'
import { RessourceService } from './ressource.service'

import { TaskDB } from './task-db'
import { TaskService } from './task.service'

import { TaskUseDB } from './taskuse-db'
import { TaskUseService } from './taskuse.service'


// FrontRepo stores all instances in a front repository (design pattern repository)
export class FrontRepo { // insertion point sub template 
  GanttCharts_array = new Array<GanttChartDB>(); // array of repo instances
  GanttCharts = new Map<number, GanttChartDB>(); // map of repo instances
  GanttCharts_batch = new Map<number, GanttChartDB>(); // same but only in last GET (for finding repo instances to delete)
  Ressources_array = new Array<RessourceDB>(); // array of repo instances
  Ressources = new Map<number, RessourceDB>(); // map of repo instances
  Ressources_batch = new Map<number, RessourceDB>(); // same but only in last GET (for finding repo instances to delete)
  Tasks_array = new Array<TaskDB>(); // array of repo instances
  Tasks = new Map<number, TaskDB>(); // map of repo instances
  Tasks_batch = new Map<number, TaskDB>(); // same but only in last GET (for finding repo instances to delete)
  TaskUses_array = new Array<TaskUseDB>(); // array of repo instances
  TaskUses = new Map<number, TaskUseDB>(); // map of repo instances
  TaskUses_batch = new Map<number, TaskUseDB>(); // same but only in last GET (for finding repo instances to delete)
}

//
// Store of all instances of the stack
//
export const FrontRepoSingloton = new (FrontRepo)

// define the type of nullable Int64 in order to support back pointers IDs
export class NullInt64 {
    Int64: number
    Valid: boolean
}

// define the interface for information that is forwarded from the calling instance to 
// the select table
export interface DialogData {
  ID: number; // ID of the calling instance
  ReversePointer: string; // field of {{Structname}} that serve as reverse pointer
}

//
// observable that fetch all elements of the stack and store them in the FrontRepo
//
@Injectable({
  providedIn: 'root'
})
export class FrontRepoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient, // insertion point sub template 
    private ganttchartService: GanttChartService,
    private ressourceService: RessourceService,
    private taskService: TaskService,
    private taskuseService: TaskUseService,
  ) { }

  // typing of observable can be messy in typescript. Therefore, one force the type
  observableFrontRepo: [ // insertion point sub template 
    Observable<GanttChartDB[]>,
    Observable<RessourceDB[]>,
    Observable<TaskDB[]>,
    Observable<TaskUseDB[]>,
  ] = [ // insertion point sub template 
      this.ganttchartService.getGanttCharts(),
      this.ressourceService.getRessources(),
      this.taskService.getTasks(),
      this.taskuseService.getTaskUses(),
    ];

  //
  // pull performs a GET on all struct of the stack and redeem association pointers 
  //
  // This is an observable. Therefore, the control flow forks with
  // - pull() return immediatly the observable
  // - the observable observer, if it subscribe, is called when all GET calls are performs
  pull(): Observable<FrontRepo> {
    return new Observable<FrontRepo>(
      (observer) => {
        combineLatest(
          this.observableFrontRepo
        ).subscribe(
          ([ // insertion point sub template for declarations 
            ganttcharts_,
            ressources_,
            tasks_,
            taskuses_,
          ]) => {
            // Typing can be messy with many items. Therefore, type casting is necessary here
            // insertion point sub template for type casting 
            var ganttcharts: GanttChartDB[]
            ganttcharts = ganttcharts_
            var ressources: RessourceDB[]
            ressources = ressources_
            var tasks: TaskDB[]
            tasks = tasks_
            var taskuses: TaskUseDB[]
            taskuses = taskuses_

            // 
            // First Step: init map of instances
            // insertion point sub template for init 
            // init the array
            FrontRepoSingloton.GanttCharts_array = ganttcharts

            // clear the map that counts GanttChart in the GET
            FrontRepoSingloton.GanttCharts_batch.clear()
            
            ganttcharts.forEach(
              ganttchart => {
                FrontRepoSingloton.GanttCharts.set(ganttchart.ID, ganttchart)
                FrontRepoSingloton.GanttCharts_batch.set(ganttchart.ID, ganttchart)
              }
            )
            
            // clear ganttcharts that are absent from the batch
            FrontRepoSingloton.GanttCharts.forEach(
              ganttchart => {
                if (FrontRepoSingloton.GanttCharts_batch.get(ganttchart.ID) == undefined) {
                  FrontRepoSingloton.GanttCharts.delete(ganttchart.ID)
                }
              }
            )
            // init the array
            FrontRepoSingloton.Ressources_array = ressources

            // clear the map that counts Ressource in the GET
            FrontRepoSingloton.Ressources_batch.clear()
            
            ressources.forEach(
              ressource => {
                FrontRepoSingloton.Ressources.set(ressource.ID, ressource)
                FrontRepoSingloton.Ressources_batch.set(ressource.ID, ressource)
              }
            )
            
            // clear ressources that are absent from the batch
            FrontRepoSingloton.Ressources.forEach(
              ressource => {
                if (FrontRepoSingloton.Ressources_batch.get(ressource.ID) == undefined) {
                  FrontRepoSingloton.Ressources.delete(ressource.ID)
                }
              }
            )
            // init the array
            FrontRepoSingloton.Tasks_array = tasks

            // clear the map that counts Task in the GET
            FrontRepoSingloton.Tasks_batch.clear()
            
            tasks.forEach(
              task => {
                FrontRepoSingloton.Tasks.set(task.ID, task)
                FrontRepoSingloton.Tasks_batch.set(task.ID, task)
              }
            )
            
            // clear tasks that are absent from the batch
            FrontRepoSingloton.Tasks.forEach(
              task => {
                if (FrontRepoSingloton.Tasks_batch.get(task.ID) == undefined) {
                  FrontRepoSingloton.Tasks.delete(task.ID)
                }
              }
            )
            // init the array
            FrontRepoSingloton.TaskUses_array = taskuses

            // clear the map that counts TaskUse in the GET
            FrontRepoSingloton.TaskUses_batch.clear()
            
            taskuses.forEach(
              taskuse => {
                FrontRepoSingloton.TaskUses.set(taskuse.ID, taskuse)
                FrontRepoSingloton.TaskUses_batch.set(taskuse.ID, taskuse)
              }
            )
            
            // clear taskuses that are absent from the batch
            FrontRepoSingloton.TaskUses.forEach(
              taskuse => {
                if (FrontRepoSingloton.TaskUses_batch.get(taskuse.ID) == undefined) {
                  FrontRepoSingloton.TaskUses.delete(taskuse.ID)
                }
              }
            )

            // 
            // Second Step: redeem pointers between instances (thanks to maps in the First Step)
            // insertion point sub template for redeem 
            ganttcharts.forEach(
              ganttchart => {
                // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming

                // insertion point for redeeming ONE-MANY associations
              }
            )
            ressources.forEach(
              ressource => {
                // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming

                // insertion point for redeeming ONE-MANY associations
              }
            )
            tasks.forEach(
              task => {
                // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming
                // insertion point for pointer field Ressource redeeming
                {
                  let _ressource = FrontRepoSingloton.Ressources.get(task.RessourceID.Int64)
                  if (_ressource) {
                    task.Ressource = _ressource
                  }
                }

                // insertion point for redeeming ONE-MANY associations
                // insertion point for slice of pointer field Task.Dependencies redeeming
                {
                  let _task = FrontRepoSingloton.Tasks.get(task.Task_DependenciesDBID.Int64)
                  if (_task) {
                    if (_task.Dependencies == undefined) {
                      _task.Dependencies = new Array<TaskDB>()
                    }
                    _task.Dependencies.push(task)
                    if (task.Task_Dependencies_reverse == undefined) {
                      task.Task_Dependencies_reverse = _task
                    }
                  }
                }
              }
            )
            taskuses.forEach(
              taskuse => {
                // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming
                // insertion point for pointer field Task redeeming
                {
                  let _task = FrontRepoSingloton.Tasks.get(taskuse.TaskID.Int64)
                  if (_task) {
                    taskuse.Task = _task
                  }
                }

                // insertion point for redeeming ONE-MANY associations
                // insertion point for slice of pointer field GanttChart.Tasks redeeming
                {
                  let _ganttchart = FrontRepoSingloton.GanttCharts.get(taskuse.GanttChart_TasksDBID.Int64)
                  if (_ganttchart) {
                    if (_ganttchart.Tasks == undefined) {
                      _ganttchart.Tasks = new Array<GanttChartDB>()
                    }
                    _ganttchart.Tasks.push(taskuse)
                    if (taskuse.GanttChart_Tasks_reverse == undefined) {
                      taskuse.GanttChart_Tasks_reverse = _ganttchart
                    }
                  }
                }
              }
            )

            // hand over control flow to observer
            observer.next(FrontRepoSingloton)
          }
        )
      }
    )
  }

  // insertion point for pull per struct 

  // GanttChartPull performs a GET on GanttChart of the stack and redeem association pointers 
  GanttChartPull(): Observable<FrontRepo> {
    return new Observable<FrontRepo>(
      (observer) => {
        combineLatest([
          this.ganttchartService.getGanttCharts()
        ]).subscribe(
          ([ // insertion point sub template 
            ganttcharts,
          ]) => {
            // init the array
            FrontRepoSingloton.GanttCharts_array = ganttcharts

            // clear the map that counts GanttChart in the GET
            FrontRepoSingloton.GanttCharts_batch.clear()

            // 
            // First Step: init map of instances
            // insertion point sub template 
            ganttcharts.forEach(
              ganttchart => {
                FrontRepoSingloton.GanttCharts.set(ganttchart.ID, ganttchart)
                FrontRepoSingloton.GanttCharts_batch.set(ganttchart.ID, ganttchart)

                // insertion point for redeeming ONE/ZERO-ONE associations 

                // insertion point for redeeming ONE-MANY associations 
              }
            )

            // clear ganttcharts that are absent from the GET
            FrontRepoSingloton.GanttCharts.forEach(
              ganttchart => {
                if (FrontRepoSingloton.GanttCharts_batch.get(ganttchart.ID) == undefined) {
                  FrontRepoSingloton.GanttCharts.delete(ganttchart.ID)
                }
              }
            )

            // 
            // Second Step: redeem pointers between instances (thanks to maps in the First Step)
            // insertion point sub template 

            // hand over control flow to observer
            observer.next(FrontRepoSingloton)
          }
        )
      }
    )
  }

  // RessourcePull performs a GET on Ressource of the stack and redeem association pointers 
  RessourcePull(): Observable<FrontRepo> {
    return new Observable<FrontRepo>(
      (observer) => {
        combineLatest([
          this.ressourceService.getRessources()
        ]).subscribe(
          ([ // insertion point sub template 
            ressources,
          ]) => {
            // init the array
            FrontRepoSingloton.Ressources_array = ressources

            // clear the map that counts Ressource in the GET
            FrontRepoSingloton.Ressources_batch.clear()

            // 
            // First Step: init map of instances
            // insertion point sub template 
            ressources.forEach(
              ressource => {
                FrontRepoSingloton.Ressources.set(ressource.ID, ressource)
                FrontRepoSingloton.Ressources_batch.set(ressource.ID, ressource)

                // insertion point for redeeming ONE/ZERO-ONE associations 

                // insertion point for redeeming ONE-MANY associations 
              }
            )

            // clear ressources that are absent from the GET
            FrontRepoSingloton.Ressources.forEach(
              ressource => {
                if (FrontRepoSingloton.Ressources_batch.get(ressource.ID) == undefined) {
                  FrontRepoSingloton.Ressources.delete(ressource.ID)
                }
              }
            )

            // 
            // Second Step: redeem pointers between instances (thanks to maps in the First Step)
            // insertion point sub template 

            // hand over control flow to observer
            observer.next(FrontRepoSingloton)
          }
        )
      }
    )
  }

  // TaskPull performs a GET on Task of the stack and redeem association pointers 
  TaskPull(): Observable<FrontRepo> {
    return new Observable<FrontRepo>(
      (observer) => {
        combineLatest([
          this.taskService.getTasks()
        ]).subscribe(
          ([ // insertion point sub template 
            tasks,
          ]) => {
            // init the array
            FrontRepoSingloton.Tasks_array = tasks

            // clear the map that counts Task in the GET
            FrontRepoSingloton.Tasks_batch.clear()

            // 
            // First Step: init map of instances
            // insertion point sub template 
            tasks.forEach(
              task => {
                FrontRepoSingloton.Tasks.set(task.ID, task)
                FrontRepoSingloton.Tasks_batch.set(task.ID, task)

                // insertion point for redeeming ONE/ZERO-ONE associations 
                // insertion point for pointer field Ressource redeeming
                {
                  let _ressource = FrontRepoSingloton.Ressources.get(task.RessourceID.Int64)
                  if (_ressource) {
                    task.Ressource = _ressource
                  }
                }

                // insertion point for redeeming ONE-MANY associations 
                // insertion point for slice of pointer field Task.Dependencies redeeming
                {
                  let _task = FrontRepoSingloton.Tasks.get(task.Task_DependenciesDBID.Int64)
                  if (_task) {
                    if (_task.Dependencies == undefined) {
                      _task.Dependencies = new Array<TaskDB>()
                    }
                    _task.Dependencies.push(task)
                    if (task.Task_Dependencies_reverse == undefined) {
                      task.Task_Dependencies_reverse = _task
                    }
                  }
                }
              }
            )

            // clear tasks that are absent from the GET
            FrontRepoSingloton.Tasks.forEach(
              task => {
                if (FrontRepoSingloton.Tasks_batch.get(task.ID) == undefined) {
                  FrontRepoSingloton.Tasks.delete(task.ID)
                }
              }
            )

            // 
            // Second Step: redeem pointers between instances (thanks to maps in the First Step)
            // insertion point sub template 

            // hand over control flow to observer
            observer.next(FrontRepoSingloton)
          }
        )
      }
    )
  }

  // TaskUsePull performs a GET on TaskUse of the stack and redeem association pointers 
  TaskUsePull(): Observable<FrontRepo> {
    return new Observable<FrontRepo>(
      (observer) => {
        combineLatest([
          this.taskuseService.getTaskUses()
        ]).subscribe(
          ([ // insertion point sub template 
            taskuses,
          ]) => {
            // init the array
            FrontRepoSingloton.TaskUses_array = taskuses

            // clear the map that counts TaskUse in the GET
            FrontRepoSingloton.TaskUses_batch.clear()

            // 
            // First Step: init map of instances
            // insertion point sub template 
            taskuses.forEach(
              taskuse => {
                FrontRepoSingloton.TaskUses.set(taskuse.ID, taskuse)
                FrontRepoSingloton.TaskUses_batch.set(taskuse.ID, taskuse)

                // insertion point for redeeming ONE/ZERO-ONE associations 
                // insertion point for pointer field Task redeeming
                {
                  let _task = FrontRepoSingloton.Tasks.get(taskuse.TaskID.Int64)
                  if (_task) {
                    taskuse.Task = _task
                  }
                }

                // insertion point for redeeming ONE-MANY associations 
                // insertion point for slice of pointer field GanttChart.Tasks redeeming
                {
                  let _ganttchart = FrontRepoSingloton.GanttCharts.get(taskuse.GanttChart_TasksDBID.Int64)
                  if (_ganttchart) {
                    if (_ganttchart.Tasks == undefined) {
                      _ganttchart.Tasks = new Array<GanttChartDB>()
                    }
                    _ganttchart.Tasks.push(taskuse)
                    if (taskuse.GanttChart_Tasks_reverse == undefined) {
                      taskuse.GanttChart_Tasks_reverse = _ganttchart
                    }
                  }
                }
              }
            )

            // clear taskuses that are absent from the GET
            FrontRepoSingloton.TaskUses.forEach(
              taskuse => {
                if (FrontRepoSingloton.TaskUses_batch.get(taskuse.ID) == undefined) {
                  FrontRepoSingloton.TaskUses.delete(taskuse.ID)
                }
              }
            )

            // 
            // Second Step: redeem pointers between instances (thanks to maps in the First Step)
            // insertion point sub template 

            // hand over control flow to observer
            observer.next(FrontRepoSingloton)
          }
        )
      }
    )
  }
}

// insertion point for get unique ID per struct 
export function getGanttChartUniqueID(id: number): number {
  return 31 * id
}
export function getRessourceUniqueID(id: number): number {
  return 37 * id
}
export function getTaskUniqueID(id: number): number {
  return 41 * id
}
export function getTaskUseUniqueID(id: number): number {
  return 43 * id
}
