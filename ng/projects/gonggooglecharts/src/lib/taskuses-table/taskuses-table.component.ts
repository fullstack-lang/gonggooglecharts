// generated from NgTableTemplateTS
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button'

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { DialogData } from '../front-repo.service'
import { SelectionModel } from '@angular/cdk/collections';

const allowMultiSelect = true;

import { Router, RouterState } from '@angular/router';
import { TaskUseDB } from '../taskuse-db'
import { TaskUseService } from '../taskuse.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'

// generated table component
@Component({
  selector: 'app-taskuses-table',
  templateUrl: './taskuses-table.component.html',
  styleUrls: ['./taskuses-table.component.css'],
})
export class TaskUsesTableComponent implements OnInit {

  // used if the component is called as a selection component of TaskUse instances
  selection: SelectionModel<TaskUseDB>;
  initialSelection = new Array<TaskUseDB>();

  // the data source for the table
  taskuses: TaskUseDB[];

  // front repo, that will be referenced by this.taskuses
  frontRepo: FrontRepo

  // displayedColumns is referenced by the MatTable component for specify what columns
  // have to be displayed and in what order
  displayedColumns: string[];

  constructor(
    private taskuseService: TaskUseService,
    private frontRepoService: FrontRepoService,

    // not null if the component is called as a selection component of taskuse instances
    public dialogRef: MatDialogRef<TaskUsesTableComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,

    private router: Router,
  ) {
    // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
    // this is for routerLink on same component when only queryParameter changes
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // observable for changes in structs
    this.taskuseService.TaskUseServiceChanged.subscribe(
      message => {
        if (message == "post" || message == "update" || message == "delete") {
          this.getTaskUses()
        }
      }
    )
    if (dialogData == undefined) {
      this.displayedColumns = ['ID', 'Edit', 'Delete', // insertion point for columns to display
        "Name",
        "Task",
        "RankInGanttDiagram",
        "Tasks",
      ]
    } else {
      this.displayedColumns = ['select', 'ID', // insertion point for columns to display
        "Name",
        "Task",
        "RankInGanttDiagram",
        "Tasks",
      ]
      this.selection = new SelectionModel<TaskUseDB>(allowMultiSelect, this.initialSelection);
    }

  }

  ngOnInit(): void {
    this.getTaskUses()
  }

  getTaskUses(): void {
    this.frontRepoService.pull().subscribe(
      frontRepo => {
        this.frontRepo = frontRepo
        console.log("front repo pull returned")

        this.taskuses = this.frontRepo.TaskUses_array;

        // insertion point for variables Recoveries

        // in case the component is called as a selection component
        if (this.dialogData != undefined) {
          this.taskuses.forEach(
            taskuse => {
              let ID = this.dialogData.ID
              let revPointer = taskuse[this.dialogData.ReversePointer]
              if (revPointer.Int64 == ID) {
                this.initialSelection.push(taskuse)
              }
            }
          )
          this.selection = new SelectionModel<TaskUseDB>(allowMultiSelect, this.initialSelection);
        }
      }
    )
  }

  // newTaskUse initiate a new taskuse
  // create a new TaskUse objet
  newTaskUse() {
  }

  deleteTaskUse(taskuseID: number, taskuse: TaskUseDB) {
    // list of taskuses is truncated of taskuse before the delete
    this.taskuses = this.taskuses.filter(h => h !== taskuse);

    this.taskuseService.deleteTaskUse(taskuseID).subscribe(
      taskuse => {
        this.taskuseService.TaskUseServiceChanged.next("delete")

        console.log("taskuse deleted")
      }
    );
  }

  editTaskUse(taskuseID: number, taskuse: TaskUseDB) {

  }

  // display taskuse in router
  displayTaskUseInRouter(taskuseID: number) {
    this.router.navigate( ["taskuse-display", taskuseID])
  }

  // set editor outlet
  setEditorRouterOutlet(taskuseID: number) {
    this.router.navigate([{
      outlets: {
        editor: ["taskuse-detail", taskuseID]
      }
    }]);
  }

  // set presentation outlet
  setPresentationRouterOutlet(taskuseID: number) {
    this.router.navigate([{
      outlets: {
        presentation: ["taskuse-presentation", taskuseID]
      }
    }]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.taskuses.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.taskuses.forEach(row => this.selection.select(row));
  }

  save() {

    let toUpdate = new Set<TaskUseDB>()

    // reset all initial selection of taskuse that belong to taskuse through Anarrayofb
    this.initialSelection.forEach(
      taskuse => {
        taskuse[this.dialogData.ReversePointer].Int64 = 0
        taskuse[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(taskuse)
      }
    )

    // from selection, set taskuse that belong to taskuse through Anarrayofb
    this.selection.selected.forEach(
      taskuse => {
        console.log("selection ID " + taskuse.ID)
        let ID = +this.dialogData.ID
        taskuse[this.dialogData.ReversePointer].Int64 = ID
        taskuse[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(taskuse)
      }
    )

    // update all taskuse (only update selection & initial selection)
    toUpdate.forEach(
      taskuse => {
        this.taskuseService.updateTaskUse(taskuse)
          .subscribe(taskuse => {
            this.taskuseService.TaskUseServiceChanged.next("update")
            console.log("taskuse saved")
          });
      }
    )
    this.dialogRef.close('Pizza!');
  }
}
