(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Yeo":
/*!********************************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependency-presentation/dependency-presentation.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DependencyPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyPresentationComponent", function() { return DependencyPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





function DependencyPresentationComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dependency.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dependency.TaskName);
} }
function DependencyPresentationComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
function DependencyPresentationComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [];
class DependencyPresentationComponent {
    constructor(dependencyService, route, router) {
        this.dependencyService = dependencyService;
        this.route = route;
        this.router = router;
        // insertion point for declarations
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getDependency();
        // observable for changes in 
        this.dependencyService.DependencyServiceChanged.subscribe(message => {
            if (message == "update") {
                this.getDependency();
            }
        });
    }
    getDependency() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.dependencyService.getDependency(id)
            .subscribe(dependency => {
            this.dependency = dependency;
            // insertion point for recovery of durations
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    presentation: [structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    editor: ["dependency-detail", ID]
                }
            }]);
    }
}
DependencyPresentationComponent.ɵfac = function DependencyPresentationComponent_Factory(t) { return new (t || DependencyPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_1__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DependencyPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DependencyPresentationComponent, selectors: [["app-dependency-presentation"]], decls: 9, vars: 4, consts: [[1, "presentation__header", 3, "click"], [1, "material-icons"], ["class", "presentation__table mat-table", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "presentation__table", "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], [1, "mat-row"], [1, "mat-cell"], ["mat-header-row", ""], ["mat-row", ""]], template: function DependencyPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DependencyPresentationComponent_Template_div_click_0_listener() { return ctx.setEditorRouterOutlet(ctx.dependency.ID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dependency's fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DependencyPresentationComponent_table_5_Template, 16, 2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DependencyPresentationComponent_tr_7_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DependencyPresentationComponent_tr_8_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dependency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3ktcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7Ozs7Q0FJQzs7QUFFRDs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImRlcGVuZGVuY3ktcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PSBQUkVTRU5UQVRJT04gPT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxudGgubWF0LWhlYWRlci1jZWxsLFxudGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcmVzZW50YXRpb25fX2hlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNFOEU4RTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlc2VudGF0aW9uX190YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"] });


/***/ }),

/***/ "/pIw":
/*!********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependencys-table/dependencys-table.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DependencysTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencysTableComponent", function() { return DependencysTableComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function DependencysTableComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "dependency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DependencysTableComponent_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r18.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
} }
function DependencysTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DependencysTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function DependencysTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const row_r20 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r22.selection.toggle(row_r20) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r20));
} }
function DependencysTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Dependency_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Dependency_r24.Name, " ");
} }
function DependencysTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Dependency_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Dependency_r25.Task ? Dependency_r25.Task.Name : "", " ");
} }
function DependencysTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " <-- (Task) Dependencies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dependency_r26 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r8.frontRepo.Tasks.get(dependency_r26.Task_DependenciesDBID.Int64)) == null ? null : tmp_0_0.Name, " ");
} }
function DependencysTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Dependency_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Dependency_r27.ID, " ");
} }
function DependencysTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function DependencysTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DependencysTableComponent_td_19_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const dependency_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.setEditorRouterOutlet(dependency_r28.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function DependencysTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DependencysTableComponent_td_22_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const dependency_r32 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.deleteDependency(dependency_r32.ID, dependency_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function DependencysTableComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
} }
function DependencysTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DependencysTableComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const row_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r37.setPresentationRouterOutlet(row_r36.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DependencysTableComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const allowMultiSelect = true;
// generated table component
class DependencysTableComponent {
    constructor(dependencyService, frontRepoService, 
    // not null if the component is called as a selection component of dependency instances
    dialogRef, dialogData, router) {
        this.dependencyService = dependencyService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        this.initialSelection = new Array();
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        // observable for changes in structs
        this.dependencyService.DependencyServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getDependencys();
            }
        });
        if (dialogData == undefined) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
                "Task",
                "Dependencies",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
                "Task",
                "Dependencies",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngOnInit() {
        this.getDependencys();
    }
    getDependencys() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo pull returned");
            this.dependencys = this.frontRepo.Dependencys_array;
            // insertion point for variables Recoveries
            // in case the component is called as a selection component
            if (this.dialogData != undefined) {
                this.dependencys.forEach(dependency => {
                    let ID = this.dialogData.ID;
                    let revPointer = dependency[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(dependency);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
        });
    }
    // newDependency initiate a new dependency
    // create a new Dependency objet
    newDependency() {
    }
    deleteDependency(dependencyID, dependency) {
        // list of dependencys is truncated of dependency before the delete
        this.dependencys = this.dependencys.filter(h => h !== dependency);
        this.dependencyService.deleteDependency(dependencyID).subscribe(dependency => {
            this.dependencyService.DependencyServiceChanged.next("delete");
            console.log("dependency deleted");
        });
    }
    editDependency(dependencyID, dependency) {
    }
    // display dependency in router
    displayDependencyInRouter(dependencyID) {
        this.router.navigate(["dependency-display", dependencyID]);
    }
    // set editor outlet
    setEditorRouterOutlet(dependencyID) {
        this.router.navigate([{
                outlets: {
                    editor: ["dependency-detail", dependencyID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(dependencyID) {
        this.router.navigate([{
                outlets: {
                    presentation: ["dependency-presentation", dependencyID]
                }
            }]);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dependencys.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dependencys.forEach(row => this.selection.select(row));
    }
    save() {
        let toUpdate = new Set();
        // reset all initial selection of dependency that belong to dependency through Anarrayofb
        this.initialSelection.forEach(dependency => {
            dependency[this.dialogData.ReversePointer].Int64 = 0;
            dependency[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(dependency);
        });
        // from selection, set dependency that belong to dependency through Anarrayofb
        this.selection.selected.forEach(dependency => {
            console.log("selection ID " + dependency.ID);
            let ID = +this.dialogData.ID;
            dependency[this.dialogData.ReversePointer].Int64 = ID;
            dependency[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(dependency);
        });
        // update all dependency (only update selection & initial selection)
        toUpdate.forEach(dependency => {
            this.dependencyService.updateDependency(dependency)
                .subscribe(dependency => {
                this.dependencyService.DependencyServiceChanged.next("update");
                console.log("dependency saved");
            });
        });
        this.dialogRef.close('Pizza!');
    }
}
DependencysTableComponent.ɵfac = function DependencysTableComponent_Factory(t) { return new (t || DependencysTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_3__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
DependencysTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DependencysTableComponent, selectors: [["app-dependencys-table"]], decls: 26, vars: 6, consts: [[4, "ngIf"], ["mat-table", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Task"], ["matColumnDef", "Dependencies"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function DependencysTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DependencysTableComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DependencysTableComponent_th_3_Template, 2, 2, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DependencysTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DependencysTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DependencysTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DependencysTableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DependencysTableComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DependencysTableComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DependencysTableComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DependencysTableComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DependencysTableComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DependencysTableComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DependencysTableComponent_td_19_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DependencysTableComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DependencysTableComponent_td_22_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DependencysTableComponent_tr_23_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DependencysTableComponent_tr_24_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DependencysTableComponent_button_25_Template, 2, 0, "button", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dependencys);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3lzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoiZGVwZW5kZW5jeXMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG49PT09PT09PT09PT09PT09PVxuPT09PT0gVEFCTEUgPT09PT1cbj09PT09PT09PT09PT09PT09XG4qL1xuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zIGluIHRoZSBtYXRlcmlhbCB0YWJsZSAqL1xudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MOSS-Users\peugeot\go\src\github.com\fullstack-lang\gonggooglecharts\ng\src\main.ts */"zUnb");


/***/ }),

/***/ "1lI/":
/*!***************************************************************************************!*\
  !*** ./projects/gonggooglechartspecific/src/lib/gonggooglechartspecific.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GonggooglechartspecificComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartspecificComponent", function() { return GonggooglechartspecificComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GonggooglechartspecificComponent {
    constructor() { }
    ngOnInit() {
    }
}
GonggooglechartspecificComponent.ɵfac = function GonggooglechartspecificComponent_Factory(t) { return new (t || GonggooglechartspecificComponent)(); };
GonggooglechartspecificComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GonggooglechartspecificComponent, selectors: [["lib-gonggooglechartspecific"]], decls: 2, vars: 0, template: function GonggooglechartspecificComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " gonggooglechartspecific works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "5BoB":
/*!*****************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/app-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencys-table/dependencys-table.component */ "/pIw");
/* harmony import */ var _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependency-detail/dependency-detail.component */ "tmHK");
/* harmony import */ var _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependency-presentation/dependency-presentation.component */ "+Yeo");
/* harmony import */ var _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony import */ var _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ganttchart-detail/ganttchart-detail.component */ "Ll9Z");
/* harmony import */ var _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ganttchart-presentation/ganttchart-presentation.component */ "PksR");
/* harmony import */ var _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ressources-table/ressources-table.component */ "b1k2");
/* harmony import */ var _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ressource-detail/ressource-detail.component */ "I2i6");
/* harmony import */ var _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ressource-presentation/ressource-presentation.component */ "Oa77");
/* harmony import */ var _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks-table/tasks-table.component */ "y650");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "k2dw");
/* harmony import */ var _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-presentation/task-presentation.component */ "7rAC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");

// insertion point for imports














const routes = [
    { path: 'dependencys', component: _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_1__["DependencysTableComponent"], outlet: 'table' },
    { path: 'dependency-adder', component: _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__["DependencyDetailComponent"], outlet: 'editor' },
    { path: 'dependency-adder/:id/:association', component: _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__["DependencyDetailComponent"], outlet: 'editor' },
    { path: 'dependency-detail/:id', component: _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__["DependencyDetailComponent"], outlet: 'editor' },
    { path: 'dependency-presentation/:id', component: _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_3__["DependencyPresentationComponent"], outlet: 'presentation' },
    { path: 'dependency-presentation-special/:id', component: _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_3__["DependencyPresentationComponent"], outlet: 'dependencypres' },
    { path: 'ganttcharts', component: _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_4__["GanttChartsTableComponent"], outlet: 'table' },
    { path: 'ganttchart-adder', component: _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__["GanttChartDetailComponent"], outlet: 'editor' },
    { path: 'ganttchart-adder/:id/:association', component: _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__["GanttChartDetailComponent"], outlet: 'editor' },
    { path: 'ganttchart-detail/:id', component: _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__["GanttChartDetailComponent"], outlet: 'editor' },
    { path: 'ganttchart-presentation/:id', component: _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_6__["GanttChartPresentationComponent"], outlet: 'presentation' },
    { path: 'ganttchart-presentation-special/:id', component: _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_6__["GanttChartPresentationComponent"], outlet: 'ganttchartpres' },
    { path: 'ressources', component: _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_7__["RessourcesTableComponent"], outlet: 'table' },
    { path: 'ressource-adder', component: _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__["RessourceDetailComponent"], outlet: 'editor' },
    { path: 'ressource-adder/:id/:association', component: _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__["RessourceDetailComponent"], outlet: 'editor' },
    { path: 'ressource-detail/:id', component: _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__["RessourceDetailComponent"], outlet: 'editor' },
    { path: 'ressource-presentation/:id', component: _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_9__["RessourcePresentationComponent"], outlet: 'presentation' },
    { path: 'ressource-presentation-special/:id', component: _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_9__["RessourcePresentationComponent"], outlet: 'ressourcepres' },
    { path: 'tasks', component: _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_10__["TasksTableComponent"], outlet: 'table' },
    { path: 'task-adder', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], outlet: 'editor' },
    { path: 'task-adder/:id/:association', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], outlet: 'editor' },
    { path: 'task-detail/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], outlet: 'editor' },
    { path: 'task-presentation/:id', component: _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_12__["TaskPresentationComponent"], outlet: 'presentation' },
    { path: 'task-presentation-special/:id', component: _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_12__["TaskPresentationComponent"], outlet: 'taskpres' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6Tml":
/*!************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressource-api.ts ***!
  \************************************************************/
/*! exports provided: RessourceAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceAPI", function() { return RessourceAPI; });
class RessourceAPI {
}


/***/ }),

/***/ "7rAC":
/*!********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/task-presentation/task-presentation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TaskPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPresentationComponent", function() { return TaskPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





function TaskPresentationComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "DisplayedName");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "PercentComplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.DisplayedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.RessourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.Start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.End);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r0.Duration_Hours, "H ", ctx_r0.Duration_Minutes, "M ", ctx_r0.Duration_Seconds, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.PercentComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.Rank);
} }
function TaskPresentationComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
function TaskPresentationComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [];
class TaskPresentationComponent {
    constructor(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getTask();
        // observable for changes in 
        this.taskService.TaskServiceChanged.subscribe(message => {
            if (message == "update") {
                this.getTask();
            }
        });
    }
    getTask() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.taskService.getTask(id)
            .subscribe(task => {
            this.task = task;
            // insertion point for recovery of durations
            // computation of Hours, Minutes, Seconds for Duration
            this.Duration_Hours = Math.floor(this.task.Duration / (3600 * 1000 * 1000 * 1000));
            this.Duration_Minutes = Math.floor(this.task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000));
            this.Duration_Seconds = this.task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000);
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    presentation: [structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    editor: ["task-detail", ID]
                }
            }]);
    }
}
TaskPresentationComponent.ɵfac = function TaskPresentationComponent_Factory(t) { return new (t || TaskPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TaskPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskPresentationComponent, selectors: [["app-task-presentation"]], decls: 9, vars: 4, consts: [[1, "presentation__header", 3, "click"], [1, "material-icons"], ["class", "presentation__table mat-table", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "presentation__table", "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], [1, "mat-row"], [1, "mat-cell"], ["mat-header-row", ""], ["mat-row", ""]], template: function TaskPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskPresentationComponent_Template_div_click_0_listener() { return ctx.setEditorRouterOutlet(ctx.task.ID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Task's fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskPresentationComponent_table_5_Template, 46, 10, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskPresentationComponent_tr_7_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskPresentationComponent_tr_8_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7Ozs7Q0FJQzs7QUFFRDs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InRhc2stcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PSBQUkVTRU5UQVRJT04gPT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxudGgubWF0LWhlYWRlci1jZWxsLFxudGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcmVzZW50YXRpb25fX2hlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNFOEU4RTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlc2VudGF0aW9uX190YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BBzA":
/*!***********************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/task.service.ts ***!
  \***********************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

/*
 * Behavior subject
 */





