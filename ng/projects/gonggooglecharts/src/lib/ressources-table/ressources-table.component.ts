// generated from NgTableTemplateTS
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button'

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { DialogData } from '../front-repo.service'
import { SelectionModel } from '@angular/cdk/collections';

const allowMultiSelect = true;

import { Router, RouterState } from '@angular/router';
import { RessourceDB } from '../ressource-db'
import { RessourceService } from '../ressource.service'

import { FrontRepoService, FrontRepo } from '../front-repo.service'

// generated table component
@Component({
  selector: 'app-ressources-table',
  templateUrl: './ressources-table.component.html',
  styleUrls: ['./ressources-table.component.css'],
})
export class RessourcesTableComponent implements OnInit {

  // used if the component is called as a selection component of Ressource instances
  selection: SelectionModel<RessourceDB>;
  initialSelection = new Array<RessourceDB>();

  // the data source for the table
  ressources: RessourceDB[];

  // front repo, that will be referenced by this.ressources
  frontRepo: FrontRepo

  // displayedColumns is referenced by the MatTable component for specify what columns
  // have to be displayed and in what order
  displayedColumns: string[];

  constructor(
    private ressourceService: RessourceService,
    private frontRepoService: FrontRepoService,

    // not null if the component is called as a selection component of ressource instances
    public dialogRef: MatDialogRef<RessourcesTableComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,

    private router: Router,
  ) {
    // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
    // this is for routerLink on same component when only queryParameter changes
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // observable for changes in structs
    this.ressourceService.RessourceServiceChanged.subscribe(
      message => {
        if (message == "post" || message == "update" || message == "delete") {
          this.getRessources()
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
      this.selection = new SelectionModel<RessourceDB>(allowMultiSelect, this.initialSelection);
    }

  }

  ngOnInit(): void {
    this.getRessources()
  }

  getRessources(): void {
    this.frontRepoService.pull().subscribe(
      frontRepo => {
        this.frontRepo = frontRepo
        console.log("front repo pull returned")

        this.ressources = this.frontRepo.Ressources_array;

        // insertion point for variables Recoveries

        // in case the component is called as a selection component
        if (this.dialogData != undefined) {
          this.ressources.forEach(
            ressource => {
              let ID = this.dialogData.ID
              let revPointer = ressource[this.dialogData.ReversePointer]
              if (revPointer.Int64 == ID) {
                this.initialSelection.push(ressource)
              }
            }
          )
          this.selection = new SelectionModel<RessourceDB>(allowMultiSelect, this.initialSelection);
        }
      }
    )
  }

  // newRessource initiate a new ressource
  // create a new Ressource objet
  newRessource() {
  }

  deleteRessource(ressourceID: number, ressource: RessourceDB) {
    // list of ressources is truncated of ressource before the delete
    this.ressources = this.ressources.filter(h => h !== ressource);

    this.ressourceService.deleteRessource(ressourceID).subscribe(
      ressource => {
        this.ressourceService.RessourceServiceChanged.next("delete")

        console.log("ressource deleted")
      }
    );
  }

  editRessource(ressourceID: number, ressource: RessourceDB) {

  }

  // display ressource in router
  displayRessourceInRouter(ressourceID: number) {
    this.router.navigate( ["ressource-display", ressourceID])
  }

  // set editor outlet
  setEditorRouterOutlet(ressourceID: number) {
    this.router.navigate([{
      outlets: {
        editor: ["ressource-detail", ressourceID]
      }
    }]);
  }

  // set presentation outlet
  setPresentationRouterOutlet(ressourceID: number) {
    this.router.navigate([{
      outlets: {
        presentation: ["ressource-presentation", ressourceID]
      }
    }]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.ressources.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.ressources.forEach(row => this.selection.select(row));
  }

  save() {

    let toUpdate = new Set<RessourceDB>()

    // reset all initial selection of ressource that belong to ressource through Anarrayofb
    this.initialSelection.forEach(
      ressource => {
        ressource[this.dialogData.ReversePointer].Int64 = 0
        ressource[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(ressource)
      }
    )

    // from selection, set ressource that belong to ressource through Anarrayofb
    this.selection.selected.forEach(
      ressource => {
        console.log("selection ID " + ressource.ID)
        let ID = +this.dialogData.ID
        ressource[this.dialogData.ReversePointer].Int64 = ID
        ressource[this.dialogData.ReversePointer].Valid = true
        toUpdate.add(ressource)
      }
    )

    // update all ressource (only update selection & initial selection)
    toUpdate.forEach(
      ressource => {
        this.ressourceService.updateRessource(ressource)
          .subscribe(ressource => {
            this.ressourceService.RessourceServiceChanged.next("update")
            console.log("ressource saved")
          });
      }
    )
    this.dialogRef.close('Pizza!');
  }
}
