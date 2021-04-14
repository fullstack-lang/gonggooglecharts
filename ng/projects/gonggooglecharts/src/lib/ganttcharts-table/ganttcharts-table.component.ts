// generated from NgTableTemplateTS
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button'

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { DialogData } from '../front-repo.service'
import { SelectionModel } from '@angular/cdk/collections';

const allowMultiSelect = true;

import { Router, RouterState } from '@angular/router';
import { GanttChartDB } from '../ganttchart-db'
import { GanttChartService } from '../ganttchart.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'

// generated table component
@Component({
  selector: 'app-ganttcharts-table',
  templateUrl: './ganttcharts-table.component.html',
  styleUrls: ['./ganttcharts-table.component.css'],
})
export class GanttChartsTableComponent implements OnInit {

  // used if the component is called as a selection component of GanttChart instances
  selection: SelectionModel<GanttChartDB>;
  initialSelection = new Array<GanttChartDB>();

  // the data source for the table
  ganttcharts: GanttChartDB[];

  // front repo, that will be referenced by this.ganttcharts
  frontRepo: FrontRepo

  // displayedColumns is referenced by the MatTable component for specify what columns
  // have to be displayed and in what order
  displayedColumns: string[];

  constructor(
    private ganttchartService: GanttChartService,
    private frontRepoService: FrontRepoService,

    // not null if the component is called as a selection component of ganttchart instances
    public dialogRef: MatDialogRef<GanttChartsTableComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,

    private router: Router,
  ) {
    // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
    // this is for routerLink on same component when only queryParameter changes
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // observable for changes in structs
    this.ganttchartService.GanttChartServiceChanged.subscribe(
      message => {
        if (message == "post" || message == "update" || message == "delete") {
          this.getGanttCharts()
        }
      }
    )
    if (dialogData == undefined) {
      this.displayedColumns = ['ID', 'Edit', 'Delete', // insertion point for columns to display
        "Name",
      ]
    } else {
      this.displayedColumns = ['select', 'ID', // insertion point for columns to display
        "Name",
      ]
      this.selection = new SelectionModel<GanttChartDB>(allowMultiSelect, this.initialSelection);
    }

  }

  ngOnInit(): void {
    this.getGanttCharts()
  }

  getGanttCharts(): void {
    this.frontRepoService.pull().subscribe(
      frontRepo => {
        this.frontRepo = frontRepo
        console.log("front repo pull returned")

        this.ganttcharts = this.frontRepo.GanttCharts_array;

        // insertion point for variables Recoveries

        // in case the component is called as a selection component
        if (this.dialogData != undefined) {
          this.ganttcharts.forEach(
            ganttchart => {
              let ID = this.dialogData.ID
              let revPointer = ganttchart[this.dialogData.ReversePointer]
              if (revPointer.Int64 == ID) {
                this.initialSelection.push(ganttchart)
              }
            }
          )
          this.selection = new SelectionModel<GanttChartDB>(allowMultiSelect, this.initialSelection);
        }
      }
    )
  }

  // newGanttChart initiate a new ganttchart
  // create a new GanttChart objet
  newGanttChart() {
  }

  deleteGanttChart(ganttchartID: number, ganttchart: GanttChartDB) {
    // list of ganttcharts is truncated of ganttchart before the delete
    this.ganttcharts = this.ganttcharts.filter(h => h !== ganttchart);

    this.ganttchartService.deleteGanttChart(ganttchartID).subscribe(
      ganttchart => {
        this.ganttchartService.GanttChartServiceChanged.next("delete")

        console.log("ganttchart deleted")
      }
    );
  }

  editGanttChart(ganttchartID: number, ganttchart: GanttChartDB) {

  }

  // display ganttchart in router
  displayGanttChartInRouter(ganttchartID: number) {
    this.router.navigate( ["ganttchart-display", ganttchartID])
  }

  // set editor outlet
  setEditorRouterOutlet(ganttchartID: number) {
    this.router.navigate([{
      outlets: {
        editor: ["ganttchart-detail", ganttchartID]
      }
    }]);
  }

  // set presentation outlet
  setPresentationRouterOutlet(ganttchartID: number) {
    this.router.navigate([{
      outlets: {
        presentation: ["ganttchart-presentation", ganttchartID]
      }
    }]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.ganttcharts.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.ganttcharts.forEach(row => this.selection.select(row));
  }

  save() {

    let toUpdate = new Set<GanttChartDB>()

    // reset all initial selection of ganttchart that belong to ganttchart through Anarrayofb
    this.initialSelection.forEach(
      ganttchart => {
        ganttchart[this.dialogData.ReversePointer].Int64 = 0
        ganttchart[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(ganttchart)
      }
    )

    // from selection, set ganttchart that belong to ganttchart through Anarrayofb
    this.selection.selected.forEach(
      ganttchart => {
        console.log("selection ID " + ganttchart.ID)
        let ID = +this.dialogData.ID
        ganttchart[this.dialogData.ReversePointer].Int64 = ID
        ganttchart[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(ganttchart)
      }
    )

    // update all ganttchart (only update selection & initial selection)
    toUpdate.forEach(
      ganttchart => {
        this.ganttchartService.updateGanttChart(ganttchart)
          .subscribe(ganttchart => {
            this.ganttchartService.GanttChartServiceChanged.next("update")
            console.log("ganttchart saved")
          });
      }
    )
    this.dialogRef.close('Pizza!');
  }
}