class TaskService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.TaskServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.tasksUrl = 'http://localhost:8080/api/github.com/fullstack-lang/gonggooglecharts/go/v1/tasks';
    }
    /** GET tasks from the server */
    getTasks() {
        return this.http.get(this.tasksUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched tasks')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getTasks', [])));
    }
    /** GET task by id. Will 404 if id not found */
    getTask(id) {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`fetched task id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`getTask id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new task to the server */
    postTask(taskAPI) {
        return this.http.post(this.tasksUrl, taskAPI, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newTask) => { }));
    }
    /** DELETE: delete the taskdb from the server */
    deleteTask(taskdb) {
        const id = typeof taskdb === 'number' ? taskdb : taskdb.ID;
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`deleted taskdb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteTask')));
    }
    /** PUT: update the taskdb on the server */
    updateTask(taskdb) {
        const id = typeof taskdb === 'number' ? taskdb : taskdb.ID;
        const url = `${this.tasksUrl}/${id}`;
        // insertion point for reset of reverse pointers (to avoid circular JSON)
        taskdb.Ressource = {};
        taskdb.Dependencies = [];
        let _GanttChart_Tasks_reverse = taskdb.GanttChart_Tasks_reverse;
        taskdb.GanttChart_Tasks_reverse = {};
        return this.http.put(url, taskdb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            taskdb.GanttChart_Tasks_reverse = _GanttChart_Tasks_reverse;
            this.log(`updated taskdb id=${taskdb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateTask')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    log(message) {
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Cft9":
/*!*****************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/front-repo.service.ts ***!
  \*****************************************************************/
/*! exports provided: FrontRepo, FrontRepoSingloton, NullInt64, FrontRepoService, getDependencyUniqueID, getGanttChartUniqueID, getRessourceUniqueID, getTaskUniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontRepo", function() { return FrontRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontRepoSingloton", function() { return FrontRepoSingloton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullInt64", function() { return NullInt64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontRepoService", function() { return FrontRepoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyUniqueID", function() { return getDependencyUniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGanttChartUniqueID", function() { return getGanttChartUniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRessourceUniqueID", function() { return getRessourceUniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskUniqueID", function() { return getTaskUniqueID; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependency.service */ "ayko");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ganttchart.service */ "WjmK");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ressource.service */ "Os04");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.service */ "BBzA");








// FrontRepo stores all instances in a front repository (design pattern repository)
class FrontRepo {
    constructor() {
        this.Dependencys_array = new Array(); // array of repo instances
        this.Dependencys = new Map(); // map of repo instances
        this.Dependencys_batch = new Map(); // same but only in last GET (for finding repo instances to delete)
        this.GanttCharts_array = new Array(); // array of repo instances
        this.GanttCharts = new Map(); // map of repo instances
        this.GanttCharts_batch = new Map(); // same but only in last GET (for finding repo instances to delete)
        this.Ressources_array = new Array(); // array of repo instances
        this.Ressources = new Map(); // map of repo instances
        this.Ressources_batch = new Map(); // same but only in last GET (for finding repo instances to delete)
        this.Tasks_array = new Array(); // array of repo instances
        this.Tasks = new Map(); // map of repo instances
        this.Tasks_batch = new Map(); // same but only in last GET (for finding repo instances to delete)
    }
}
//
// Store of all instances of the stack
//
const FrontRepoSingloton = new (FrontRepo);
// define the type of nullable Int64 in order to support back pointers IDs
class NullInt64 {
}
//
// observable that fetch all elements of the stack and store them in the FrontRepo
//
class FrontRepoService {
    constructor(http, // insertion point sub template 
    dependencyService, ganttchartService, ressourceService, taskService) {
        this.http = http;
        this.dependencyService = dependencyService;
        this.ganttchartService = ganttchartService;
        this.ressourceService = ressourceService;
        this.taskService = taskService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // typing of observable can be messy in typescript. Therefore, one force the type
        this.observableFrontRepo = [
            this.dependencyService.getDependencys(),
            this.ganttchartService.getGanttCharts(),
            this.ressourceService.getRessources(),
            this.taskService.getTasks(),
        ];
    }
    //
    // pull performs a GET on all struct of the stack and redeem association pointers 
    //
    // This is an observable. Therefore, the control flow forks with
    // - pull() return immediatly the observable
    // - the observable observer, if it subscribe, is called when all GET calls are performs
    pull() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.observableFrontRepo).subscribe(([// insertion point sub template for declarations 
            dependencys_, ganttcharts_, ressources_, tasks_,]) => {
                // Typing can be messy with many items. Therefore, type casting is necessary here
                // insertion point sub template for type casting 
                var dependencys;
                dependencys = dependencys_;
                var ganttcharts;
                ganttcharts = ganttcharts_;
                var ressources;
                ressources = ressources_;
                var tasks;
                tasks = tasks_;
                // 
                // First Step: init map of instances
                // insertion point sub template for init 
                // init the array
                FrontRepoSingloton.Dependencys_array = dependencys;
                // clear the map that counts Dependency in the GET
                FrontRepoSingloton.Dependencys_batch.clear();
                dependencys.forEach(dependency => {
                    FrontRepoSingloton.Dependencys.set(dependency.ID, dependency);
                    FrontRepoSingloton.Dependencys_batch.set(dependency.ID, dependency);
                });
                // clear dependencys that are absent from the batch
                FrontRepoSingloton.Dependencys.forEach(dependency => {
                    if (FrontRepoSingloton.Dependencys_batch.get(dependency.ID) == undefined) {
                        FrontRepoSingloton.Dependencys.delete(dependency.ID);
                    }
                });
                // init the array
                FrontRepoSingloton.GanttCharts_array = ganttcharts;
                // clear the map that counts GanttChart in the GET
                FrontRepoSingloton.GanttCharts_batch.clear();
                ganttcharts.forEach(ganttchart => {
                    FrontRepoSingloton.GanttCharts.set(ganttchart.ID, ganttchart);
                    FrontRepoSingloton.GanttCharts_batch.set(ganttchart.ID, ganttchart);
                });
                // clear ganttcharts that are absent from the batch
                FrontRepoSingloton.GanttCharts.forEach(ganttchart => {
                    if (FrontRepoSingloton.GanttCharts_batch.get(ganttchart.ID) == undefined) {
                        FrontRepoSingloton.GanttCharts.delete(ganttchart.ID);
                    }
                });
                // init the array
                FrontRepoSingloton.Ressources_array = ressources;
                // clear the map that counts Ressource in the GET
                FrontRepoSingloton.Ressources_batch.clear();
                ressources.forEach(ressource => {
                    FrontRepoSingloton.Ressources.set(ressource.ID, ressource);
                    FrontRepoSingloton.Ressources_batch.set(ressource.ID, ressource);
                });
                // clear ressources that are absent from the batch
                FrontRepoSingloton.Ressources.forEach(ressource => {
                    if (FrontRepoSingloton.Ressources_batch.get(ressource.ID) == undefined) {
                        FrontRepoSingloton.Ressources.delete(ressource.ID);
                    }
                });
                // init the array
                FrontRepoSingloton.Tasks_array = tasks;
                // clear the map that counts Task in the GET
                FrontRepoSingloton.Tasks_batch.clear();
                tasks.forEach(task => {
                    FrontRepoSingloton.Tasks.set(task.ID, task);
                    FrontRepoSingloton.Tasks_batch.set(task.ID, task);
                });
                // clear tasks that are absent from the batch
                FrontRepoSingloton.Tasks.forEach(task => {
                    if (FrontRepoSingloton.Tasks_batch.get(task.ID) == undefined) {
                        FrontRepoSingloton.Tasks.delete(task.ID);
                    }
                });
                // 
                // Second Step: redeem pointers between instances (thanks to maps in the First Step)
                // insertion point sub template for redeem 
                dependencys.forEach(dependency => {
                    // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming
                    // insertion point for pointer field Task redeeming
                    {
                        let _task = FrontRepoSingloton.Tasks.get(dependency.TaskID.Int64);
                        if (_task) {
                            dependency.Task = _task;
                        }
                    }
                    // insertion point for redeeming ONE-MANY associations
                    // insertion point for slice of pointer field Task.Dependencies redeeming
                    {
                        let _task = FrontRepoSingloton.Tasks.get(dependency.Task_DependenciesDBID.Int64);
                        if (_task) {
                            if (_task.Dependencies == undefined) {
                                _task.Dependencies = new Array();
                            }
                            _task.Dependencies.push(dependency);
                            if (dependency.Task_Dependencies_reverse == undefined) {
                                dependency.Task_Dependencies_reverse = _task;
                            }
                        }
                    }
                });
                ganttcharts.forEach(ganttchart => {
                    // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming
                    // insertion point for redeeming ONE-MANY associations
                });
                ressources.forEach(ressource => {
                    // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming
                    // insertion point for redeeming ONE-MANY associations
                });
                tasks.forEach(task => {
                    // insertion point sub sub template for ONE-/ZERO-ONE associations pointers redeeming
                    // insertion point for pointer field Ressource redeeming
                    {
                        let _ressource = FrontRepoSingloton.Ressources.get(task.RessourceID.Int64);
                        if (_ressource) {
                            task.Ressource = _ressource;
                        }
                    }
                    // insertion point for redeeming ONE-MANY associations
                    // insertion point for slice of pointer field GanttChart.Tasks redeeming
                    {
                        let _ganttchart = FrontRepoSingloton.GanttCharts.get(task.GanttChart_TasksDBID.Int64);
                        if (_ganttchart) {
                            if (_ganttchart.Tasks == undefined) {
                                _ganttchart.Tasks = new Array();
                            }
                            _ganttchart.Tasks.push(task);
                            if (task.GanttChart_Tasks_reverse == undefined) {
                                task.GanttChart_Tasks_reverse = _ganttchart;
                            }
                        }
                    }
                });
                // hand over control flow to observer
                observer.next(FrontRepoSingloton);
            });
        });
    }
    // insertion point for pull per struct 
    // DependencyPull performs a GET on Dependency of the stack and redeem association pointers 
    DependencyPull() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                this.dependencyService.getDependencys()
            ]).subscribe(([// insertion point sub template 
            dependencys,]) => {
                // init the array
                FrontRepoSingloton.Dependencys_array = dependencys;
                // clear the map that counts Dependency in the GET
                FrontRepoSingloton.Dependencys_batch.clear();
                // 
                // First Step: init map of instances
                // insertion point sub template 
                dependencys.forEach(dependency => {
                    FrontRepoSingloton.Dependencys.set(dependency.ID, dependency);
                    FrontRepoSingloton.Dependencys_batch.set(dependency.ID, dependency);
                    // insertion point for redeeming ONE/ZERO-ONE associations 
                    // insertion point for pointer field Task redeeming
                    {
                        let _task = FrontRepoSingloton.Tasks.get(dependency.TaskID.Int64);
                        if (_task) {
                            dependency.Task = _task;
                        }
                    }
                    // insertion point for redeeming ONE-MANY associations 
                    // insertion point for slice of pointer field Task.Dependencies redeeming
                    {
                        let _task = FrontRepoSingloton.Tasks.get(dependency.Task_DependenciesDBID.Int64);
                        if (_task) {
                            if (_task.Dependencies == undefined) {
                                _task.Dependencies = new Array();
                            }
                            _task.Dependencies.push(dependency);
                            if (dependency.Task_Dependencies_reverse == undefined) {
                                dependency.Task_Dependencies_reverse = _task;
                            }
                        }
                    }
                });
                // clear dependencys that are absent from the GET
                FrontRepoSingloton.Dependencys.forEach(dependency => {
                    if (FrontRepoSingloton.Dependencys_batch.get(dependency.ID) == undefined) {
                        FrontRepoSingloton.Dependencys.delete(dependency.ID);
                    }
                });
                // 
                // Second Step: redeem pointers between instances (thanks to maps in the First Step)
                // insertion point sub template 
                // hand over control flow to observer
                observer.next(FrontRepoSingloton);
            });
        });
    }
    // GanttChartPull performs a GET on GanttChart of the stack and redeem association pointers 
    GanttChartPull() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                this.ganttchartService.getGanttCharts()
            ]).subscribe(([// insertion point sub template 
            ganttcharts,]) => {
                // init the array
                FrontRepoSingloton.GanttCharts_array = ganttcharts;
                // clear the map that counts GanttChart in the GET
                FrontRepoSingloton.GanttCharts_batch.clear();
                // 
                // First Step: init map of instances
                // insertion point sub template 
                ganttcharts.forEach(ganttchart => {
                    FrontRepoSingloton.GanttCharts.set(ganttchart.ID, ganttchart);
                    FrontRepoSingloton.GanttCharts_batch.set(ganttchart.ID, ganttchart);
                    // insertion point for redeeming ONE/ZERO-ONE associations 
                    // insertion point for redeeming ONE-MANY associations 
                });
                // clear ganttcharts that are absent from the GET
                FrontRepoSingloton.GanttCharts.forEach(ganttchart => {
                    if (FrontRepoSingloton.GanttCharts_batch.get(ganttchart.ID) == undefined) {
                        FrontRepoSingloton.GanttCharts.delete(ganttchart.ID);
                    }
                });
                // 
                // Second Step: redeem pointers between instances (thanks to maps in the First Step)
                // insertion point sub template 
                // hand over control flow to observer
                observer.next(FrontRepoSingloton);
            });
        });
    }
    // RessourcePull performs a GET on Ressource of the stack and redeem association pointers 
    RessourcePull() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                this.ressourceService.getRessources()
            ]).subscribe(([// insertion point sub template 
            ressources,]) => {
                // init the array
                FrontRepoSingloton.Ressources_array = ressources;
                // clear the map that counts Ressource in the GET
                FrontRepoSingloton.Ressources_batch.clear();
                // 
                // First Step: init map of instances
                // insertion point sub template 
                ressources.forEach(ressource => {
                    FrontRepoSingloton.Ressources.set(ressource.ID, ressource);
                    FrontRepoSingloton.Ressources_batch.set(ressource.ID, ressource);
                    // insertion point for redeeming ONE/ZERO-ONE associations 
                    // insertion point for redeeming ONE-MANY associations 
                });
                // clear ressources that are absent from the GET
                FrontRepoSingloton.Ressources.forEach(ressource => {
                    if (FrontRepoSingloton.Ressources_batch.get(ressource.ID) == undefined) {
                        FrontRepoSingloton.Ressources.delete(ressource.ID);
                    }
                });
                // 
                // Second Step: redeem pointers between instances (thanks to maps in the First Step)
                // insertion point sub template 
                // hand over control flow to observer
                observer.next(FrontRepoSingloton);
            });
        });
    }
    // TaskPull performs a GET on Task of the stack and redeem association pointers 
    TaskPull() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                this.taskService.getTasks()
            ]).subscribe(([// insertion point sub template 
            tasks,]) => {
                // init the array
                FrontRepoSingloton.Tasks_array = tasks;
                // clear the map that counts Task in the GET
                FrontRepoSingloton.Tasks_batch.clear();
                // 
                // First Step: init map of instances
                // insertion point sub template 
                tasks.forEach(task => {
                    FrontRepoSingloton.Tasks.set(task.ID, task);
                    FrontRepoSingloton.Tasks_batch.set(task.ID, task);
                    // insertion point for redeeming ONE/ZERO-ONE associations 
                    // insertion point for pointer field Ressource redeeming
                    {
                        let _ressource = FrontRepoSingloton.Ressources.get(task.RessourceID.Int64);
                        if (_ressource) {
                            task.Ressource = _ressource;
                        }
                    }
                    // insertion point for redeeming ONE-MANY associations 
                    // insertion point for slice of pointer field GanttChart.Tasks redeeming
                    {
                        let _ganttchart = FrontRepoSingloton.GanttCharts.get(task.GanttChart_TasksDBID.Int64);
                        if (_ganttchart) {
                            if (_ganttchart.Tasks == undefined) {
                                _ganttchart.Tasks = new Array();
                            }
                            _ganttchart.Tasks.push(task);
                            if (task.GanttChart_Tasks_reverse == undefined) {
                                task.GanttChart_Tasks_reverse = _ganttchart;
                            }
                        }
                    }
                });
                // clear tasks that are absent from the GET
                FrontRepoSingloton.Tasks.forEach(task => {
                    if (FrontRepoSingloton.Tasks_batch.get(task.ID) == undefined) {
                        FrontRepoSingloton.Tasks.delete(task.ID);
                    }
                });
                // 
                // Second Step: redeem pointers between instances (thanks to maps in the First Step)
                // insertion point sub template 
                // hand over control flow to observer
                observer.next(FrontRepoSingloton);
            });
        });
    }
}
FrontRepoService.ɵfac = function FrontRepoService_Factory(t) { return new (t || FrontRepoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dependency_service__WEBPACK_IMPORTED_MODULE_3__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_4__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ressource_service__WEBPACK_IMPORTED_MODULE_5__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"])); };
FrontRepoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FrontRepoService, factory: FrontRepoService.ɵfac, providedIn: 'root' });
// insertion point for get unique ID per struct 
function getDependencyUniqueID(id) {
    return 31 * id;
}
function getGanttChartUniqueID(id) {
    return 37 * id;
}
function getRessourceUniqueID(id) {
    return 41 * id;
}
function getTaskUniqueID(id) {
    return 43 * id;
}


