// generated from NgTableTemplateTS
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button'

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { DialogData } from '../front-repo.service'
import { SelectionModel } from '@angular/cdk/collections';

const allowMultiSelect = true;

import { Router, RouterState } from '@angular/router';
import { TaskDB } from '../task-db'
import { TaskService } from '../task.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'

// generated table component
@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})
export class TasksTableComponent implements OnInit {

  // used if the component is called as a selection component of Task instances
  selection: SelectionModel<TaskDB>;
  initialSelection = new Array<TaskDB>();

  // the data source for the table
  tasks: TaskDB[];

  // front repo, that will be referenced by this.tasks
  frontRepo: FrontRepo

  // displayedColumns is referenced by the MatTable component for specify what columns
  // have to be displayed and in what order
  displayedColumns: string[];

  constructor(
    private taskService: TaskService,
    private frontRepoService: FrontRepoService,

    // not null if the component is called as a selection component of task instances
    public dialogRef: MatDialogRef<TasksTableComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,

    private router: Router,
  ) {
    // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
    // this is for routerLink on same component when only queryParameter changes
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // observable for changes in structs
    this.taskService.TaskServiceChanged.subscribe(
      message => {
        if (message == "post" || message == "update" || message == "delete") {
          this.getTasks()
        }
      }
    )
    if (dialogData == undefined) {
      this.displayedColumns = ['ID', 'Edit', 'Delete', // insertion point for columns to display
        "Name",
        "DisplayedName",
        "Ressource",
        "Start",
        "End",
        "Duration",
        "PercentComplete",
        "Dependencies",
        "Tasks",
      ]
    } else {
      this.displayedColumns = ['select', 'ID', // insertion point for columns to display
        "Name",
        "DisplayedName",
        "Ressource",
        "Start",
        "End",
        "Duration",
        "PercentComplete",
        "Dependencies",
        "Tasks",
      ]
      this.selection = new SelectionModel<TaskDB>(allowMultiSelect, this.initialSelection);
    }

  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.frontRepoService.pull().subscribe(
      frontRepo => {
        this.frontRepo = frontRepo
        console.log("front repo pull returned")

        this.tasks = this.frontRepo.Tasks_array;

        // insertion point for variables Recoveries
        // compute strings for durations
        for (let task of this.tasks) {
          task.Duration_string =
            Math.floor(task.Duration / (3600 * 1000 * 1000 * 1000)) + "H " +
            Math.floor(task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000)) + "M " +
            task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000) + "S"
        }

        // in case the component is called as a selection component
        if (this.dialogData != undefined) {
          this.tasks.forEach(
            task => {
              let ID = this.dialogData.ID
              let revPointer = task[this.dialogData.ReversePointer]
              if (revPointer.Int64 == ID) {
                this.initialSelection.push(task)
              }
            }
          )
          this.selection = new SelectionModel<TaskDB>(allowMultiSelect, this.initialSelection);
        }
      }
    )
  }

  // newTask initiate a new task
  // create a new Task objet
  newTask() {
  }

  deleteTask(taskID: number, task: TaskDB) {
    // list of tasks is truncated of task before the delete
    this.tasks = this.tasks.filter(h => h !== task);

    this.taskService.deleteTask(taskID).subscribe(
      task => {
        this.taskService.TaskServiceChanged.next("delete")

        console.log("task deleted")
      }
    );
  }

  editTask(taskID: number, task: TaskDB) {

  }

  // display task in router
  displayTaskInRouter(taskID: number) {
    this.router.navigate( ["task-display", taskID])
  }

  // set editor outlet
  setEditorRouterOutlet(taskID: number) {
    this.router.navigate([{
      outlets: {
        editor: ["task-detail", taskID]
      }
    }]);
  }

  // set presentation outlet
  setPresentationRouterOutlet(taskID: number) {
    this.router.navigate([{
      outlets: {
        presentation: ["task-presentation", taskID]
      }
    }]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tasks.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tasks.forEach(row => this.selection.select(row));
  }

  save() {

    let toUpdate = new Set<TaskDB>()

    // reset all initial selection of task that belong to task through Anarrayofb
    this.initialSelection.forEach(
      task => {
        task[this.dialogData.ReversePointer].Int64 = 0
        task[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(task)
      }
    )

    // from selection, set task that belong to task through Anarrayofb
    this.selection.selected.forEach(
      task => {
        console.log("selection ID " + task.ID)
        let ID = +this.dialogData.ID
        task[this.dialogData.ReversePointer].Int64 = ID
        task[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(task)
      }
    )

    // update all task (only update selection & initial selection)
    toUpdate.forEach(
      task => {
        this.taskService.updateTask(task)
          .subscribe(task => {
            this.taskService.TaskServiceChanged.next("update")
            console.log("task saved")
          });
      }
    )
    this.dialogRef.close('Pizza!');
  }
}