/***/ }),

/***/ "GPUy":
/*!************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependency-db.ts ***!
  \************************************************************/
/*! exports provided: DependencyDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyDB", function() { return DependencyDB; });
class DependencyDB {
}


/***/ }),

/***/ "I2i6":
/*!******************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressource-detail/ressource-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RessourceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceDetailComponent", function() { return RessourceDetailComponent; });
/* harmony import */ var _ressource_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ressource-db */ "dPgB");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













const _c0 = function () { return { standalone: true }; };
function RessourceDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RessourceDetailComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.ressource.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RessourceDetailComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Save ressource ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r0.ressource.Name);
} }
class RessourceDetailComponent {
    constructor(ressourceService, frontRepoService, dialog, route, router) {
        this.ressourceService = ressourceService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getRessource();
        // observable for changes in structs
        this.ressourceService.RessourceServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getRessource();
            }
        });
        // insertion point for initialisation of enums list
    }
    getRessource() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo RessourcePull returned");
            if (id != 0 && association == undefined) {
                this.ressource = frontRepo.Ressources.get(id);
            }
            else {
                this.ressource = new (_ressource_db__WEBPACK_IMPORTED_MODULE_0__["RessourceDB"]);
            }
            // insertion point for recovery of form controls value for bool fields
        });
    }
    save() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        // insertion point for saving value of form controls of boolean fields
        if (id != 0 && association == undefined) {
            // insertion point for saving value of reverse pointers
            this.ressourceService.updateRessource(this.ressource)
                .subscribe(ressource => {
                this.ressourceService.RessourceServiceChanged.next("update");
                console.log("ressource saved");
            });
        }
        else {
            switch (association) {
                // insertion point for saving value of ONE_MANY association reverse pointer
            }
            this.ressourceService.postRessource(this.ressource).subscribe(ressource => {
                this.ressourceService.RessourceServiceChanged.next("post");
                this.ressource = {}; // reset fields
                console.log("ressource added");
            });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.ressource.ID,
            ReversePointer: reverseField,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_1__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
RessourceDetailComponent.ɵfac = function RessourceDetailComponent_Factory(t) { return new (t || RessourceDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_4__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_5__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RessourceDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RessourceDetailComponent, selectors: [["app-ressource-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], [1, "details__item"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RessourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RessourceDetailComponent_div_0_Template, 12, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ressource);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.details__item[_ngcontent-%COMP%] {\n    padding: 2.5px 5px;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsbUNBQW1DOztBQUNuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7OztDQUlDOztBQUNEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicmVzc291cmNlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDE6OmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyogT3ZlcnJpZGUgTWF0ZXJpYWwgVUkgZm9udC1zaXplICovXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLypcbj09PT09PT09PT09PT09PT09PT1cbj09PT09IERFVEFJTFMgPT09PT1cbj09PT09PT09PT09PT09PT09PT1cbiovXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRldGFpbHNfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZGV0YWlsc19faXRlbSB7XG4gICAgcGFkZGluZzogMi41cHggNXB4O1xufVxuXG4uZGV0YWlsc19fc2F2ZSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZGV0YWlsc19ob3Vyc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uZGV0YWlsc19taW51dGVzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5kZXRhaWxzX3NlY29uZHNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "JzqT":
/*!**********************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/gonggooglecharts.module.ts ***!
  \**********************************************************************/
/*! exports provided: GonggooglechartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartsModule", function() { return GonggooglechartsModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-split */ "cdP3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "5BoB");
/* harmony import */ var _splitter_splitter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./splitter/splitter.component */ "Oftp");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "ZUHL");
/* harmony import */ var _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dependencys-table/dependencys-table.component */ "/pIw");
/* harmony import */ var _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dependency-detail/dependency-detail.component */ "tmHK");
/* harmony import */ var _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dependency-presentation/dependency-presentation.component */ "+Yeo");
/* harmony import */ var _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony import */ var _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ganttchart-detail/ganttchart-detail.component */ "Ll9Z");
/* harmony import */ var _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ganttchart-presentation/ganttchart-presentation.component */ "PksR");
/* harmony import */ var _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ressources-table/ressources-table.component */ "b1k2");
/* harmony import */ var _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ressource-detail/ressource-detail.component */ "I2i6");
/* harmony import */ var _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ressource-presentation/ressource-presentation.component */ "Oa77");
/* harmony import */ var _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tasks-table/tasks-table.component */ "y650");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "k2dw");
/* harmony import */ var _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./task-presentation/task-presentation.component */ "7rAC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");



// for angular material



















// insertion point for imports 













class GonggooglechartsModule {
}
GonggooglechartsModule.ɵfac = function GonggooglechartsModule_Factory(t) { return new (t || GonggooglechartsModule)(); };
GonggooglechartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: GonggooglechartsModule });
GonggooglechartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"],
            useValue: {}
        },
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_18__["AngularSplitModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](GonggooglechartsModule, { declarations: [
        // insertion point for declarations 
        _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_22__["DependencysTableComponent"],
        _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_23__["DependencyDetailComponent"],
        _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_24__["DependencyPresentationComponent"],
        _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_25__["GanttChartsTableComponent"],
        _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_26__["GanttChartDetailComponent"],
        _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_27__["GanttChartPresentationComponent"],
        _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_28__["RessourcesTableComponent"],
        _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_29__["RessourceDetailComponent"],
        _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_30__["RessourcePresentationComponent"],
        _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_31__["TasksTableComponent"],
        _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_32__["TaskDetailComponent"],
        _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_33__["TaskPresentationComponent"],
        _splitter_splitter_component__WEBPACK_IMPORTED_MODULE_20__["SplitterComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
        angular_split__WEBPACK_IMPORTED_MODULE_18__["AngularSplitModule"]], exports: [
        // insertion point for declarations 
        _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_22__["DependencysTableComponent"],
        _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_23__["DependencyDetailComponent"],
        _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_24__["DependencyPresentationComponent"],
        _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_25__["GanttChartsTableComponent"],
        _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_26__["GanttChartDetailComponent"],
        _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_27__["GanttChartPresentationComponent"],
        _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_28__["RessourcesTableComponent"],
        _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_29__["RessourceDetailComponent"],
        _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_30__["RessourcePresentationComponent"],
        _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_31__["TasksTableComponent"],
        _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_32__["TaskDetailComponent"],
        _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_33__["TaskPresentationComponent"],
        _splitter_splitter_component__WEBPACK_IMPORTED_MODULE_20__["SplitterComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"]] }); })();


/***/ }),

/***/ "Ll9Z":
/*!********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttchart-detail/ganttchart-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GanttChartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartDetailComponent", function() { return GanttChartDetailComponent; });
/* harmony import */ var _ganttchart_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ganttchart-db */ "zFDn");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













const _c0 = function () { return { standalone: true }; };
function GanttChartDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ganttchart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GanttChartDetailComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.ganttchart.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GanttChartDetailComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openReverseSelection("Task", "GanttChart_TasksDBID"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GanttChartDetailComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Save ganttchart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r0.ganttchart.Name);
} }
class GanttChartDetailComponent {
    constructor(ganttchartService, frontRepoService, dialog, route, router) {
        this.ganttchartService = ganttchartService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getGanttChart();
        // observable for changes in structs
        this.ganttchartService.GanttChartServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getGanttChart();
            }
        });
        // insertion point for initialisation of enums list
    }
    getGanttChart() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo GanttChartPull returned");
            if (id != 0 && association == undefined) {
                this.ganttchart = frontRepo.GanttCharts.get(id);
            }
            else {
                this.ganttchart = new (_ganttchart_db__WEBPACK_IMPORTED_MODULE_0__["GanttChartDB"]);
            }
            // insertion point for recovery of form controls value for bool fields
        });
    }
    save() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        // insertion point for saving value of form controls of boolean fields
        if (id != 0 && association == undefined) {
            // insertion point for saving value of reverse pointers
            this.ganttchartService.updateGanttChart(this.ganttchart)
                .subscribe(ganttchart => {
                this.ganttchartService.GanttChartServiceChanged.next("update");
                console.log("ganttchart saved");
            });
        }
        else {
            switch (association) {
                // insertion point for saving value of ONE_MANY association reverse pointer
            }
            this.ganttchartService.postGanttChart(this.ganttchart).subscribe(ganttchart => {
                this.ganttchartService.GanttChartServiceChanged.next("post");
                this.ganttchart = {}; // reset fields
                console.log("ganttchart added");
            });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.ganttchart.ID,
            ReversePointer: reverseField,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_1__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
GanttChartDetailComponent.ɵfac = function GanttChartDetailComponent_Factory(t) { return new (t || GanttChartDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_4__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_5__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
GanttChartDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GanttChartDetailComponent, selectors: [["app-ganttchart-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], [1, "details__item"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function GanttChartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GanttChartDetailComponent_div_0_Template, 15, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ganttchart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.details__item[_ngcontent-%COMP%] {\n    padding: 2.5px 5px;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImdhbnR0Y2hhcnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cbioge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuPT09PT09PT09PT09PT09PT09PVxuPT09PT0gREVUQUlMUyA9PT09PVxuPT09PT09PT09PT09PT09PT09PVxuKi9cbi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV0YWlsc19fdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5kZXRhaWxzX19pdGVtIHtcbiAgICBwYWRkaW5nOiAyLjVweCA1cHg7XG59XG5cbi5kZXRhaWxzX19zYXZlIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5kZXRhaWxzX2hvdXJzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5kZXRhaWxzX21pbnV0ZXNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmRldGFpbHNfc2Vjb25kc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "Lm/0":
/*!*******************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/task-api.ts ***!
  \*******************************************************/
/*! exports provided: TaskAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAPI", function() { return TaskAPI; });
class TaskAPI {
}


/***/ }),

/***/ "Oa77":
/*!******************************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressource-presentation/ressource-presentation.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RessourcePresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourcePresentationComponent", function() { return RessourcePresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





function RessourcePresentationComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ressource.Name);
} }
function RessourcePresentationComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
function RessourcePresentationComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [];
class RessourcePresentationComponent {
    constructor(ressourceService, route, router) {
        this.ressourceService = ressourceService;
        this.route = route;
        this.router = router;
        // insertion point for declarations
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getRessource();
        // observable for changes in 
        this.ressourceService.RessourceServiceChanged.subscribe(message => {
            if (message == "update") {
                this.getRessource();
            }
        });
    }
    getRessource() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.ressourceService.getRessource(id)
            .subscribe(ressource => {
            this.ressource = ressource;
            // insertion point for recovery of durations
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    presentation: [structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    editor: ["ressource-detail", ID]
                }
            }]);
    }
}
RessourcePresentationComponent.ɵfac = function RessourcePresentationComponent_Factory(t) { return new (t || RessourcePresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_1__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RessourcePresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RessourcePresentationComponent, selectors: [["app-ressource-presentation"]], decls: 9, vars: 4, consts: [[1, "presentation__header", 3, "click"], [1, "material-icons"], ["class", "presentation__table mat-table", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "presentation__table", "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], [1, "mat-row"], [1, "mat-cell"], ["mat-header-row", ""], ["mat-row", ""]], template: function RessourcePresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RessourcePresentationComponent_Template_div_click_0_listener() { return ctx.setEditorRouterOutlet(ctx.ressource.ID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ressource's fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RessourcePresentationComponent_table_5_Template, 11, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RessourcePresentationComponent_tr_7_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RessourcePresentationComponent_tr_8_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ressource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZS1wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0EsbUNBQW1DOztBQUVuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFHQTs7OztDQUlDOztBQUVEOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0IiLCJmaWxlIjoicmVzc291cmNlLXByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDE6OmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cblxuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLypcbj09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT0gUFJFU0VOVEFUSU9OID09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbnRoLm1hdC1oZWFkZXItY2VsbCxcbnRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLnByZXNlbnRhdGlvbl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXI6aG92ZXIge1xuICAgIGNvbG9yOiAjRThFOEU4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZXNlbnRhdGlvbl9fdGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59Il19 */"] });


/***/ }),

/***/ "Oftp":
/*!**************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/splitter/splitter.component.ts ***!
  \**************************************************************************/
/*! exports provided: SplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterComponent", function() { return SplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-split */ "cdP3");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "ZUHL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SplitterComponent {
    constructor() { }
    ngOnInit() {
    }
}
SplitterComponent.ɵfac = function SplitterComponent_Factory(t) { return new (t || SplitterComponent)(); };
SplitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitterComponent, selectors: [["app-gonggooglecharts-splitter"]], decls: 16, vars: 0, consts: [[2, "width", "100%", "height", "100%", "background", "grey(16)"], ["direction", "horizontal"], ["size", "20", "maxSize", "30"], ["direction", "vertical"], ["size", "80", "maxSize", "100"], ["name", "table"], ["size", "20", "maxSize", "100"], ["name", "presentation"], ["name", "editor"]], template: function SplitterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "as-split", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "as-split-area", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "as-split", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "as-split-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-gonggooglecharts-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "as-split-area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "as-split", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "as-split-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "as-split-area", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "as-split", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "as-split-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "as-split-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".as-split-area[_ngcontent-%COMP%] {\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3BsaXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcy1zcGxpdC1hcmVhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });


/***/ }),

/***/ "Os04":
/*!****************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressource.service.ts ***!
  \****************************************************************/
/*! exports provided: RessourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceService", function() { return RessourceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

/*
 * Behavior subject
 */





class RessourceService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.RessourceServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.ressourcesUrl = 'http://localhost:8080/api/github.com/fullstack-lang/gonggooglecharts/go/v1/ressources';
    }
    /** GET ressources from the server */
    getRessources() {
        return this.http.get(this.ressourcesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched ressources')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getRessources', [])));
    }
    /** GET ressource by id. Will 404 if id not found */
    getRessource(id) {
        const url = `${this.ressourcesUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`fetched ressource id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`getRessource id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new ressource to the server */
    postRessource(ressourceAPI) {
        return this.http.post(this.ressourcesUrl, ressourceAPI, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newRessource) => { }));
    }
    /** DELETE: delete the ressourcedb from the server */
    deleteRessource(ressourcedb) {
        const id = typeof ressourcedb === 'number' ? ressourcedb : ressourcedb.ID;
        const url = `${this.ressourcesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`deleted ressourcedb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteRessource')));
    }
    /** PUT: update the ressourcedb on the server */
    updateRessource(ressourcedb) {
        const id = typeof ressourcedb === 'number' ? ressourcedb : ressourcedb.ID;
        const url = `${this.ressourcesUrl}/${id}`;
        // insertion point for reset of reverse pointers (to avoid circular JSON)
        return this.http.put(url, ressourcedb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            this.log(`updated ressourcedb id=${ressourcedb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateRessource')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    log(message) {
    }
}
RessourceService.ɵfac = function RessourceService_Factory(t) { return new (t || RessourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RessourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RessourceService, factory: RessourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PksR":
/*!********************************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttchart-presentation/ganttchart-presentation.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GanttChartPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartPresentationComponent", function() { return GanttChartPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





function GanttChartPresentationComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ganttchart.Name);
} }
function GanttChartPresentationComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
function GanttChartPresentationComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [];
class GanttChartPresentationComponent {
    constructor(ganttchartService, route, router) {
        this.ganttchartService = ganttchartService;
        this.route = route;
        this.router = router;
        // insertion point for declarations
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getGanttChart();
        // observable for changes in 
        this.ganttchartService.GanttChartServiceChanged.subscribe(message => {
            if (message == "update") {
                this.getGanttChart();
            }
        });
    }
    getGanttChart() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.ganttchartService.getGanttChart(id)
            .subscribe(ganttchart => {
            this.ganttchart = ganttchart;
            // insertion point for recovery of durations
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    presentation: [structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    editor: ["ganttchart-detail", ID]
                }
            }]);
    }
}
GanttChartPresentationComponent.ɵfac = function GanttChartPresentationComponent_Factory(t) { return new (t || GanttChartPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_1__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GanttChartPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GanttChartPresentationComponent, selectors: [["app-ganttchart-presentation"]], decls: 9, vars: 4, consts: [[1, "presentation__header", 3, "click"], [1, "material-icons"], ["class", "presentation__table mat-table", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "presentation__table", "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], [1, "mat-row"], [1, "mat-cell"], ["mat-header-row", ""], ["mat-row", ""]], template: function GanttChartPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GanttChartPresentationComponent_Template_div_click_0_listener() { return ctx.setEditorRouterOutlet(ctx.ganttchart.ID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GanttChart's fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GanttChartPresentationComponent_table_5_Template, 11, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GanttChartPresentationComponent_tr_7_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GanttChartPresentationComponent_tr_8_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ganttchart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnQtcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7Ozs7Q0FJQzs7QUFFRDs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImdhbnR0Y2hhcnQtcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PSBQUkVTRU5UQVRJT04gPT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxudGgubWF0LWhlYWRlci1jZWxsLFxudGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcmVzZW50YXRpb25fX2hlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNFOEU4RTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlc2VudGF0aW9uX190YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-split */ "cdP3");
/* harmony import */ var _projects_gonggooglecharts_src_lib_splitter_splitter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/gonggooglecharts/src/lib/splitter/splitter.component */ "Oftp");
/* harmony import */ var _projects_gonggooglechartspecific_src_lib_ganttchart_ganttchart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/gonggooglechartspecific/src/lib/ganttchart/ganttchart.component */ "a46x");




class AppComponent {
    constructor() {
        this.title = 'ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["direction", "horyzontal"], ["size", "50"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "as-split", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "as-split-area", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-gonggooglecharts-splitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "as-split-area", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "lib-ganttchart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], angular_split__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"], _projects_gonggooglecharts_src_lib_splitter_splitter_component__WEBPACK_IMPORTED_MODULE_2__["SplitterComponent"], _projects_gonggooglechartspecific_src_lib_ganttchart_ganttchart_component__WEBPACK_IMPORTED_MODULE_3__["GanttchartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Us/j":
/*!*************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttchart-api.ts ***!
  \*************************************************************/
/*! exports provided: GanttChartAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartAPI", function() { return GanttChartAPI; });
class GanttChartAPI {
}


/***/ }),

/***/ "WjmK":
/*!*****************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttchart.service.ts ***!
  \*****************************************************************/
/*! exports provided: GanttChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartService", function() { return GanttChartService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

/*
 * Behavior subject
 */





class GanttChartService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.GanttChartServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.ganttchartsUrl = 'http://localhost:8080/api/github.com/fullstack-lang/gonggooglecharts/go/v1/ganttcharts';
    }
    /** GET ganttcharts from the server */
    getGanttCharts() {
        return this.http.get(this.ganttchartsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched ganttcharts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getGanttCharts', [])));
    }
    /** GET ganttchart by id. Will 404 if id not found */
    getGanttChart(id) {
        const url = `${this.ganttchartsUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`fetched ganttchart id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`getGanttChart id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new ganttchart to the server */
    postGanttChart(ganttchartAPI) {
        return this.http.post(this.ganttchartsUrl, ganttchartAPI, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newGanttChart) => { }));
    }
    /** DELETE: delete the ganttchartdb from the server */
    deleteGanttChart(ganttchartdb) {
        const id = typeof ganttchartdb === 'number' ? ganttchartdb : ganttchartdb.ID;
        const url = `${this.ganttchartsUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`deleted ganttchartdb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteGanttChart')));
    }
    /** PUT: update the ganttchartdb on the server */
    updateGanttChart(ganttchartdb) {
        const id = typeof ganttchartdb === 'number' ? ganttchartdb : ganttchartdb.ID;
        const url = `${this.ganttchartsUrl}/${id}`;
        // insertion point for reset of reverse pointers (to avoid circular JSON)
        ganttchartdb.Tasks = [];
        return this.http.put(url, ganttchartdb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            this.log(`updated ganttchartdb id=${ganttchartdb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateGanttChart')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    log(message) {
    }
}
GanttChartService.ɵfac = function GanttChartService_Factory(t) { return new (t || GanttChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GanttChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GanttChartService, factory: GanttChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XLRw":
/*!*************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/map-components.ts ***!
  \*************************************************************/
/*! exports provided: MapOfDependencysComponents, MapOfGanttChartsComponents, MapOfRessourcesComponents, MapOfTasksComponents, MapOfComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfDependencysComponents", function() { return MapOfDependencysComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfGanttChartsComponents", function() { return MapOfGanttChartsComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfRessourcesComponents", function() { return MapOfRessourcesComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfTasksComponents", function() { return MapOfTasksComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfComponents", function() { return MapOfComponents; });
/* harmony import */ var _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencys-table/dependencys-table.component */ "/pIw");
/* harmony import */ var _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony import */ var _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ressources-table/ressources-table.component */ "b1k2");
/* harmony import */ var _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks-table/tasks-table.component */ "y650");
// insertion point sub template for components imports 




// insertion point sub template for map of components per struct 
const MapOfDependencysComponents = new Map([["DependencysTableComponent", _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_0__["DependencysTableComponent"]],]);
const MapOfGanttChartsComponents = new Map([["GanttChartsTableComponent", _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_1__["GanttChartsTableComponent"]],]);
const MapOfRessourcesComponents = new Map([["RessourcesTableComponent", _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_2__["RessourcesTableComponent"]],]);
const MapOfTasksComponents = new Map([["TasksTableComponent", _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_3__["TasksTableComponent"]],]);
// map of all ng components of the stacks
const MapOfComponents = new Map([
    // insertion point sub template for map of components 
    ["Dependency", MapOfDependencysComponents],
    ["GanttChart", MapOfGanttChartsComponents],
    ["Ressource", MapOfRessourcesComponents],
    ["Task", MapOfTasksComponents],
]);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var gonggooglecharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gonggooglecharts */ "zMsT");
/* harmony import */ var gonggooglechartspecific__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gonggooglechartspecific */ "ky8n");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ "cdP3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");






// mandatory


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_5__["AngularSplitModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            gonggooglecharts__WEBPACK_IMPORTED_MODULE_3__["GonggooglechartsModule"],
            gonggooglechartspecific__WEBPACK_IMPORTED_MODULE_4__["GonggooglechartspecificModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        angular_split__WEBPACK_IMPORTED_MODULE_5__["AngularSplitModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        gonggooglecharts__WEBPACK_IMPORTED_MODULE_3__["GonggooglechartsModule"],
        gonggooglechartspecific__WEBPACK_IMPORTED_MODULE_4__["GonggooglechartspecificModule"]] }); })();


/***/ }),

/***/ "ZUHL":
/*!************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/sidebar/sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: GongNodeType, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GongNodeType", function() { return GongNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _commitnb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commitnb.service */ "t6MY");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function SidebarComponent_mat_tree_node_1_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_mat_tree_node_1_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.setEditorRouterOutlet(node_r2.name + "-adder"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SidebarComponent_mat_tree_node_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_mat_tree_node_1_mat_icon_5_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.setEditorSpecialRouterOutlet(node_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SidebarComponent_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_mat_tree_node_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const node_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.setTableRouterOutletFromTree(node_r2.name + "s", node_r2.type, node_r2.structName, node_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_mat_tree_node_1_mat_icon_4_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_mat_tree_node_1_mat_icon_5_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", node_r2.name, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r2.level == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r2.level == 2 && node_r2.type == "ONE__ZERO_MANY_ASSOCIATION");
} }
function SidebarComponent_mat_tree_node_2_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_mat_tree_node_2_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const node_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.setEditorRouterOutlet(node_r13.name + "-adder"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SidebarComponent_mat_tree_node_2_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_mat_tree_node_2_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const node_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.setEditorSpecialRouterOutlet(node_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SidebarComponent_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_mat_tree_node_2_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const node_r13 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.setTableRouterOutletFromTree(node_r13.name + "s", node_r13.type, node_r13.structName, node_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_mat_tree_node_2_mat_icon_6_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidebarComponent_mat_tree_node_2_mat_icon_7_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Toggle " + node_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r13) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", node_r13.name, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r13.level == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r13.level == 2 && node_r13.type == "ONE__ZERO_MANY_ASSOCIATION");
} }
/**
 * Types of a GongNode / GongFlatNode
 */
var GongNodeType;
(function (GongNodeType) {
    GongNodeType["STRUCT"] = "STRUCT";
    GongNodeType["INSTANCE"] = "INSTANCE";
    GongNodeType["ONE__ZERO_ONE_ASSOCIATION"] = "ONE__ZERO_ONE_ASSOCIATION";
    GongNodeType["ONE__ZERO_MANY_ASSOCIATION"] = "ONE__ZERO_MANY_ASSOCIATION";
})(GongNodeType || (GongNodeType = {}));
class SidebarComponent {
    constructor(router, frontRepoService, commitNbService, 
    // insertion point for per struct service declaration
    dependencyService, ganttchartService, ressourceService, taskService) {
        this.router = router;
        this.frontRepoService = frontRepoService;
        this.commitNbService = commitNbService;
        this.dependencyService = dependencyService;
        this.ganttchartService = ganttchartService;
        this.ressourceService = ressourceService;
        this.taskService = taskService;
        /**
        * _transformer generated a displayed node from a data node
        *
        * @param node input data noe
        * @param level input level
        *
        * @returns an ExampleFlatNode
        */
        this._transformer = (node, level) => {
            return {
                /**
                * in javascript, The !! ensures the resulting type is a boolean (true or false).
                *
                * !!node.children will evaluate to true is the variable is defined
                */
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
                type: node.type,
                structName: node.structName,
                associatedStructName: node.associatedStructName,
                id: node.id,
                uniqueIdPerStack: node.uniqueIdPerStack,
            };
        };
        /**
         * treeControl is passed as the paramter treeControl in the "mat-tree" selector
         *
         * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
         *
         * Construct with flat tree data node functions getLevel and isExpandable.
        constructor(
          getLevel: (dataNode: T) => number,
          isExpandable: (dataNode: T) => boolean,
          options?: FlatTreeControlOptions<T, K> | undefined);
         */
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](node => node.level, node => node.expandable);
        /**
         * from mat-tree documentation
         *
         * Tree flattener to convert a normal type of node to node with children & level information.
         */
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        /**
         * data is the other paramter to the "mat-tree" selector
         *
         * strangely, the dataSource declaration has to follow the treeFlattener declaration
         */
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        /**
         * hasChild is used by the selector for expandable nodes
         *
         *  <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding>
         *
         * @param _
         * @param node
         */
        this.hasChild = (_, node) => node.expandable;
        // "data" tree that is constructed during NgInit and is passed to the mat-tree component
        this.gongNodeTree = new Array();
    }
    ngOnInit() {
        this.refresh();
        // insertion point for per struct observable for refresh trigger
        // observable for changes in structs
        this.dependencyService.DependencyServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.refresh();
            }
        });
        // observable for changes in structs
        this.ganttchartService.GanttChartServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.refresh();
            }
        });
        // observable for changes in structs
        this.ressourceService.RessourceServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.refresh();
            }
        });
        // observable for changes in structs
        this.taskService.TaskServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.refresh();
            }
        });
    }
    refresh() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            // use of a Gödel number to uniquely identfy nodes : 2 * node.id + 3 * node.level
            let memoryOfExpandedNodes = new Map();
            let nonInstanceNodeId = 1;
            if (this.treeControl.dataNodes != undefined) {
                this.treeControl.dataNodes.forEach(node => {
                    if (this.treeControl.isExpanded(node)) {
                        memoryOfExpandedNodes[node.uniqueIdPerStack] = true;
                    }
                    else {
                        memoryOfExpandedNodes[node.uniqueIdPerStack] = false;
                    }
                });
            }
            this.gongNodeTree = new Array();
            // insertion point for per struct tree construction
            /**
            * fill up the Dependency part of the mat tree
            */
            let dependencyGongNodeStruct = {
                name: "Dependency",
                type: GongNodeType.STRUCT,
                id: 0,
                uniqueIdPerStack: 13 * nonInstanceNodeId,
                structName: "Dependency",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(dependencyGongNodeStruct);
            this.frontRepo.Dependencys_array.forEach(dependencyDB => {
                let dependencyGongNodeInstance = {
                    name: dependencyDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: dependencyDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getDependencyUniqueID"])(dependencyDB.ID),
                    structName: "Dependency",
                    associatedStructName: "",
                    children: new Array()
                };
                dependencyGongNodeStruct.children.push(dependencyGongNodeInstance);
                // insertion point for per field code
                /**
                * let append a node for the association Task
                */
                let TaskGongNodeAssociation = {
                    name: "(Task) Task",
                    type: GongNodeType.ONE__ZERO_ONE_ASSOCIATION,
                    id: dependencyDB.ID,
                    uniqueIdPerStack: 17 * nonInstanceNodeId,
                    structName: "Dependency",
                    associatedStructName: "",
                    children: new Array()
                };
                nonInstanceNodeId = nonInstanceNodeId + 1;
                dependencyGongNodeInstance.children.push(TaskGongNodeAssociation);
                /**
                  * let append a node for the instance behind the asssociation Task
                  */
                if (dependencyDB.Task != undefined) {
                    let dependencyGongNodeInstance_Task = {
                        name: dependencyDB.Task.Name,
                        type: GongNodeType.INSTANCE,
                        id: dependencyDB.Task.ID,
                        uniqueIdPerStack: // godel numbering (thank you kurt)
                        3 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getDependencyUniqueID"])(dependencyDB.ID)
                            + 5 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getTaskUniqueID"])(dependencyDB.Task.ID),
                        structName: "Task",
                        associatedStructName: "",
                        children: new Array()
                    };
                    TaskGongNodeAssociation.children.push(dependencyGongNodeInstance_Task);
                }
            });
            /**
            * fill up the GanttChart part of the mat tree
            */
            let ganttchartGongNodeStruct = {
                name: "GanttChart",
                type: GongNodeType.STRUCT,
                id: 0,
                uniqueIdPerStack: 13 * nonInstanceNodeId,
                structName: "GanttChart",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(ganttchartGongNodeStruct);
            this.frontRepo.GanttCharts_array.forEach(ganttchartDB => {
                var _a;
                let ganttchartGongNodeInstance = {
                    name: ganttchartDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: ganttchartDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getGanttChartUniqueID"])(ganttchartDB.ID),
                    structName: "GanttChart",
                    associatedStructName: "",
                    children: new Array()
                };
                ganttchartGongNodeStruct.children.push(ganttchartGongNodeInstance);
                // insertion point for per field code
                /**
                * let append a node for the slide of pointer Tasks
                */
                let TasksGongNodeAssociation = {
                    name: "(Task) Tasks",
                    type: GongNodeType.ONE__ZERO_MANY_ASSOCIATION,
                    id: ganttchartDB.ID,
                    uniqueIdPerStack: 19 * nonInstanceNodeId,
                    structName: "GanttChart",
                    associatedStructName: "Task",
                    children: new Array()
                };
                nonInstanceNodeId = nonInstanceNodeId + 1;
                ganttchartGongNodeInstance.children.push(TasksGongNodeAssociation);
                (_a = ganttchartDB.Tasks) === null || _a === void 0 ? void 0 : _a.forEach(taskDB => {
                    let taskNode = {
                        name: taskDB.Name,
                        type: GongNodeType.INSTANCE,
                        id: taskDB.ID,
                        uniqueIdPerStack: // godel numbering (thank you kurt)
                        7 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getGanttChartUniqueID"])(ganttchartDB.ID)
                            + 11 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getTaskUniqueID"])(taskDB.ID),
                        structName: "Task",
                        associatedStructName: "",
                        children: new Array()
                    };
                    TasksGongNodeAssociation.children.push(taskNode);
                });
            });
            /**
            * fill up the Ressource part of the mat tree
            */
            let ressourceGongNodeStruct = {
                name: "Ressource",
                type: GongNodeType.STRUCT,
                id: 0,
                uniqueIdPerStack: 13 * nonInstanceNodeId,
                structName: "Ressource",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(ressourceGongNodeStruct);
            this.frontRepo.Ressources_array.forEach(ressourceDB => {
                let ressourceGongNodeInstance = {
                    name: ressourceDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: ressourceDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getRessourceUniqueID"])(ressourceDB.ID),
                    structName: "Ressource",
                    associatedStructName: "",
                    children: new Array()
                };
                ressourceGongNodeStruct.children.push(ressourceGongNodeInstance);
                // insertion point for per field code
            });
            /**
            * fill up the Task part of the mat tree
            */
            let taskGongNodeStruct = {
                name: "Task",
                type: GongNodeType.STRUCT,
                id: 0,
                uniqueIdPerStack: 13 * nonInstanceNodeId,
                structName: "Task",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(taskGongNodeStruct);
            this.frontRepo.Tasks_array.forEach(taskDB => {
                var _a;
                let taskGongNodeInstance = {
                    name: taskDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: taskDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getTaskUniqueID"])(taskDB.ID),
                    structName: "Task",
                    associatedStructName: "",
                    children: new Array()
                };
                taskGongNodeStruct.children.push(taskGongNodeInstance);
                // insertion point for per field code
                /**
                * let append a node for the association Ressource
                */
                let RessourceGongNodeAssociation = {
                    name: "(Ressource) Ressource",
                    type: GongNodeType.ONE__ZERO_ONE_ASSOCIATION,
                    id: taskDB.ID,
                    uniqueIdPerStack: 17 * nonInstanceNodeId,
                    structName: "Task",
                    associatedStructName: "",
                    children: new Array()
                };
                nonInstanceNodeId = nonInstanceNodeId + 1;
                taskGongNodeInstance.children.push(RessourceGongNodeAssociation);
                /**
                  * let append a node for the instance behind the asssociation Ressource
                  */
                if (taskDB.Ressource != undefined) {
                    let taskGongNodeInstance_Ressource = {
                        name: taskDB.Ressource.Name,
                        type: GongNodeType.INSTANCE,
                        id: taskDB.Ressource.ID,
                        uniqueIdPerStack: // godel numbering (thank you kurt)
                        3 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getTaskUniqueID"])(taskDB.ID)
                            + 5 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getRessourceUniqueID"])(taskDB.Ressource.ID),
                        structName: "Ressource",
                        associatedStructName: "",
                        children: new Array()
                    };
                    RessourceGongNodeAssociation.children.push(taskGongNodeInstance_Ressource);
                }
                /**
                * let append a node for the slide of pointer Dependencies
                */
                let DependenciesGongNodeAssociation = {
                    name: "(Dependency) Dependencies",
                    type: GongNodeType.ONE__ZERO_MANY_ASSOCIATION,
                    id: taskDB.ID,
                    uniqueIdPerStack: 19 * nonInstanceNodeId,
                    structName: "Task",
                    associatedStructName: "Dependency",
                    children: new Array()
                };
                nonInstanceNodeId = nonInstanceNodeId + 1;
                taskGongNodeInstance.children.push(DependenciesGongNodeAssociation);
                (_a = taskDB.Dependencies) === null || _a === void 0 ? void 0 : _a.forEach(dependencyDB => {
                    let dependencyNode = {
                        name: dependencyDB.Name,
                        type: GongNodeType.INSTANCE,
                        id: dependencyDB.ID,
                        uniqueIdPerStack: // godel numbering (thank you kurt)
                        7 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getTaskUniqueID"])(taskDB.ID)
                            + 11 * Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getDependencyUniqueID"])(dependencyDB.ID),
                        structName: "Dependency",
                        associatedStructName: "",
                        children: new Array()
                    };
                    DependenciesGongNodeAssociation.children.push(dependencyNode);
                });
            });
            this.dataSource.data = this.gongNodeTree;
            // expand nodes that were exapanded before
            if (this.treeControl.dataNodes != undefined) {
                this.treeControl.dataNodes.forEach(node => {
                    if (memoryOfExpandedNodes[node.uniqueIdPerStack] != undefined) {
                        if (memoryOfExpandedNodes[node.uniqueIdPerStack]) {
                            this.treeControl.expand(node);
                        }
                    }
                });
            }
        });
        // fetch the number of commits
        this.commitNbService.getCommitNb().subscribe(commitNb => {
            this.commitNb = commitNb;
        });
    }
    /**
     *
     * @param path for the outlet selection
     */
    setTableRouterOutlet(path) {
        this.router.navigate([{
                outlets: {
                    table: [path]
                }
            }]);
    }
    /**
     *
     * @param path for the outlet selection
     */
    setTableRouterOutletFromTree(path, type, structName, id) {
        if (type == GongNodeType.STRUCT) {
            this.router.navigate([{
                    outlets: {
                        table: [path.toLowerCase()]
                    }
                }]);
        }
        if (type == GongNodeType.INSTANCE) {
            this.router.navigate([{
                    outlets: {
                        presentation: [structName.toLowerCase() + "-presentation", id]
                    }
                }]);
        }
    }
    setEditorRouterOutlet(path) {
        this.router.navigate([{
                outlets: {
                    editor: [path.toLowerCase()]
                }
            }]);
    }
    setEditorSpecialRouterOutlet(node) {
        console.log("setEditorSpecialRouterOutlet " + node);
        this.router.navigate([{
                outlets: {
                    editor: [node.associatedStructName.toLowerCase() + "-adder", node.id, node.structName + "_" + node.name]
                }
            }]);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commitnb_service__WEBPACK_IMPORTED_MODULE_5__["CommitNbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_6__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_7__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_8__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-gonggooglecharts-sidebar"]], decls: 5, vars: 4, consts: [[3, "dataSource", "treeControl"], ["class", "node-link", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["class", "node-link", "matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", "", 1, "node-link"], ["mat-icon-button", "", "disabled", ""], [3, "click"], ["class", "node-link-icon", 3, "click", 4, "ngIf"], [1, "node-link-icon", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_mat_tree_node_1_Template, 6, 3, "mat-tree-node", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_mat_tree_node_2_Template, 8, 5, "mat-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0\u00A0Nb commits:\u00A0 \u00A0\u00A0", ctx.commitNb, "");
    } }, directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNodeToggle"]], styles: [".node-link[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n.node-link-icon[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuPT09PT09PT09PT09PT09PT09PVxuPT09PT0gU0lERUJBUiA9PT09PVxuPT09PT09PT09PT09PT09PT09PVxuKi9cblxuLm5vZGUtbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub2RlLWxpbmstaWNvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "a46x":
/*!*************************************************************************************!*\
  !*** ./projects/gonggooglechartspecific/src/lib/ganttchart/ganttchart.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GanttchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttchartComponent", function() { return GanttchartComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gonggooglecharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gonggooglecharts */ "zMsT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["chart"];
function GanttchartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "google-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ready", function GanttchartComponent_div_0_Template_google_chart_ready_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onReady(); })("select", function GanttchartComponent_div_0_Template_google_chart_select_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onSelect($event); })("error", function GanttchartComponent_div_0_Template_google_chart_error_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onError($event); })("mouseenter", function GanttchartComponent_div_0_Template_google_chart_mouseenter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onMouseEnter($event); })("mouseleave", function GanttchartComponent_div_0_Template_google_chart_mouseleave_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onMouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chart_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", chart_r1.title)("type", chart_r1.type)("data", chart_r1.data)("columns", chart_r1.columns)("options", chart_r1.options);
} }
function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}
class GoogleGanttChart {
}
class GoogleGanttTask {
}
class GanttchartComponent {
    constructor(gonggooglechartFrontRepoService, gonggooglechartCommitNbService) {
        this.gonggooglechartFrontRepoService = gonggooglechartFrontRepoService;
        this.gonggooglechartCommitNbService = gonggooglechartCommitNbService;
        /**
       * the component is refreshed when modification are performed in the back repo
       *
       * the checkCommitNbTimer polls the commit number of the back repo
       * if the commit number has increased, it pulls the front repo and redraw the diagram
       */
        this.checkGongdocCommitNbTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500, 500);
        this.lastCommitNb = -1;
        this.charts = [];
    }
    ngOnInit() {
        this.checkGongdocCommitNbTimer.subscribe(currTime => {
            this.currTime = currTime;
            // see above for the explanation
            this.gonggooglechartCommitNbService.getCommitNb().subscribe(commitNb => {
                if (this.lastCommitNb < commitNb) {
                    console.log("last commit nb " + this.lastCommitNb + " new: " + commitNb);
                    this.refresh();
                    this.lastCommitNb = commitNb;
                }
            });
        });
    }
    refresh() {
        this.charts = [];
        this.gonggooglechartFrontRepoService.pull().subscribe(gonggooglechartsFrontRepo => {
            this.gonggooglechartFrontRepo = gonggooglechartsFrontRepo;
            this.gonggooglechartFrontRepo.GanttCharts_array.forEach(ganttChart => {
                let ganttTargetChart = new GoogleGanttChart();
                ganttTargetChart.title = ganttChart.Name;
                ganttTargetChart.type = angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Gantt;
                ganttTargetChart.columns = [
                    'Task ID',
                    'Task Name',
                    'Resource',
                    'Start Date',
                    'End Date',
                    'Duration',
                    'Percent Complete',
                    'Dependencies'
                ];
                ganttTargetChart.data = [
                //   ['Research', 'Identify a gant js framework', null,
                //     new Date(2015, 0, 1), new Date(2015, 0, 30), daysToMilliseconds(3), 1, null],
                ];
                ganttChart.Tasks.forEach(task => {
                    var _a, _b, _c;
                    console.log(task.Name + " start at " + task.Start + " with ressource " + ((_a = task.Ressource) === null || _a === void 0 ? void 0 : _a.Name));
                    let start = new Date(task.Start);
                    // console.log("start " + start.getFullYear() + " " + start.getMonth() + " " + start.getDay())
                    let end = new Date(task.End);
                    // console.log("end " + end.getFullYear() + " " + end.getMonth() + " " + end.getDay())
                    // see https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format
                    let googleGanttTask = new (GoogleGanttTask);
                    googleGanttTask.Task_ID = task.Name;
                    googleGanttTask.Task_Name = task.DisplayedName;
                    googleGanttTask.Resource = (_b = task.Ressource) === null || _b === void 0 ? void 0 : _b.Name;
                    googleGanttTask.Start = new Date(start.getFullYear(), start.getMonth(), start.getDay());
                    googleGanttTask.End = new Date(end.getFullYear(), end.getMonth(), end.getDay());
                    googleGanttTask.Duration = daysToMilliseconds(0);
                    googleGanttTask.PercentComplete = task.PercentComplete;
                    // googleGanttTask.Dependencies = task.Dependencies?.Name
                    let dependencies = "";
                    let index = 0;
                    if (task.Dependencies) {
                        for (let dependency of task.Dependencies) {
                            // dependencies are separated by ','
                            if (index++ > 0 && dependency.Task) {
                                dependencies += ',';
                            }
                            dependencies += (_c = dependency.Task) === null || _c === void 0 ? void 0 : _c.Name;
                        }
                    }
                    googleGanttTask.Dependencies = dependencies;
                    ganttTargetChart.data.push([googleGanttTask.Task_ID,
                        googleGanttTask.Task_Name,
                        googleGanttTask.Resource,
                        googleGanttTask.Start,
                        googleGanttTask.End,
                        googleGanttTask.Duration,
                        googleGanttTask.PercentComplete,
                        googleGanttTask.Dependencies]);
                    // specify that task have not to be ordered
                    ganttTargetChart.options = {
                        gantt: {
                            sortTasks: false,
                        },
                    };
                });
                this.charts.push(ganttTargetChart);
            });
        });
    }
}
GanttchartComponent.ɵfac = function GanttchartComponent_Factory(t) { return new (t || GanttchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](gonggooglecharts__WEBPACK_IMPORTED_MODULE_3__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](gonggooglecharts__WEBPACK_IMPORTED_MODULE_3__["CommitNbService"])); };
GanttchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GanttchartComponent, selectors: [["lib-ganttchart"]], viewQuery: function GanttchartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 4, vars: 2, consts: [[4, "ngFor", "ngForOf"], [1, "commit"], ["width", "600", "height", "600", 3, "title", "type", "data", "columns", "options", "ready", "select", "error", "mouseenter", "mouseleave"]], template: function GanttchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GanttchartComponent_div_0_Template, 2, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.charts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Gantt chart ", ctx.lastCommitNb, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], styles: ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:not(h1) { display: inline-block !important; }\n\n.commit[_ngcontent-%COMP%] { float:right }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0IsZ0NBQWdDLEVBQUU7O0FBRXRELFVBQVUsWUFBWSIsImZpbGUiOiJnYW50dGNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+ICo6bm90KGgxKSB7IGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XG5cbi5jb21taXQgeyBmbG9hdDpyaWdodCB9Il19 */"] });


/***/ }),

/***/ "ayko":
/*!*****************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependency.service.ts ***!
  \*****************************************************************/
/*! exports provided: DependencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyService", function() { return DependencyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

/*
 * Behavior subject
 */





class DependencyService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.DependencyServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.dependencysUrl = 'http://localhost:8080/api/github.com/fullstack-lang/gonggooglecharts/go/v1/dependencys';
    }
    /** GET dependencys from the server */
    getDependencys() {
        return this.http.get(this.dependencysUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched dependencys')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getDependencys', [])));
    }
    /** GET dependency by id. Will 404 if id not found */
    getDependency(id) {
        const url = `${this.dependencysUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`fetched dependency id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`getDependency id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new dependency to the server */
    postDependency(dependencyAPI) {
        return this.http.post(this.dependencysUrl, dependencyAPI, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newDependency) => { }));
    }
    /** DELETE: delete the dependencydb from the server */
    deleteDependency(dependencydb) {
        const id = typeof dependencydb === 'number' ? dependencydb : dependencydb.ID;
        const url = `${this.dependencysUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`deleted dependencydb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteDependency')));
    }
    /** PUT: update the dependencydb on the server */
    updateDependency(dependencydb) {
        const id = typeof dependencydb === 'number' ? dependencydb : dependencydb.ID;
        const url = `${this.dependencysUrl}/${id}`;
        // insertion point for reset of reverse pointers (to avoid circular JSON)
        dependencydb.Task = {};
        let _Task_Dependencies_reverse = dependencydb.Task_Dependencies_reverse;
        dependencydb.Task_Dependencies_reverse = {};
        return this.http.put(url, dependencydb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            dependencydb.Task_Dependencies_reverse = _Task_Dependencies_reverse;
            this.log(`updated dependencydb id=${dependencydb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateDependency')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    log(message) {
    }
}
DependencyService.ɵfac = function DependencyService_Factory(t) { return new (t || DependencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DependencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DependencyService, factory: DependencyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "b1k2":
/*!******************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressources-table/ressources-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RessourcesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourcesTableComponent", function() { return RessourcesTableComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function RessourcesTableComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RessourcesTableComponent_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r14.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
} }
function RessourcesTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function RessourcesTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const row_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r18.selection.toggle(row_r16) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r16));
} }
function RessourcesTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Ressource_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Ressource_r20.Name, " ");
} }
function RessourcesTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Ressource_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Ressource_r21.ID, " ");
} }
function RessourcesTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function RessourcesTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesTableComponent_td_13_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ressource_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.setEditorRouterOutlet(ressource_r22.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function RessourcesTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesTableComponent_td_16_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ressource_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.deleteRessource(ressource_r26.ID, ressource_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function RessourcesTableComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 17);
} }
function RessourcesTableComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesTableComponent_tr_18_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const row_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.setPresentationRouterOutlet(row_r30.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesTableComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const allowMultiSelect = true;
// generated table component
class RessourcesTableComponent {
    constructor(ressourceService, frontRepoService, 
    // not null if the component is called as a selection component of ressource instances
    dialogRef, dialogData, router) {
        this.ressourceService = ressourceService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        this.initialSelection = new Array();
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        // observable for changes in structs
        this.ressourceService.RessourceServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getRessources();
            }
        });
        if (dialogData == undefined) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngOnInit() {
        this.getRessources();
    }
    getRessources() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo pull returned");
            this.ressources = this.frontRepo.Ressources_array;
            // insertion point for variables Recoveries
            // in case the component is called as a selection component
            if (this.dialogData != undefined) {
                this.ressources.forEach(ressource => {
                    let ID = this.dialogData.ID;
                    let revPointer = ressource[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(ressource);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
        });
    }
    // newRessource initiate a new ressource
    // create a new Ressource objet
    newRessource() {
    }
    deleteRessource(ressourceID, ressource) {
        // list of ressources is truncated of ressource before the delete
        this.ressources = this.ressources.filter(h => h !== ressource);
        this.ressourceService.deleteRessource(ressourceID).subscribe(ressource => {
            this.ressourceService.RessourceServiceChanged.next("delete");
            console.log("ressource deleted");
        });
    }
    editRessource(ressourceID, ressource) {
    }
    // display ressource in router
    displayRessourceInRouter(ressourceID) {
        this.router.navigate(["ressource-display", ressourceID]);
    }
    // set editor outlet
    setEditorRouterOutlet(ressourceID) {
        this.router.navigate([{
                outlets: {
                    editor: ["ressource-detail", ressourceID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(ressourceID) {
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
        let toUpdate = new Set();
        // reset all initial selection of ressource that belong to ressource through Anarrayofb
        this.initialSelection.forEach(ressource => {
            ressource[this.dialogData.ReversePointer].Int64 = 0;
            ressource[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(ressource);
        });
        // from selection, set ressource that belong to ressource through Anarrayofb
        this.selection.selected.forEach(ressource => {
            console.log("selection ID " + ressource.ID);
            let ID = +this.dialogData.ID;
            ressource[this.dialogData.ReversePointer].Int64 = ID;
            ressource[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(ressource);
        });
        // update all ressource (only update selection & initial selection)
        toUpdate.forEach(ressource => {
            this.ressourceService.updateRessource(ressource)
                .subscribe(ressource => {
                this.ressourceService.RessourceServiceChanged.next("update");
                console.log("ressource saved");
            });
        });
        this.dialogRef.close('Pizza!');
    }
}
RessourcesTableComponent.ɵfac = function RessourcesTableComponent_Factory(t) { return new (t || RessourcesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_3__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RessourcesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RessourcesTableComponent, selectors: [["app-ressources-table"]], decls: 20, vars: 6, consts: [[4, "ngIf"], ["mat-table", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function RessourcesTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RessourcesTableComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RessourcesTableComponent_th_3_Template, 2, 2, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RessourcesTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RessourcesTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RessourcesTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RessourcesTableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RessourcesTableComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RessourcesTableComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RessourcesTableComponent_td_13_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RessourcesTableComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RessourcesTableComponent_td_16_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RessourcesTableComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RessourcesTableComponent_tr_18_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RessourcesTableComponent_button_19_Template, 2, 0, "button", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.ressources);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZXMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsbUNBQW1DOztBQUNuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7OztDQUlDOztBQUNEO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUEsZ0RBQWdEOztBQUNoRDtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJyZXNzb3VyY2VzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cbioge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuPT09PT09PT09PT09PT09PT1cbj09PT09IFRBQkxFID09PT09XG49PT09PT09PT09PT09PT09PVxuKi9cbi50YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLnRhYmxlX19zYXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZSAubWF0LXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFNwYWNlIGJldHdlZW4gY29sdW1ucyBpbiB0aGUgbWF0ZXJpYWwgdGFibGUgKi9cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreS1ib3JkZXItZWxlbS1sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufSJdfQ== */"] });


/***/ }),

/***/ "dPgB":
/*!***********************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressource-db.ts ***!
  \***********************************************************/
/*! exports provided: RessourceDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceDB", function() { return RessourceDB; });
// insertion point for imports
class RessourceDB {
}


/***/ }),

/***/ "k2dw":
/*!********************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/task-detail/task-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _task_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-db */ "vOkD");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















function TaskDetailComponent_div_0_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ressource_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ressource_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ressource_r3.Name, " ");
} }
function TaskDetailComponent_div_0_mat_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganttchart_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ganttchart_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ganttchart_r4.Name, " ");
} }
const _c0 = function () { return { standalone: true }; };
function TaskDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.task.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "DisplayedName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.task.DisplayedName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_mat_select_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.task.Ressource = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TaskDetailComponent_div_0_mat_option_22_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.task.Start = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.task.End = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-grid-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Duration Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.Duration_Hours = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Duration Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.Duration_Minutes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Duration Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.Duration_Seconds = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "PercentComplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.task.PercentComplete = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_div_0_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.openReverseSelection("Dependency", "Task_DependenciesDBID"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Dependencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_69_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.task.Rank = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "<- Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_div_0_Template_mat_select_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.task.GanttChart_Tasks_reverse = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, TaskDetailComponent_div_0_mat_option_77_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_div_0_Template_button_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Save task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](22, _c0))("ngModel", ctx_r0.task.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](23, _c0))("ngModel", ctx_r0.task.DisplayedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.task.Ressource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.Ressources_array);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c0))("ngModel", ctx_r0.task.Start);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c0))("ngModel", ctx_r0.task.End);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c0))("ngModel", ctx_r0.Duration_Hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c0))("ngModel", ctx_r0.Duration_Minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c0))("ngModel", ctx_r0.Duration_Seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c0))("ngModel", ctx_r0.task.PercentComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c0))("ngModel", ctx_r0.task.Rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.task.GanttChart_Tasks_reverse);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.GanttCharts_array);
} }
class TaskDetailComponent {
    constructor(taskService, frontRepoService, dialog, route, router) {
        this.taskService = taskService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getTask();
        // observable for changes in structs
        this.taskService.TaskServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getTask();
            }
        });
        // insertion point for initialisation of enums list
    }
    getTask() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo TaskPull returned");
            if (id != 0 && association == undefined) {
                this.task = frontRepo.Tasks.get(id);
            }
            else {
                this.task = new (_task_db__WEBPACK_IMPORTED_MODULE_0__["TaskDB"]);
            }
            // insertion point for recovery of form controls value for bool fields
            // computation of Hours, Minutes, Seconds for Duration
            this.Duration_Hours = Math.floor(this.task.Duration / (3600 * 1000 * 1000 * 1000));
            this.Duration_Minutes = Math.floor(this.task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000));
            this.Duration_Seconds = this.task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000);
        });
    }
    save() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        // insertion point for saving value of form controls of boolean fields
        if (this.task.RessourceID == undefined) {
            this.task.RessourceID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"];
        }
        if (this.task.Ressource != undefined) {
            this.task.RessourceID.Int64 = this.task.Ressource.ID;
            this.task.RessourceID.Valid = true;
            this.task.RessourceName = this.task.Ressource.Name;
        }
        else {
            this.task.RessourceID.Int64 = 0;
            this.task.RessourceID.Valid = true;
            this.task.RessourceName = "";
        }
        this.task.Duration =
            this.Duration_Hours * (3600 * 1000 * 1000 * 1000) +
                this.Duration_Minutes * (60 * 1000 * 1000 * 1000) +
                this.Duration_Seconds * (1000 * 1000 * 1000);
        if (id != 0 && association == undefined) {
            // insertion point for saving value of reverse pointers
            if (this.task.GanttChart_Tasks_reverse != undefined) {
                this.task.GanttChart_TasksDBID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"];
                this.task.GanttChart_TasksDBID.Int64 = this.task.GanttChart_Tasks_reverse.ID;
                this.task.GanttChart_TasksDBID.Valid = true;
                this.task.GanttChart_Tasks_reverse = undefined; // very important, otherwise, circular JSON
            }
            this.taskService.updateTask(this.task)
                .subscribe(task => {
                this.taskService.TaskServiceChanged.next("update");
                console.log("task saved");
            });
        }
        else {
            switch (association) {
                // insertion point for saving value of ONE_MANY association reverse pointer
                case "GanttChart_Tasks":
                    this.task.GanttChart_TasksDBID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"];
                    this.task.GanttChart_TasksDBID.Int64 = id;
                    this.task.GanttChart_TasksDBID.Valid = true;
                    break;
            }
            this.taskService.postTask(this.task).subscribe(task => {
                this.taskService.TaskServiceChanged.next("post");
                this.task = {}; // reset fields
                console.log("task added");
            });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.task.ID,
            ReversePointer: reverseField,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_1__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
TaskDetailComponent.ɵfac = function TaskDetailComponent_Factory(t) { return new (t || TaskDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
TaskDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskDetailComponent, selectors: [["app-task-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], [1, "details__item"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["cols", "3", "rowHeight", "4:1"], [1, "details_hours_width"], ["type", "number", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "details_minutes_width"], [1, "details_seconds_width"], ["mat-raised-button", "", 3, "click"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function TaskDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TaskDetailComponent_div_0_Template, 81, 31, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.details__item[_ngcontent-%COMP%] {\n    padding: 2.5px 5px;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InRhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cbioge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuPT09PT09PT09PT09PT09PT09PVxuPT09PT0gREVUQUlMUyA9PT09PVxuPT09PT09PT09PT09PT09PT09PVxuKi9cbi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV0YWlsc19fdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5kZXRhaWxzX19pdGVtIHtcbiAgICBwYWRkaW5nOiAyLjVweCA1cHg7XG59XG5cbi5kZXRhaWxzX19zYXZlIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5kZXRhaWxzX2hvdXJzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5kZXRhaWxzX21pbnV0ZXNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmRldGFpbHNfc2Vjb25kc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "ky8n":
/*!************************************************************!*\
  !*** ./projects/gonggooglechartspecific/src/public-api.ts ***!
  \************************************************************/
/*! exports provided: GonggooglechartspecificService, GonggooglechartspecificComponent, GonggooglechartspecificModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_gonggooglechartspecific_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/gonggooglechartspecific.service */ "o3bW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartspecificService", function() { return _lib_gonggooglechartspecific_service__WEBPACK_IMPORTED_MODULE_0__["GonggooglechartspecificService"]; });

/* harmony import */ var _lib_gonggooglechartspecific_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/gonggooglechartspecific.component */ "1lI/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartspecificComponent", function() { return _lib_gonggooglechartspecific_component__WEBPACK_IMPORTED_MODULE_1__["GonggooglechartspecificComponent"]; });

/* harmony import */ var _lib_gonggooglechartspecific_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/gonggooglechartspecific.module */ "t3jA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartspecificModule", function() { return _lib_gonggooglechartspecific_module__WEBPACK_IMPORTED_MODULE_2__["GonggooglechartspecificModule"]; });

/*
 * Public API Surface of gonggooglechartspecific
 */





/***/ }),

/***/ "mRAK":
/*!*************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependency-api.ts ***!
  \*************************************************************/
/*! exports provided: DependencyAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyAPI", function() { return DependencyAPI; });
class DependencyAPI {
}


/***/ }),

/***/ "o3bW":
/*!*************************************************************************************!*\
  !*** ./projects/gonggooglechartspecific/src/lib/gonggooglechartspecific.service.ts ***!
  \*************************************************************************************/
/*! exports provided: GonggooglechartspecificService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartspecificService", function() { return GonggooglechartspecificService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GonggooglechartspecificService {
    constructor() { }
}
GonggooglechartspecificService.ɵfac = function GonggooglechartspecificService_Factory(t) { return new (t || GonggooglechartspecificService)(); };
GonggooglechartspecificService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GonggooglechartspecificService, factory: GonggooglechartspecificService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "t3jA":
/*!************************************************************************************!*\
  !*** ./projects/gonggooglechartspecific/src/lib/gonggooglechartspecific.module.ts ***!
  \************************************************************************************/
/*! exports provided: GonggooglechartspecificModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartspecificModule", function() { return GonggooglechartspecificModule; });
/* harmony import */ var _gonggooglechartspecific_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gonggooglechartspecific.component */ "1lI/");
/* harmony import */ var _ganttchart_ganttchart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ganttchart/ganttchart.component */ "a46x");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GonggooglechartspecificModule {
}
GonggooglechartspecificModule.ɵfac = function GonggooglechartspecificModule_Factory(t) { return new (t || GonggooglechartspecificModule)(); };
GonggooglechartspecificModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GonggooglechartspecificModule });
GonggooglechartspecificModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GonggooglechartspecificModule, { declarations: [_gonggooglechartspecific_component__WEBPACK_IMPORTED_MODULE_0__["GonggooglechartspecificComponent"],
        _ganttchart_ganttchart_component__WEBPACK_IMPORTED_MODULE_1__["GanttchartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]], exports: [_gonggooglechartspecific_component__WEBPACK_IMPORTED_MODULE_0__["GonggooglechartspecificComponent"],
        _ganttchart_ganttchart_component__WEBPACK_IMPORTED_MODULE_1__["GanttchartComponent"]] }); })();


/***/ }),

/***/ "t6MY":
/*!***************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/commitnb.service.ts ***!
  \***************************************************************/
/*! exports provided: CommitNbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitNbService", function() { return CommitNbService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CommitNbService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.commitNbUrl = 'http://localhost:8080/api/github.com/fullstack-lang/gonggooglecharts/go/commitnb';
    }
    // observable of the commit nb getter
    getCommitNb() {
        return this.http.get(this.commitNbUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched commit nb')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getCommitNb', -1)));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log('${operation} failed: ${error.message}');
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    log(message) {
    }
}
CommitNbService.ɵfac = function CommitNbService_Factory(t) { return new (t || CommitNbService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CommitNbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommitNbService, factory: CommitNbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tmHK":
/*!********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependency-detail/dependency-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DependencyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyDetailComponent", function() { return DependencyDetailComponent; });
/* harmony import */ var _dependency_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dependency-db */ "GPUy");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function DependencyDetailComponent_div_0_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", task_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r3.Name, " ");
} }
function DependencyDetailComponent_div_0_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", task_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r4.Name, " ");
} }
const _c0 = function () { return { standalone: true }; };
function DependencyDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "dependency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DependencyDetailComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.dependency.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DependencyDetailComponent_div_0_Template_mat_select_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.dependency.Task = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DependencyDetailComponent_div_0_mat_option_16_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "<- Dependencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DependencyDetailComponent_div_0_Template_mat_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.dependency.Task_Dependencies_reverse = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, DependencyDetailComponent_div_0_mat_option_24_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DependencyDetailComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Save dependency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0))("ngModel", ctx_r0.dependency.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.dependency.Task);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.Tasks_array);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.dependency.Task_Dependencies_reverse);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.Tasks_array);
} }
class DependencyDetailComponent {
    constructor(dependencyService, frontRepoService, dialog, route, router) {
        this.dependencyService = dependencyService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getDependency();
        // observable for changes in structs
        this.dependencyService.DependencyServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getDependency();
            }
        });
        // insertion point for initialisation of enums list
    }
    getDependency() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo DependencyPull returned");
            if (id != 0 && association == undefined) {
                this.dependency = frontRepo.Dependencys.get(id);
            }
            else {
                this.dependency = new (_dependency_db__WEBPACK_IMPORTED_MODULE_0__["DependencyDB"]);
            }
            // insertion point for recovery of form controls value for bool fields
        });
    }
    save() {
        const id = +this.route.snapshot.paramMap.get('id');
        const association = this.route.snapshot.paramMap.get('association');
        // insertion point for saving value of form controls of boolean fields
        if (this.dependency.TaskID == undefined) {
            this.dependency.TaskID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"];
        }
        if (this.dependency.Task != undefined) {
            this.dependency.TaskID.Int64 = this.dependency.Task.ID;
            this.dependency.TaskID.Valid = true;
            this.dependency.TaskName = this.dependency.Task.Name;
        }
        else {
            this.dependency.TaskID.Int64 = 0;
            this.dependency.TaskID.Valid = true;
            this.dependency.TaskName = "";
        }
        if (id != 0 && association == undefined) {
            // insertion point for saving value of reverse pointers
            if (this.dependency.Task_Dependencies_reverse != undefined) {
                this.dependency.Task_DependenciesDBID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"];
                this.dependency.Task_DependenciesDBID.Int64 = this.dependency.Task_Dependencies_reverse.ID;
                this.dependency.Task_DependenciesDBID.Valid = true;
                this.dependency.Task_Dependencies_reverse = undefined; // very important, otherwise, circular JSON
            }
            this.dependencyService.updateDependency(this.dependency)
                .subscribe(dependency => {
                this.dependencyService.DependencyServiceChanged.next("update");
                console.log("dependency saved");
            });
        }
        else {
            switch (association) {
                // insertion point for saving value of ONE_MANY association reverse pointer
                case "Task_Dependencies":
                    this.dependency.Task_DependenciesDBID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"];
                    this.dependency.Task_DependenciesDBID.Int64 = id;
                    this.dependency.Task_DependenciesDBID.Valid = true;
                    break;
            }
            this.dependencyService.postDependency(this.dependency).subscribe(dependency => {
                this.dependencyService.DependencyServiceChanged.next("post");
                this.dependency = {}; // reset fields
                console.log("dependency added");
            });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.dependency.ID,
            ReversePointer: reverseField,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_1__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
DependencyDetailComponent.ɵfac = function DependencyDetailComponent_Factory(t) { return new (t || DependencyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_5__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DependencyDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DependencyDetailComponent, selectors: [["app-dependency-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], [1, "details__item"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function DependencyDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DependencyDetailComponent_div_0_Template, 28, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dependency);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.details__item[_ngcontent-%COMP%] {\n    padding: 2.5px 5px;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3ktZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImRlcGVuZGVuY3ktZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cbioge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuPT09PT09PT09PT09PT09PT09PVxuPT09PT0gREVUQUlMUyA9PT09PVxuPT09PT09PT09PT09PT09PT09PVxuKi9cbi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV0YWlsc19fdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5kZXRhaWxzX19pdGVtIHtcbiAgICBwYWRkaW5nOiAyLjVweCA1cHg7XG59XG5cbi5kZXRhaWxzX19zYXZlIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5kZXRhaWxzX2hvdXJzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5kZXRhaWxzX21pbnV0ZXNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmRldGFpbHNfc2Vjb25kc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "vOkD":
/*!******************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/task-db.ts ***!
  \******************************************************/
/*! exports provided: TaskDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDB", function() { return TaskDB; });
class TaskDB {
}


/***/ }),

/***/ "wVj4":
/*!********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttcharts-table/ganttcharts-table.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GanttChartsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartsTableComponent", function() { return GanttChartsTableComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function GanttChartsTableComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ganttchart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function GanttChartsTableComponent_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r14.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
} }
function GanttChartsTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GanttChartsTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function GanttChartsTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const row_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r18.selection.toggle(row_r16) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r16));
} }
function GanttChartsTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const GanttChart_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", GanttChart_r20.Name, " ");
} }
function GanttChartsTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const GanttChart_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", GanttChart_r21.ID, " ");
} }
function GanttChartsTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function GanttChartsTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GanttChartsTableComponent_td_13_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ganttchart_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.setEditorRouterOutlet(ganttchart_r22.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function GanttChartsTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GanttChartsTableComponent_td_16_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ganttchart_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.deleteGanttChart(ganttchart_r26.ID, ganttchart_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function GanttChartsTableComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 17);
} }
function GanttChartsTableComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GanttChartsTableComponent_tr_18_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const row_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.setPresentationRouterOutlet(row_r30.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GanttChartsTableComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const allowMultiSelect = true;
// generated table component
class GanttChartsTableComponent {
    constructor(ganttchartService, frontRepoService, 
    // not null if the component is called as a selection component of ganttchart instances
    dialogRef, dialogData, router) {
        this.ganttchartService = ganttchartService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        this.initialSelection = new Array();
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        // observable for changes in structs
        this.ganttchartService.GanttChartServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getGanttCharts();
            }
        });
        if (dialogData == undefined) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngOnInit() {
        this.getGanttCharts();
    }
    getGanttCharts() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo pull returned");
            this.ganttcharts = this.frontRepo.GanttCharts_array;
            // insertion point for variables Recoveries
            // in case the component is called as a selection component
            if (this.dialogData != undefined) {
                this.ganttcharts.forEach(ganttchart => {
                    let ID = this.dialogData.ID;
                    let revPointer = ganttchart[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(ganttchart);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
        });
    }
    // newGanttChart initiate a new ganttchart
    // create a new GanttChart objet
    newGanttChart() {
    }
    deleteGanttChart(ganttchartID, ganttchart) {
        // list of ganttcharts is truncated of ganttchart before the delete
        this.ganttcharts = this.ganttcharts.filter(h => h !== ganttchart);
        this.ganttchartService.deleteGanttChart(ganttchartID).subscribe(ganttchart => {
            this.ganttchartService.GanttChartServiceChanged.next("delete");
            console.log("ganttchart deleted");
        });
    }
    editGanttChart(ganttchartID, ganttchart) {
    }
    // display ganttchart in router
    displayGanttChartInRouter(ganttchartID) {
        this.router.navigate(["ganttchart-display", ganttchartID]);
    }
    // set editor outlet
    setEditorRouterOutlet(ganttchartID) {
        this.router.navigate([{
                outlets: {
                    editor: ["ganttchart-detail", ganttchartID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(ganttchartID) {
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
        let toUpdate = new Set();
        // reset all initial selection of ganttchart that belong to ganttchart through Anarrayofb
        this.initialSelection.forEach(ganttchart => {
            ganttchart[this.dialogData.ReversePointer].Int64 = 0;
            ganttchart[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(ganttchart);
        });
        // from selection, set ganttchart that belong to ganttchart through Anarrayofb
        this.selection.selected.forEach(ganttchart => {
            console.log("selection ID " + ganttchart.ID);
            let ID = +this.dialogData.ID;
            ganttchart[this.dialogData.ReversePointer].Int64 = ID;
            ganttchart[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(ganttchart);
        });
        // update all ganttchart (only update selection & initial selection)
        toUpdate.forEach(ganttchart => {
            this.ganttchartService.updateGanttChart(ganttchart)
                .subscribe(ganttchart => {
                this.ganttchartService.GanttChartServiceChanged.next("update");
                console.log("ganttchart saved");
            });
        });
        this.dialogRef.close('Pizza!');
    }
}
GanttChartsTableComponent.ɵfac = function GanttChartsTableComponent_Factory(t) { return new (t || GanttChartsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_3__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
GanttChartsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GanttChartsTableComponent, selectors: [["app-ganttcharts-table"]], decls: 20, vars: 6, consts: [[4, "ngIf"], ["mat-table", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function GanttChartsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GanttChartsTableComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, GanttChartsTableComponent_th_3_Template, 2, 2, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, GanttChartsTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, GanttChartsTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, GanttChartsTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, GanttChartsTableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, GanttChartsTableComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, GanttChartsTableComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, GanttChartsTableComponent_td_13_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, GanttChartsTableComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, GanttChartsTableComponent_td_16_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, GanttChartsTableComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, GanttChartsTableComponent_tr_18_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, GanttChartsTableComponent_button_19_Template, 2, 0, "button", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.ganttcharts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnRzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoiZ2FudHRjaGFydHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG49PT09PT09PT09PT09PT09PVxuPT09PT0gVEFCTEUgPT09PT1cbj09PT09PT09PT09PT09PT09XG4qL1xuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zIGluIHRoZSBtYXRlcmlhbCB0YWJsZSAqL1xudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59Il19 */"] });


/***/ }),

/***/ "y650":
/*!********************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/tasks-table/tasks-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: TasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return TasksTableComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function TasksTableComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TasksTableComponent_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r30.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
} }
function TasksTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TasksTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const row_r32 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r34.selection.toggle(row_r32) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r32));
} }
function TasksTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r36.Name, " ");
} }
function TasksTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " DisplayedName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r37.DisplayedName, " ");
} }
function TasksTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ressource ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r38.Ressource ? Task_r38.Ressource.Name : "", " ");
} }
function TasksTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r39.Start, " ");
} }
function TasksTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " End ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r40.End, " ");
} }
function TasksTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r41.Duration_string, " ");
} }
function TasksTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " PercentComplete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r42.PercentComplete.toPrecision(5), " ");
} }
function TasksTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Rank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r43.Rank, " ");
} }
function TasksTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " <-- (GanttChart) Tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r44 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r20.frontRepo.GanttCharts.get(task_r44.GanttChart_TasksDBID.Int64)) == null ? null : tmp_0_0.Name, " ");
} }
function TasksTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Task_r45.ID, " ");
} }
function TasksTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function TasksTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTableComponent_td_37_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const task_r46 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r48.setEditorRouterOutlet(task_r46.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function TasksTableComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTableComponent_td_40_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const task_r50 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.deleteTask(task_r50.ID, task_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function TasksTableComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
} }
function TasksTableComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTableComponent_tr_42_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const row_r54 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r55.setPresentationRouterOutlet(row_r54.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTableComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTableComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r57.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const allowMultiSelect = true;
// generated table component
class TasksTableComponent {
    constructor(taskService, frontRepoService, 
    // not null if the component is called as a selection component of task instances
    dialogRef, dialogData, router) {
        this.taskService = taskService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        this.initialSelection = new Array();
        // https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
        // this is for routerLink on same component when only queryParameter changes
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        // observable for changes in structs
        this.taskService.TaskServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getTasks();
            }
        });
        if (dialogData == undefined) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
                "DisplayedName",
                "Ressource",
                "Start",
                "End",
                "Duration",
                "PercentComplete",
                "Rank",
                "Tasks",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
                "DisplayedName",
                "Ressource",
                "Start",
                "End",
                "Duration",
                "PercentComplete",
                "Rank",
                "Tasks",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngOnInit() {
        this.getTasks();
    }
    getTasks() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            console.log("front repo pull returned");
            this.tasks = this.frontRepo.Tasks_array;
            // insertion point for variables Recoveries
            // compute strings for durations
            for (let task of this.tasks) {
                task.Duration_string =
                    Math.floor(task.Duration / (3600 * 1000 * 1000 * 1000)) + "H " +
                        Math.floor(task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000)) + "M " +
                        task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000) + "S";
            }
            // in case the component is called as a selection component
            if (this.dialogData != undefined) {
                this.tasks.forEach(task => {
                    let ID = this.dialogData.ID;
                    let revPointer = task[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(task);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
        });
    }
    // newTask initiate a new task
    // create a new Task objet
    newTask() {
    }
    deleteTask(taskID, task) {
        // list of tasks is truncated of task before the delete
        this.tasks = this.tasks.filter(h => h !== task);
        this.taskService.deleteTask(taskID).subscribe(task => {
            this.taskService.TaskServiceChanged.next("delete");
            console.log("task deleted");
        });
    }
    editTask(taskID, task) {
    }
    // display task in router
    displayTaskInRouter(taskID) {
        this.router.navigate(["task-display", taskID]);
    }
    // set editor outlet
    setEditorRouterOutlet(taskID) {
        this.router.navigate([{
                outlets: {
                    editor: ["task-detail", taskID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(taskID) {
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
        let toUpdate = new Set();
        // reset all initial selection of task that belong to task through Anarrayofb
        this.initialSelection.forEach(task => {
            task[this.dialogData.ReversePointer].Int64 = 0;
            task[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(task);
        });
        // from selection, set task that belong to task through Anarrayofb
        this.selection.selected.forEach(task => {
            console.log("selection ID " + task.ID);
            let ID = +this.dialogData.ID;
            task[this.dialogData.ReversePointer].Int64 = ID;
            task[this.dialogData.ReversePointer].Valid = true;
            toUpdate.add(task);
        });
        // update all task (only update selection & initial selection)
        toUpdate.forEach(task => {
            this.taskService.updateTask(task)
                .subscribe(task => {
                this.taskService.TaskServiceChanged.next("update");
                console.log("task saved");
            });
        });
        this.dialogRef.close('Pizza!');
    }
}
TasksTableComponent.ɵfac = function TasksTableComponent_Factory(t) { return new (t || TasksTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
TasksTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TasksTableComponent, selectors: [["app-tasks-table"]], decls: 44, vars: 6, consts: [[4, "ngIf"], ["mat-table", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "DisplayedName"], ["matColumnDef", "Ressource"], ["matColumnDef", "Start"], ["matColumnDef", "End"], ["matColumnDef", "Duration"], ["matColumnDef", "PercentComplete"], ["matColumnDef", "Rank"], ["matColumnDef", "Tasks"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function TasksTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TasksTableComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TasksTableComponent_th_3_Template, 2, 2, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TasksTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TasksTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TasksTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TasksTableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TasksTableComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TasksTableComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TasksTableComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TasksTableComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TasksTableComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TasksTableComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TasksTableComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TasksTableComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TasksTableComponent_td_22_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TasksTableComponent_th_24_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TasksTableComponent_td_25_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](26, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TasksTableComponent_th_27_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TasksTableComponent_td_28_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](29, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, TasksTableComponent_th_30_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TasksTableComponent_td_31_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](32, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TasksTableComponent_th_33_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, TasksTableComponent_td_34_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](35, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, TasksTableComponent_th_36_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TasksTableComponent_td_37_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](38, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, TasksTableComponent_th_39_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, TasksTableComponent_td_40_Template, 3, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, TasksTableComponent_tr_41_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, TasksTableComponent_tr_42_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, TasksTableComponent_button_43_Template, 2, 0, "button", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoidGFza3MtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG49PT09PT09PT09PT09PT09PVxuPT09PT0gVEFCTEUgPT09PT1cbj09PT09PT09PT09PT09PT09XG4qL1xuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zIGluIHRoZSBtYXRlcmlhbCB0YWJsZSAqL1xudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59Il19 */"] });


/***/ }),

/***/ "zFDn":
/*!************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttchart-db.ts ***!
  \************************************************************/
/*! exports provided: GanttChartDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartDB", function() { return GanttChartDB; });
class GanttChartDB {
}


/***/ }),

/***/ "zMsT":
/*!*****************************************************!*\
  !*** ./projects/gonggooglecharts/src/public-api.ts ***!
  \*****************************************************/
/*! exports provided: GonggooglechartsModule, SplitterComponent, GongNodeType, SidebarComponent, FrontRepo, FrontRepoSingloton, NullInt64, FrontRepoService, getDependencyUniqueID, getGanttChartUniqueID, getRessourceUniqueID, getTaskUniqueID, CommitNbService, DependencyDetailComponent, DependencyPresentationComponent, DependencysTableComponent, DependencyDB, DependencyAPI, DependencyService, GanttChartDetailComponent, GanttChartPresentationComponent, GanttChartsTableComponent, GanttChartDB, GanttChartAPI, GanttChartService, RessourceDetailComponent, RessourcePresentationComponent, RessourcesTableComponent, RessourceDB, RessourceAPI, RessourceService, TaskDetailComponent, TaskPresentationComponent, TasksTableComponent, TaskDB, TaskAPI, TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_gonggooglecharts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/gonggooglecharts.module */ "JzqT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GonggooglechartsModule", function() { return _lib_gonggooglecharts_module__WEBPACK_IMPORTED_MODULE_0__["GonggooglechartsModule"]; });

/* harmony import */ var _lib_splitter_splitter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/splitter/splitter.component */ "Oftp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitterComponent", function() { return _lib_splitter_splitter_component__WEBPACK_IMPORTED_MODULE_1__["SplitterComponent"]; });

/* harmony import */ var _lib_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/sidebar/sidebar.component */ "ZUHL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GongNodeType", function() { return _lib_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["GongNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _lib_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]; });

/* harmony import */ var _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/front-repo.service */ "Cft9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontRepo", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["FrontRepo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontRepoSingloton", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["FrontRepoSingloton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullInt64", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["NullInt64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontRepoService", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["FrontRepoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDependencyUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getDependencyUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGanttChartUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getGanttChartUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRessourceUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getRessourceUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTaskUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getTaskUniqueID"]; });

/* harmony import */ var _lib_commitnb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/commitnb.service */ "t6MY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommitNbService", function() { return _lib_commitnb_service__WEBPACK_IMPORTED_MODULE_4__["CommitNbService"]; });

/* harmony import */ var _lib_dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/dependency-detail/dependency-detail.component */ "tmHK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyDetailComponent", function() { return _lib_dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_5__["DependencyDetailComponent"]; });

/* harmony import */ var _lib_dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/dependency-presentation/dependency-presentation.component */ "+Yeo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyPresentationComponent", function() { return _lib_dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_6__["DependencyPresentationComponent"]; });

/* harmony import */ var _lib_dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/dependencys-table/dependencys-table.component */ "/pIw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencysTableComponent", function() { return _lib_dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_7__["DependencysTableComponent"]; });

/* harmony import */ var _lib_dependency_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/dependency-db */ "GPUy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyDB", function() { return _lib_dependency_db__WEBPACK_IMPORTED_MODULE_8__["DependencyDB"]; });

/* harmony import */ var _lib_dependency_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/dependency-api */ "mRAK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyAPI", function() { return _lib_dependency_api__WEBPACK_IMPORTED_MODULE_9__["DependencyAPI"]; });

/* harmony import */ var _lib_dependency_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/dependency.service */ "ayko");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyService", function() { return _lib_dependency_service__WEBPACK_IMPORTED_MODULE_10__["DependencyService"]; });

/* harmony import */ var _lib_ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/ganttchart-detail/ganttchart-detail.component */ "Ll9Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartDetailComponent", function() { return _lib_ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_11__["GanttChartDetailComponent"]; });

/* harmony import */ var _lib_ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/ganttchart-presentation/ganttchart-presentation.component */ "PksR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartPresentationComponent", function() { return _lib_ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_12__["GanttChartPresentationComponent"]; });

/* harmony import */ var _lib_ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartsTableComponent", function() { return _lib_ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_13__["GanttChartsTableComponent"]; });

/* harmony import */ var _lib_ganttchart_db__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/ganttchart-db */ "zFDn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartDB", function() { return _lib_ganttchart_db__WEBPACK_IMPORTED_MODULE_14__["GanttChartDB"]; });

/* harmony import */ var _lib_ganttchart_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/ganttchart-api */ "Us/j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartAPI", function() { return _lib_ganttchart_api__WEBPACK_IMPORTED_MODULE_15__["GanttChartAPI"]; });

/* harmony import */ var _lib_ganttchart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/ganttchart.service */ "WjmK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartService", function() { return _lib_ganttchart_service__WEBPACK_IMPORTED_MODULE_16__["GanttChartService"]; });

/* harmony import */ var _lib_ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/ressource-detail/ressource-detail.component */ "I2i6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceDetailComponent", function() { return _lib_ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_17__["RessourceDetailComponent"]; });

/* harmony import */ var _lib_ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/ressource-presentation/ressource-presentation.component */ "Oa77");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourcePresentationComponent", function() { return _lib_ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_18__["RessourcePresentationComponent"]; });

/* harmony import */ var _lib_ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/ressources-table/ressources-table.component */ "b1k2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourcesTableComponent", function() { return _lib_ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_19__["RessourcesTableComponent"]; });

/* harmony import */ var _lib_ressource_db__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/ressource-db */ "dPgB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceDB", function() { return _lib_ressource_db__WEBPACK_IMPORTED_MODULE_20__["RessourceDB"]; });

/* harmony import */ var _lib_ressource_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/ressource-api */ "6Tml");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceAPI", function() { return _lib_ressource_api__WEBPACK_IMPORTED_MODULE_21__["RessourceAPI"]; });

/* harmony import */ var _lib_ressource_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/ressource.service */ "Os04");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceService", function() { return _lib_ressource_service__WEBPACK_IMPORTED_MODULE_22__["RessourceService"]; });

/* harmony import */ var _lib_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/task-detail/task-detail.component */ "k2dw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return _lib_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_23__["TaskDetailComponent"]; });

/* harmony import */ var _lib_task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/task-presentation/task-presentation.component */ "7rAC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskPresentationComponent", function() { return _lib_task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_24__["TaskPresentationComponent"]; });

/* harmony import */ var _lib_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/tasks-table/tasks-table.component */ "y650");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return _lib_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_25__["TasksTableComponent"]; });

/* harmony import */ var _lib_task_db__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/task-db */ "vOkD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskDB", function() { return _lib_task_db__WEBPACK_IMPORTED_MODULE_26__["TaskDB"]; });

/* harmony import */ var _lib_task_api__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/task-api */ "Lm/0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskAPI", function() { return _lib_task_api__WEBPACK_IMPORTED_MODULE_27__["TaskAPI"]; });

/* harmony import */ var _lib_task_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/task.service */ "BBzA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return _lib_task_service__WEBPACK_IMPORTED_MODULE_28__["TaskService"]; });

// generated from ng_file_public_api_ts.go
/*
* Public API Surface of gonggooglecharts
*/































/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map