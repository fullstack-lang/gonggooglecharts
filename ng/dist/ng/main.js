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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dependency.Task ? ctx_r0.dependency.Task.Name : "");
} }
function DependencyPresentationComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
function DependencyPresentationComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [];
class DependencyPresentationComponent {
    constructor(dependencyService, frontRepoService, route, router) {
        this.dependencyService = dependencyService;
        this.frontRepoService = frontRepoService;
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.dependency = this.frontRepo.Dependencys.get(id);
            // insertion point for recovery of durations
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "dependency-detail", ID]
                }
            }]);
    }
}
DependencyPresentationComponent.ɵfac = function DependencyPresentationComponent_Factory(t) { return new (t || DependencyPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_1__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3ktcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7Ozs7Q0FJQzs7QUFFRDs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImRlcGVuZGVuY3ktcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PSBQUkVTRU5UQVRJT04gPT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxudGgubWF0LWhlYWRlci1jZWxsLFxudGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcmVzZW50YXRpb25fX2hlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNFOEU4RTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlc2VudGF0aW9uX190YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _dependency_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dependency-db */ "GPUy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




















function DependencysTableComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "dependency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DependencysTableComponent_th_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r20.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
} }
function DependencysTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DependencysTableComponent_td_10_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function DependencysTableComponent_td_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const row_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r24.selection.toggle(row_r22) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r22));
} }
function DependencysTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Dependency_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Dependency_r26.Name, " ");
} }
function DependencysTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Dependency_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Dependency_r27.Task ? Dependency_r27.Task.Name : "", " ");
} }
function DependencysTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " <-- (Task) Dependencies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dependency_r28 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r9.frontRepo.Tasks.get(dependency_r28.Task_DependenciesDBID.Int64)) == null ? null : tmp_0_0.Name, " ");
} }
function DependencysTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Dependency_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Dependency_r29.ID, " ");
} }
function DependencysTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function DependencysTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DependencysTableComponent_td_25_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const dependency_r30 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.setEditorRouterOutlet(dependency_r30.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function DependencysTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DependencysTableComponent_td_28_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const dependency_r34 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r36.deleteDependency(dependency_r34.ID, dependency_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function DependencysTableComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 25);
} }
function DependencysTableComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DependencysTableComponent_tr_30_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const row_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r39.setPresentationRouterOutlet(row_r38.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DependencysTableComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
function DependencysTableComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DependencysTableComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r41.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [10, 20, 50, 100, 500, 1000]; };
const allowMultiSelect = true;
// TableComponent is initilizaed from different routes
// TableComponentMode detail different cases 
var TableComponentMode;
(function (TableComponentMode) {
    TableComponentMode[TableComponentMode["DISPLAY_MODE"] = 0] = "DISPLAY_MODE";
    TableComponentMode[TableComponentMode["ONE_MANY_ASSOCIATION_MODE"] = 1] = "ONE_MANY_ASSOCIATION_MODE";
    TableComponentMode[TableComponentMode["MANY_MANY_ASSOCIATION_MODE"] = 2] = "MANY_MANY_ASSOCIATION_MODE";
})(TableComponentMode || (TableComponentMode = {}));
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
        // compute mode
        if (dialogData == undefined) {
            this.mode = TableComponentMode.DISPLAY_MODE;
        }
        else {
            switch (dialogData.SelectionMode) {
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.ONE_MANY_ASSOCIATION_MODE;
                    break;
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.MANY_MANY_ASSOCIATION_MODE;
                    break;
                default:
            }
        }
        // observable for changes in structs
        this.dependencyService.DependencyServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getDependencys();
            }
        });
        if (this.mode == TableComponentMode.DISPLAY_MODE) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
                "Task",
                "Task_Dependencies",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
                "Task",
                "Task_Dependencies",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngAfterViewInit() {
        // enable sorting on all fields (including pointers and reverse pointer)
        this.matTableDataSource.sortingDataAccessor = (dependencyDB, property) => {
            var _a;
            switch (property) {
                // insertion point for specific sorting accessor
                case 'Name':
                    return dependencyDB.Name;
                case 'Task':
                    return (dependencyDB.Task ? dependencyDB.Task.Name : '');
                case 'Task_Dependencies':
                    return (_a = this.frontRepo.Tasks.get(dependencyDB.Task_DependenciesDBID.Int64)) === null || _a === void 0 ? void 0 : _a.Name;
                default:
                    return _dependency_db__WEBPACK_IMPORTED_MODULE_6__["DependencyDB"][property];
            }
        };
        // enable filtering on all fields (including pointers and reverse pointer, which is not done by default)
        this.matTableDataSource.filterPredicate = (dependencyDB, filter) => {
            var _a;
            // filtering is based on finding a lower case filter into a concatenated string
            // the dependencyDB properties
            let mergedContent = "";
            // insertion point for merging of fields
            mergedContent += dependencyDB.Name.toLowerCase();
            if (dependencyDB.Task) {
                mergedContent += dependencyDB.Task.Name.toLowerCase();
            }
            if (dependencyDB.Task_DependenciesDBID.Int64 != 0) {
                mergedContent += (_a = this.frontRepo.Tasks.get(dependencyDB.Task_DependenciesDBID.Int64)) === null || _a === void 0 ? void 0 : _a.Name.toLowerCase();
            }
            let isSelected = mergedContent.includes(filter.toLowerCase());
            return isSelected;
        };
        this.matTableDataSource.sort = this.sort;
        this.matTableDataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.matTableDataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.getDependencys();
        this.matTableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dependencys);
    }
    getDependencys() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.dependencys = this.frontRepo.Dependencys_array;
            // insertion point for variables Recoveries
            // in case the component is called as a selection component
            if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
                this.dependencys.forEach(dependency => {
                    let ID = this.dialogData.ID;
                    let revPointer = dependency[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(dependency);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
                let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
                let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
                if (sourceInstance[this.dialogData.SourceField]) {
                    for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                        let dependency = associationInstance[this.dialogData.IntermediateStructField];
                        this.initialSelection.push(dependency);
                    }
                }
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            // update the mat table data source
            this.matTableDataSource.data = this.dependencys;
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
        });
    }
    editDependency(dependencyID, dependency) {
    }
    // display dependency in router
    displayDependencyInRouter(dependencyID) {
        this.router.navigate(["github_com_fullstack_lang_gonggooglecharts_go-" + "dependency-display", dependencyID]);
    }
    // set editor outlet
    setEditorRouterOutlet(dependencyID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "dependency-detail", dependencyID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(dependencyID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + "dependency-presentation", dependencyID]
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
        if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
            let toUpdate = new Set();
            // reset all initial selection of dependency that belong to dependency
            this.initialSelection.forEach(dependency => {
                dependency[this.dialogData.ReversePointer].Int64 = 0;
                dependency[this.dialogData.ReversePointer].Valid = true;
                toUpdate.add(dependency);
            });
            // from selection, set dependency that belong to dependency
            this.selection.selected.forEach(dependency => {
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
                });
            });
        }
        if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
            let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
            let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
            // First, parse all instance of the association struct and remove the instance
            // that have unselect
            let unselectedDependency = new Set();
            for (let dependency of this.initialSelection) {
                if (this.selection.selected.includes(dependency)) {
                    // console.log("dependency " + dependency.Name + " is still selected")
                }
                else {
                    console.log("dependency " + dependency.Name + " has been unselected");
                    unselectedDependency.add(dependency.ID);
                    console.log("is unselected " + unselectedDependency.has(dependency.ID));
                }
            }
            // delete the association instance
            if (sourceInstance[this.dialogData.SourceField]) {
                for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                    let dependency = associationInstance[this.dialogData.IntermediateStructField];
                    if (unselectedDependency.has(dependency.ID)) {
                        this.frontRepoService.deleteService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                }
            }
            // is the source array is emptyn create it
            if (sourceInstance[this.dialogData.SourceField] == undefined) {
                sourceInstance[this.dialogData.SourceField] = new Array();
            }
            // second, parse all instance of the selected
            if (sourceInstance[this.dialogData.SourceField]) {
                this.selection.selected.forEach(dependency => {
                    if (!this.initialSelection.includes(dependency)) {
                        // console.log("dependency " + dependency.Name + " has been added to the selection")
                        let associationInstance = {
                            Name: sourceInstance["Name"] + "-" + dependency.Name,
                        };
                        associationInstance[this.dialogData.IntermediateStructField + "ID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Int64 = dependency.ID;
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Valid = true;
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Int64 = sourceInstance["ID"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Valid = true;
                        this.frontRepoService.postService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                    else {
                        // console.log("dependency " + dependency.Name + " is still selected")
                    }
                });
            }
            // this.selection = new SelectionModel<DependencyDB>(allowMultiSelect, this.initialSelection);
        }
        // why pizza ?
        this.dialogRef.close('Pizza!');
    }
}
DependencysTableComponent.ɵfac = function DependencysTableComponent_Factory(t) { return new (t || DependencysTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_8__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
DependencysTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DependencysTableComponent, selectors: [["app-dependencystable"]], viewQuery: function DependencysTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 34, vars: 8, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [4, "ngIf"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Task"], ["matColumnDef", "Task_Dependencies"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function DependencysTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function DependencysTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DependencysTableComponent_h1_6_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DependencysTableComponent_th_9_Template, 2, 2, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DependencysTableComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DependencysTableComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, DependencysTableComponent_td_13_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, DependencysTableComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, DependencysTableComponent_td_16_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, DependencysTableComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, DependencysTableComponent_td_19_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, DependencysTableComponent_th_21_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DependencysTableComponent_td_22_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DependencysTableComponent_th_24_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, DependencysTableComponent_td_25_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, DependencysTableComponent_th_27_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, DependencysTableComponent_td_28_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, DependencysTableComponent_tr_29_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, DependencysTableComponent_tr_30_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, DependencysTableComponent_tr_31_Template, 3, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, DependencysTableComponent_button_33_Template, 2, 0, "button", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.matTableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3lzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoiZGVwZW5kZW5jeXMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG49PT09PT09PT09PT09PT09PVxuPT09PT0gVEFCTEUgPT09PT1cbj09PT09PT09PT09PT09PT09XG4qL1xuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zIGluIHRoZSBtYXRlcmlhbCB0YWJsZSAqL1xudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59Il19 */"] });


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
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-dependencys', component: _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_1__["DependencysTableComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_table' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-dependency-adder', component: _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__["DependencyDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-dependency-adder/:id/:originStruct/:originStructFieldName', component: _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__["DependencyDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-dependency-detail/:id', component: _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_2__["DependencyDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-dependency-presentation/:id', component: _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_3__["DependencyPresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_presentation' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-dependency-presentation-special/:id', component: _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_3__["DependencyPresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_godependencypres' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ganttcharts', component: _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_4__["GanttChartsTableComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_table' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ganttchart-adder', component: _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__["GanttChartDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ganttchart-adder/:id/:originStruct/:originStructFieldName', component: _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__["GanttChartDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ganttchart-detail/:id', component: _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_5__["GanttChartDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ganttchart-presentation/:id', component: _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_6__["GanttChartPresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_presentation' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ganttchart-presentation-special/:id', component: _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_6__["GanttChartPresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_goganttchartpres' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ressources', component: _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_7__["RessourcesTableComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_table' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ressource-adder', component: _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__["RessourceDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ressource-adder/:id/:originStruct/:originStructFieldName', component: _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__["RessourceDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ressource-detail/:id', component: _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_8__["RessourceDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ressource-presentation/:id', component: _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_9__["RessourcePresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_presentation' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-ressource-presentation-special/:id', component: _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_9__["RessourcePresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_goressourcepres' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-tasks', component: _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_10__["TasksTableComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_table' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-task-adder', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-task-adder/:id/:originStruct/:originStructFieldName', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-task-detail/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_editor' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-task-presentation/:id', component: _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_12__["TaskPresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_go_presentation' },
    { path: 'github_com_fullstack_lang_gonggooglecharts_go-task-presentation-special/:id', component: _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_12__["TaskPresentationComponent"], outlet: 'github_com_fullstack_lang_gonggooglecharts_gotaskpres' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6N/f":
/*!*************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/push_from_front_nb.service.ts ***!
  \*************************************************************************/
/*! exports provided: PushFromFrontNbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushFromFrontNbService", function() { return PushFromFrontNbService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PushFromFrontNbService {
    constructor(http, location, document) {
        this.http = http;
        this.location = location;
        this.document = document;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // path to the service share the same origin with the path to the document
        // get the origin in the URL to the document
        let origin = this.document.location.origin;
        // if debugging with ng, replace 4200 with 8080
        origin = origin.replace("4200", "8080");
        // compute path to the service
        this.commitNbUrl = origin + '/api/github.com/fullstack-lang/gonggooglecharts/go/pushfromfrontnb';
    }
    // observable of the commit nb getter
    getPushFromFrontNb() {
        return this.http.get(this.commitNbUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched commit nb')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPushFromFrontNb', -1)));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
PushFromFrontNbService.ɵfac = function PushFromFrontNbService_Factory(t) { return new (t || PushFromFrontNbService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
PushFromFrontNbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PushFromFrontNbService, factory: PushFromFrontNbService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.Ressource ? ctx_r0.task.Ressource.Name : "");
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
    constructor(taskService, frontRepoService, route, router) {
        this.taskService = taskService;
        this.frontRepoService = frontRepoService;
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.task = this.frontRepo.Tasks.get(id);
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
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "task-detail", ID]
                }
            }]);
    }
}
TaskPresentationComponent.ɵfac = function TaskPresentationComponent_Factory(t) { return new (t || TaskPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7Ozs7Q0FJQzs7QUFFRDs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InRhc2stcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PSBQUkVTRU5UQVRJT04gPT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxudGgubWF0LWhlYWRlci1jZWxsLFxudGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcmVzZW50YXRpb25fX2hlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNFOEU4RTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlc2VudGF0aW9uX190YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"] });


/***/ }),

/***/ "7uMM":
/*!********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ressource-sorting/ressource-sorting.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RessourceSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceSortingComponent", function() { return RessourceSortingComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function RessourceSortingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ressource_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ressource_r1.Name);
} }
class RessourceSortingComponent {
    constructor(ressourceService, frontRepoService, 
    // not null if the component is called as a selection component of ressource instances
    dialogRef, dialogData, router) {
        this.ressourceService = ressourceService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        // array of Ressource instances that are in the association
        this.associatedRessources = new Array();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getRessources();
    }
    getRessources() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            let index = 0;
            for (let ressource of this.frontRepo.Ressources_array) {
                let ID = this.dialogData.ID;
                let revPointerID = ressource[this.dialogData.ReversePointer];
                let revPointerID_Index = ressource[this.dialogData.ReversePointer + "_Index"];
                if (revPointerID.Int64 == ID) {
                    if (revPointerID_Index == undefined) {
                        revPointerID_Index = new _front_repo_service__WEBPACK_IMPORTED_MODULE_2__["NullInt64"];
                        revPointerID_Index.Valid = true;
                        revPointerID_Index.Int64 = index++;
                    }
                    this.associatedRessources.push(ressource);
                }
            }
            // sort associated ressource according to order
            this.associatedRessources.sort((t1, t2) => {
                let t1_revPointerID_Index = t1[this.dialogData.ReversePointer + "_Index"];
                let t2_revPointerID_Index = t2[this.dialogData.ReversePointer + "_Index"];
                if (t1_revPointerID_Index && t2_revPointerID_Index) {
                    if (t1_revPointerID_Index.Int64 > t2_revPointerID_Index.Int64) {
                        return 1;
                    }
                    if (t1_revPointerID_Index.Int64 < t2_revPointerID_Index.Int64) {
                        return -1;
                    }
                }
                return 0;
            });
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.associatedRessources, event.previousIndex, event.currentIndex);
        // set the order of Ressource instances
        let index = 0;
        for (let ressource of this.associatedRessources) {
            let revPointerID_Index = ressource[this.dialogData.ReversePointer + "_Index"];
            revPointerID_Index.Valid = true;
            revPointerID_Index.Int64 = index++;
        }
    }
    save() {
        this.associatedRessources.forEach(ressource => {
            this.ressourceService.updateRessource(ressource)
                .subscribe(ressource => {
                this.ressourceService.RessourceServiceChanged.next("update");
            });
        });
        this.dialogRef.close('Sorting of ' + this.dialogData.ReversePointer + ' done');
    }
}
RessourceSortingComponent.ɵfac = function RessourceSortingComponent_Factory(t) { return new (t || RessourceSortingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_4__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RessourceSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RessourceSortingComponent, selectors: [["lib-ressource-sorting"]], decls: 4, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"], ["cdkDrag", "", 1, "example-box"]], template: function RessourceSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function RessourceSortingComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RessourceSortingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RessourceSortingComponent_Template_button_click_2_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\nSave\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.associatedRessources);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".example-list[_ngcontent-%COMP%] {\n    width: 500px;\n    max-width: 100%;\n    border: solid 1px #ccc;\n    min-height: 60px;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZS1zb3J0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFIQUFxSDtBQUN6SDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULHNDQUFzQztJQUN0QywyQkFBMkI7QUFDL0IiLCJmaWxlIjoicmVzc291cmNlLXNvcnRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxpc3Qge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "AnIz":
/*!**********************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/task-sorting/task-sorting.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TaskSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSortingComponent", function() { return TaskSortingComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function TaskSortingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r1.Name);
} }
class TaskSortingComponent {
    constructor(taskService, frontRepoService, 
    // not null if the component is called as a selection component of task instances
    dialogRef, dialogData, router) {
        this.taskService = taskService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        // array of Task instances that are in the association
        this.associatedTasks = new Array();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getTasks();
    }
    getTasks() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            let index = 0;
            for (let task of this.frontRepo.Tasks_array) {
                let ID = this.dialogData.ID;
                let revPointerID = task[this.dialogData.ReversePointer];
                let revPointerID_Index = task[this.dialogData.ReversePointer + "_Index"];
                if (revPointerID.Int64 == ID) {
                    if (revPointerID_Index == undefined) {
                        revPointerID_Index = new _front_repo_service__WEBPACK_IMPORTED_MODULE_2__["NullInt64"];
                        revPointerID_Index.Valid = true;
                        revPointerID_Index.Int64 = index++;
                    }
                    this.associatedTasks.push(task);
                }
            }
            // sort associated task according to order
            this.associatedTasks.sort((t1, t2) => {
                let t1_revPointerID_Index = t1[this.dialogData.ReversePointer + "_Index"];
                let t2_revPointerID_Index = t2[this.dialogData.ReversePointer + "_Index"];
                if (t1_revPointerID_Index && t2_revPointerID_Index) {
                    if (t1_revPointerID_Index.Int64 > t2_revPointerID_Index.Int64) {
                        return 1;
                    }
                    if (t1_revPointerID_Index.Int64 < t2_revPointerID_Index.Int64) {
                        return -1;
                    }
                }
                return 0;
            });
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.associatedTasks, event.previousIndex, event.currentIndex);
        // set the order of Task instances
        let index = 0;
        for (let task of this.associatedTasks) {
            let revPointerID_Index = task[this.dialogData.ReversePointer + "_Index"];
            revPointerID_Index.Valid = true;
            revPointerID_Index.Int64 = index++;
        }
    }
    save() {
        this.associatedTasks.forEach(task => {
            this.taskService.updateTask(task)
                .subscribe(task => {
                this.taskService.TaskServiceChanged.next("update");
            });
        });
        this.dialogRef.close('Sorting of ' + this.dialogData.ReversePointer + ' done');
    }
}
TaskSortingComponent.ɵfac = function TaskSortingComponent_Factory(t) { return new (t || TaskSortingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
TaskSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TaskSortingComponent, selectors: [["lib-task-sorting"]], decls: 4, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"], ["cdkDrag", "", 1, "example-box"]], template: function TaskSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function TaskSortingComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaskSortingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskSortingComponent_Template_button_click_2_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\nSave\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.associatedTasks);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".example-list[_ngcontent-%COMP%] {\n    width: 500px;\n    max-width: 100%;\n    border: solid 1px #ccc;\n    min-height: 60px;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stc29ydGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxSEFBcUg7QUFDekg7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InRhc2stc29ydGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGlzdCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi50YWJsZV9fc2F2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");


/*
 * Behavior subject
 */






class TaskService {
    constructor(http, location, document) {
        this.http = http;
        this.location = location;
        this.document = document;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.TaskServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        // path to the service share the same origin with the path to the document
        // get the origin in the URL to the document
        let origin = this.document.location.origin;
        // if debugging with ng, replace 4200 with 8080
        origin = origin.replace("4200", "8080");
        // compute path to the service
        this.tasksUrl = origin + '/api/github.com/fullstack-lang/gonggooglecharts/go/v1/tasks';
    }
    /** GET tasks from the server */
    getTasks() {
        return this.http.get(this.tasksUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched tasks')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTasks', [])));
    }
    /** GET task by id. Will 404 if id not found */
    getTask(id) {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched task id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getTask id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new task to the server */
    postTask(taskdb) {
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        taskdb.Ressource = {};
        taskdb.Dependencies = [];
        let _GanttChart_Tasks_reverse = taskdb.GanttChart_Tasks_reverse;
        taskdb.GanttChart_Tasks_reverse = {};
        return this.http.post(this.tasksUrl, taskdb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            taskdb.GanttChart_Tasks_reverse = _GanttChart_Tasks_reverse;
            this.log(`posted taskdb id=${taskdb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postTask')));
    }
    /** DELETE: delete the taskdb from the server */
    deleteTask(taskdb) {
        const id = typeof taskdb === 'number' ? taskdb : taskdb.ID;
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted taskdb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteTask')));
    }
    /** PUT: update the taskdb on the server */
    updateTask(taskdb) {
        const id = typeof taskdb === 'number' ? taskdb : taskdb.ID;
        const url = `${this.tasksUrl}/${id}`;
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        taskdb.Ressource = {};
        taskdb.Dependencies = [];
        let _GanttChart_Tasks_reverse = taskdb.GanttChart_Tasks_reverse;
        taskdb.GanttChart_Tasks_reverse = {};
        return this.http.put(url, taskdb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            taskdb.GanttChart_Tasks_reverse = _GanttChart_Tasks_reverse;
            this.log(`updated taskdb id=${taskdb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateTask')));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Cft9":
/*!*****************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/front-repo.service.ts ***!
  \*****************************************************************/
/*! exports provided: FrontRepo, FrontRepoSingloton, NullInt64, DialogData, SelectionMode, FrontRepoService, getDependencyUniqueID, getGanttChartUniqueID, getRessourceUniqueID, getTaskUniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontRepo", function() { return FrontRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontRepoSingloton", function() { return FrontRepoSingloton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullInt64", function() { return NullInt64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return SelectionMode; });
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
// the table component is called in different ways
//
// DISPLAY or ASSOCIATION MODE
//
// in ASSOCIATION MODE, it is invoked within a diaglo and a Dialog Data item is used to
// configure the component
// DialogData define the interface for information that is forwarded from the calling instance to 
// the select table
class DialogData {
}
var SelectionMode;
(function (SelectionMode) {
    SelectionMode["ONE_MANY_ASSOCIATION_MODE"] = "ONE_MANY_ASSOCIATION_MODE";
    SelectionMode["MANY_MANY_ASSOCIATION_MODE"] = "MANY_MANY_ASSOCIATION_MODE";
})(SelectionMode || (SelectionMode = {}));
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
    // postService provides a post function for each struct name
    postService(structName, instanceToBePosted) {
        let service = this[structName.toLowerCase() + "Service"];
        service["post" + structName](instanceToBePosted).subscribe(instance => {
            service[structName + "ServiceChanged"].next("post");
        });
    }
    // deleteService provides a delete function for each struct name
    deleteService(structName, instanceToBeDeleted) {
        let service = this[structName.toLowerCase() + "Service"];
        service["delete" + structName](instanceToBeDeleted).subscribe(instance => {
            service[structName + "ServiceChanged"].next("delete");
        });
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
                // sort Dependencys_array array
                FrontRepoSingloton.Dependencys_array.sort((t1, t2) => {
                    if (t1.Name > t2.Name) {
                        return 1;
                    }
                    if (t1.Name < t2.Name) {
                        return -1;
                    }
                    return 0;
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
                // sort GanttCharts_array array
                FrontRepoSingloton.GanttCharts_array.sort((t1, t2) => {
                    if (t1.Name > t2.Name) {
                        return 1;
                    }
                    if (t1.Name < t2.Name) {
                        return -1;
                    }
                    return 0;
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
                // sort Ressources_array array
                FrontRepoSingloton.Ressources_array.sort((t1, t2) => {
                    if (t1.Name > t2.Name) {
                        return 1;
                    }
                    if (t1.Name < t2.Name) {
                        return -1;
                    }
                    return 0;
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
                // sort Tasks_array array
                FrontRepoSingloton.Tasks_array.sort((t1, t2) => {
                    if (t1.Name > t2.Name) {
                        return 1;
                    }
                    if (t1.Name < t2.Name) {
                        return -1;
                    }
                    return 0;
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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















const _c0 = function () { return { standalone: true }; };
function RessourceDetailComponent_form_0_mat_grid_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-grid-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RessourceDetailComponent_form_0_mat_grid_list_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.ressource.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RessourceDetailComponent_form_0_mat_grid_list_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.toggleTextArea("Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r1.ressource.Name);
} }
function RessourceDetailComponent_form_0_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RessourceDetailComponent_form_0_mat_form_field_4_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.ressource.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r2.ressource.Name);
} }
function RessourceDetailComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RessourceDetailComponent_form_0_mat_grid_list_3_Template, 10, 4, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RessourceDetailComponent_form_0_mat_form_field_4_Template, 4, 3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RessourceDetailComponent_form_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Save ressource ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isATextArea("Name"));
} }
// RessourceDetailComponent is initilizaed from different routes
// RessourceDetailComponentState detail different cases 
var RessourceDetailComponentState;
(function (RessourceDetailComponentState) {
    RessourceDetailComponentState[RessourceDetailComponentState["CREATE_INSTANCE"] = 0] = "CREATE_INSTANCE";
    RessourceDetailComponentState[RessourceDetailComponentState["UPDATE_INSTANCE"] = 1] = "UPDATE_INSTANCE";
    // insertion point for declarations of enum values of state
})(RessourceDetailComponentState || (RessourceDetailComponentState = {}));
class RessourceDetailComponent {
    constructor(ressourceService, frontRepoService, dialog, route, router) {
        this.ressourceService = ressourceService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // this stores the information related to string fields
        // if false, the field is inputed with an <input ...> form 
        // if true, it is inputed with a <textarea ...> </textarea>
        this.mapFields_displayAsTextArea = new Map();
    }
    ngOnInit() {
        // compute state
        this.id = +this.route.snapshot.paramMap.get('id');
        this.originStruct = this.route.snapshot.paramMap.get('originStruct');
        this.originStructFieldName = this.route.snapshot.paramMap.get('originStructFieldName');
        const association = this.route.snapshot.paramMap.get('association');
        if (this.id == 0) {
            this.state = RessourceDetailComponentState.CREATE_INSTANCE;
        }
        else {
            if (this.originStruct == undefined) {
                this.state = RessourceDetailComponentState.UPDATE_INSTANCE;
            }
            else {
                switch (this.originStructFieldName) {
                    // insertion point for state computation
                    default:
                        console.log(this.originStructFieldName + " is unkown association");
                }
            }
        }
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            switch (this.state) {
                case RessourceDetailComponentState.CREATE_INSTANCE:
                    this.ressource = new (_ressource_db__WEBPACK_IMPORTED_MODULE_0__["RessourceDB"]);
                    break;
                case RessourceDetailComponentState.UPDATE_INSTANCE:
                    this.ressource = frontRepo.Ressources.get(this.id);
                    break;
                // insertion point for init of association field
                default:
                    console.log(this.state + " is unkown state");
            }
            // insertion point for recovery of form controls value for bool fields
        });
    }
    save() {
        // some fields needs to be translated into serializable forms
        // pointers fields, after the translation, are nulled in order to perform serialization
        // insertion point for translation/nullation of each field
        // save from the front pointer space to the non pointer space for serialization
        // insertion point for translation/nullation of each pointers
        switch (this.state) {
            case RessourceDetailComponentState.UPDATE_INSTANCE:
                this.ressourceService.updateRessource(this.ressource)
                    .subscribe(ressource => {
                    this.ressourceService.RessourceServiceChanged.next("update");
                });
                break;
            default:
                this.ressourceService.postRessource(this.ressource).subscribe(ressource => {
                    this.ressourceService.RessourceServiceChanged.next("post");
                    this.ressource = {}; // reset fields
                });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField, selectionMode, sourceField, intermediateStructField, nextAssociatedStruct) {
        console.log("mode " + selectionMode);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        let dialogData = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["DialogData"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.ressource.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.ressource.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            // set up the source
            dialogData.SourceStruct = "Ressource";
            dialogData.SourceField = sourceField;
            // set up the intermediate struct
            dialogData.IntermediateStruct = AssociatedStruct;
            dialogData.IntermediateStructField = intermediateStructField;
            // set up the end struct
            dialogData.NextAssociationStruct = nextAssociatedStruct;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(nextAssociatedStruct).get(nextAssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
    }
    openDragAndDropOrdering(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.ressource.ID,
            ReversePointer: reverseField,
            OrderingMode: true,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfSortingComponents"].get(AssociatedStruct).get(AssociatedStruct + 'SortingComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    fillUpNameIfEmpty(event) {
        if (this.ressource.Name == undefined) {
            this.ressource.Name = event.value.Name;
        }
    }
    toggleTextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            let displayAsTextArea = this.mapFields_displayAsTextArea.get(fieldName);
            this.mapFields_displayAsTextArea.set(fieldName, !displayAsTextArea);
        }
        else {
            this.mapFields_displayAsTextArea.set(fieldName, true);
        }
    }
    isATextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            return this.mapFields_displayAsTextArea.get(fieldName);
        }
        else {
            return false;
        }
    }
    compareObjects(o1, o2) {
        if ((o1 === null || o1 === void 0 ? void 0 : o1.ID) == (o2 === null || o2 === void 0 ? void 0 : o2.ID)) {
            return true;
        }
        else {
            return false;
        }
    }
}
RessourceDetailComponent.ɵfac = function RessourceDetailComponent_Factory(t) { return new (t || RessourceDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_5__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_1__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RessourceDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RessourceDetailComponent, selectors: [["app-ressource-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], ["cols", "5", "rowHeight", "2:1", 4, "ngIf"], ["mat-form-field", "", "class", "detail-full-width", 4, "ngIf"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["cols", "5", "rowHeight", "2:1"], [3, "colspan"], ["mat-form-field", "", 1, "detail-full-width"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"]], template: function RessourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RessourceDetailComponent_form_0_Template, 8, 2, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ressource);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], styles: [".details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 30px 30px;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.detail-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyZXNzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG59XG5cbi5kZXRhaWxzX190aXRsZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmRldGFpbC1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHNfX3NhdmUge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmRldGFpbHNfaG91cnNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmRldGFpbHNfbWludXRlc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uZGV0YWlsc19zZWNvbmRzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59Il19 */"] });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-split */ "cdP3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "5BoB");
/* harmony import */ var _splitter_splitter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./splitter/splitter.component */ "Oftp");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "ZUHL");
/* harmony import */ var _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dependencys-table/dependencys-table.component */ "/pIw");
/* harmony import */ var _dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dependency-sorting/dependency-sorting.component */ "xSdS");
/* harmony import */ var _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dependency-detail/dependency-detail.component */ "tmHK");
/* harmony import */ var _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dependency-presentation/dependency-presentation.component */ "+Yeo");
/* harmony import */ var _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony import */ var _ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ganttchart-sorting/ganttchart-sorting.component */ "tmWy");
/* harmony import */ var _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ganttchart-detail/ganttchart-detail.component */ "Ll9Z");
/* harmony import */ var _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ganttchart-presentation/ganttchart-presentation.component */ "PksR");
/* harmony import */ var _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ressources-table/ressources-table.component */ "b1k2");
/* harmony import */ var _ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ressource-sorting/ressource-sorting.component */ "7uMM");
/* harmony import */ var _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ressource-detail/ressource-detail.component */ "I2i6");
/* harmony import */ var _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ressource-presentation/ressource-presentation.component */ "Oa77");
/* harmony import */ var _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tasks-table/tasks-table.component */ "y650");
/* harmony import */ var _task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./task-sorting/task-sorting.component */ "AnIz");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "k2dw");
/* harmony import */ var _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./task-presentation/task-presentation.component */ "7rAC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ "fXoL");



// for angular material






















// insertion point for imports 

















class GonggooglechartsModule {
}
GonggooglechartsModule.ɵfac = function GonggooglechartsModule_Factory(t) { return new (t || GonggooglechartsModule)(); };
GonggooglechartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({ type: GonggooglechartsModule });
GonggooglechartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"],
            useValue: {}
        },
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_21__["AngularSplitModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵsetNgModuleScope"](GonggooglechartsModule, { declarations: [
        // insertion point for declarations 
        _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_25__["DependencysTableComponent"],
        _dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_26__["DependencySortingComponent"],
        _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_27__["DependencyDetailComponent"],
        _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_28__["DependencyPresentationComponent"],
        _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_29__["GanttChartsTableComponent"],
        _ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_30__["GanttChartSortingComponent"],
        _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_31__["GanttChartDetailComponent"],
        _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_32__["GanttChartPresentationComponent"],
        _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_33__["RessourcesTableComponent"],
        _ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_34__["RessourceSortingComponent"],
        _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_35__["RessourceDetailComponent"],
        _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_36__["RessourcePresentationComponent"],
        _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_37__["TasksTableComponent"],
        _task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_38__["TaskSortingComponent"],
        _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_39__["TaskDetailComponent"],
        _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_40__["TaskPresentationComponent"],
        _splitter_splitter_component__WEBPACK_IMPORTED_MODULE_23__["SplitterComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"],
        angular_split__WEBPACK_IMPORTED_MODULE_21__["AngularSplitModule"]], exports: [
        // insertion point for declarations 
        _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_25__["DependencysTableComponent"],
        _dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_26__["DependencySortingComponent"],
        _dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_27__["DependencyDetailComponent"],
        _dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_28__["DependencyPresentationComponent"],
        _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_29__["GanttChartsTableComponent"],
        _ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_30__["GanttChartSortingComponent"],
        _ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_31__["GanttChartDetailComponent"],
        _ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_32__["GanttChartPresentationComponent"],
        _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_33__["RessourcesTableComponent"],
        _ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_34__["RessourceSortingComponent"],
        _ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_35__["RessourceDetailComponent"],
        _ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_36__["RessourcePresentationComponent"],
        _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_37__["TasksTableComponent"],
        _task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_38__["TaskSortingComponent"],
        _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_39__["TaskDetailComponent"],
        _task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_40__["TaskPresentationComponent"],
        _splitter_splitter_component__WEBPACK_IMPORTED_MODULE_23__["SplitterComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"]] }); })();


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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");

















const _c0 = function () { return { standalone: true }; };
function GanttChartDetailComponent_form_0_mat_grid_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GanttChartDetailComponent_form_0_mat_grid_list_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.ganttchart.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GanttChartDetailComponent_form_0_mat_grid_list_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.toggleTextArea("Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r1.ganttchart.Name);
} }
function GanttChartDetailComponent_form_0_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GanttChartDetailComponent_form_0_mat_form_field_4_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.ganttchart.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r2.ganttchart.Name);
} }
function GanttChartDetailComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ganttchart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GanttChartDetailComponent_form_0_mat_grid_list_3_Template, 10, 4, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GanttChartDetailComponent_form_0_mat_form_field_4_Template, 4, 3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-grid-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GanttChartDetailComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.openReverseSelection("Task", "GanttChart_TasksDBID", "ONE_MANY_ASSOCIATION_MODE", "", "", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GanttChartDetailComponent_form_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.openDragAndDropOrdering("Task", "GanttChart_TasksDBID"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " shuffle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GanttChartDetailComponent_form_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Save ganttchart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
} }
// GanttChartDetailComponent is initilizaed from different routes
// GanttChartDetailComponentState detail different cases 
var GanttChartDetailComponentState;
(function (GanttChartDetailComponentState) {
    GanttChartDetailComponentState[GanttChartDetailComponentState["CREATE_INSTANCE"] = 0] = "CREATE_INSTANCE";
    GanttChartDetailComponentState[GanttChartDetailComponentState["UPDATE_INSTANCE"] = 1] = "UPDATE_INSTANCE";
    // insertion point for declarations of enum values of state
})(GanttChartDetailComponentState || (GanttChartDetailComponentState = {}));
class GanttChartDetailComponent {
    constructor(ganttchartService, frontRepoService, dialog, route, router) {
        this.ganttchartService = ganttchartService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // this stores the information related to string fields
        // if false, the field is inputed with an <input ...> form 
        // if true, it is inputed with a <textarea ...> </textarea>
        this.mapFields_displayAsTextArea = new Map();
    }
    ngOnInit() {
        // compute state
        this.id = +this.route.snapshot.paramMap.get('id');
        this.originStruct = this.route.snapshot.paramMap.get('originStruct');
        this.originStructFieldName = this.route.snapshot.paramMap.get('originStructFieldName');
        const association = this.route.snapshot.paramMap.get('association');
        if (this.id == 0) {
            this.state = GanttChartDetailComponentState.CREATE_INSTANCE;
        }
        else {
            if (this.originStruct == undefined) {
                this.state = GanttChartDetailComponentState.UPDATE_INSTANCE;
            }
            else {
                switch (this.originStructFieldName) {
                    // insertion point for state computation
                    default:
                        console.log(this.originStructFieldName + " is unkown association");
                }
            }
        }
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            switch (this.state) {
                case GanttChartDetailComponentState.CREATE_INSTANCE:
                    this.ganttchart = new (_ganttchart_db__WEBPACK_IMPORTED_MODULE_0__["GanttChartDB"]);
                    break;
                case GanttChartDetailComponentState.UPDATE_INSTANCE:
                    this.ganttchart = frontRepo.GanttCharts.get(this.id);
                    break;
                // insertion point for init of association field
                default:
                    console.log(this.state + " is unkown state");
            }
            // insertion point for recovery of form controls value for bool fields
        });
    }
    save() {
        // some fields needs to be translated into serializable forms
        // pointers fields, after the translation, are nulled in order to perform serialization
        // insertion point for translation/nullation of each field
        // save from the front pointer space to the non pointer space for serialization
        // insertion point for translation/nullation of each pointers
        switch (this.state) {
            case GanttChartDetailComponentState.UPDATE_INSTANCE:
                this.ganttchartService.updateGanttChart(this.ganttchart)
                    .subscribe(ganttchart => {
                    this.ganttchartService.GanttChartServiceChanged.next("update");
                });
                break;
            default:
                this.ganttchartService.postGanttChart(this.ganttchart).subscribe(ganttchart => {
                    this.ganttchartService.GanttChartServiceChanged.next("post");
                    this.ganttchart = {}; // reset fields
                });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField, selectionMode, sourceField, intermediateStructField, nextAssociatedStruct) {
        console.log("mode " + selectionMode);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        let dialogData = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["DialogData"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.ganttchart.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.ganttchart.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            // set up the source
            dialogData.SourceStruct = "GanttChart";
            dialogData.SourceField = sourceField;
            // set up the intermediate struct
            dialogData.IntermediateStruct = AssociatedStruct;
            dialogData.IntermediateStructField = intermediateStructField;
            // set up the end struct
            dialogData.NextAssociationStruct = nextAssociatedStruct;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(nextAssociatedStruct).get(nextAssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
    }
    openDragAndDropOrdering(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.ganttchart.ID,
            ReversePointer: reverseField,
            OrderingMode: true,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfSortingComponents"].get(AssociatedStruct).get(AssociatedStruct + 'SortingComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    fillUpNameIfEmpty(event) {
        if (this.ganttchart.Name == undefined) {
            this.ganttchart.Name = event.value.Name;
        }
    }
    toggleTextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            let displayAsTextArea = this.mapFields_displayAsTextArea.get(fieldName);
            this.mapFields_displayAsTextArea.set(fieldName, !displayAsTextArea);
        }
        else {
            this.mapFields_displayAsTextArea.set(fieldName, true);
        }
    }
    isATextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            return this.mapFields_displayAsTextArea.get(fieldName);
        }
        else {
            return false;
        }
    }
    compareObjects(o1, o2) {
        if ((o1 === null || o1 === void 0 ? void 0 : o1.ID) == (o2 === null || o2 === void 0 ? void 0 : o2.ID)) {
            return true;
        }
        else {
            return false;
        }
    }
}
GanttChartDetailComponent.ɵfac = function GanttChartDetailComponent_Factory(t) { return new (t || GanttChartDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_5__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_1__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
GanttChartDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GanttChartDetailComponent, selectors: [["app-ganttchart-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], ["cols", "5", "rowHeight", "2:1", 4, "ngIf"], ["mat-form-field", "", "class", "detail-full-width", 4, "ngIf"], ["cols", "5", "rowHeight", "2:1"], [3, "colspan"], ["mat-raised-button", "", 3, "click"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-form-field", "", 1, "detail-full-width"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"]], template: function GanttChartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GanttChartDetailComponent_form_0_Template, 16, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ganttchart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 30px 30px;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.detail-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZ2FudHRjaGFydC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cblxuLmRldGFpbHNfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZGV0YWlsLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlsc19fc2F2ZSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZGV0YWlsc19ob3Vyc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uZGV0YWlsc19taW51dGVzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5kZXRhaWxzX3NlY29uZHNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn0iXX0= */"] });


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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






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
    constructor(ressourceService, frontRepoService, route, router) {
        this.ressourceService = ressourceService;
        this.frontRepoService = frontRepoService;
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.ressource = this.frontRepo.Ressources.get(id);
            // insertion point for recovery of durations
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "ressource-detail", ID]
                }
            }]);
    }
}
RessourcePresentationComponent.ɵfac = function RessourcePresentationComponent_Factory(t) { return new (t || RessourcePresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_1__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZS1wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0EsbUNBQW1DOztBQUVuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFHQTs7OztDQUlDOztBQUVEOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0IiLCJmaWxlIjoicmVzc291cmNlLXByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDE6OmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cblxuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLypcbj09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT0gUFJFU0VOVEFUSU9OID09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbnRoLm1hdC1oZWFkZXItY2VsbCxcbnRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLnByZXNlbnRhdGlvbl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXI6aG92ZXIge1xuICAgIGNvbG9yOiAjRThFOEU4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZXNlbnRhdGlvbl9fdGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59Il19 */"] });


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
SplitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitterComponent, selectors: [["app-gonggooglecharts-splitter"]], decls: 16, vars: 0, consts: [[2, "width", "100%", "height", "100%", "background", "grey(16)"], ["direction", "horizontal"], ["size", "20"], ["direction", "vertical"], ["size", "80"], ["name", "github_com_fullstack_lang_gonggooglecharts_go_table"], ["name", "github_com_fullstack_lang_gonggooglecharts_go_presentation"], ["name", "github_com_fullstack_lang_gonggooglecharts_go_editor"]], template: function SplitterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "as-split-area", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "as-split", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "as-split-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "as-split-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet", 7);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");


/*
 * Behavior subject
 */






class RessourceService {
    constructor(http, location, document) {
        this.http = http;
        this.location = location;
        this.document = document;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.RessourceServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        // path to the service share the same origin with the path to the document
        // get the origin in the URL to the document
        let origin = this.document.location.origin;
        // if debugging with ng, replace 4200 with 8080
        origin = origin.replace("4200", "8080");
        // compute path to the service
        this.ressourcesUrl = origin + '/api/github.com/fullstack-lang/gonggooglecharts/go/v1/ressources';
    }
    /** GET ressources from the server */
    getRessources() {
        return this.http.get(this.ressourcesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched ressources')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRessources', [])));
    }
    /** GET ressource by id. Will 404 if id not found */
    getRessource(id) {
        const url = `${this.ressourcesUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched ressource id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getRessource id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new ressource to the server */
    postRessource(ressourcedb) {
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        return this.http.post(this.ressourcesUrl, ressourcedb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            this.log(`posted ressourcedb id=${ressourcedb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postRessource')));
    }
    /** DELETE: delete the ressourcedb from the server */
    deleteRessource(ressourcedb) {
        const id = typeof ressourcedb === 'number' ? ressourcedb : ressourcedb.ID;
        const url = `${this.ressourcesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted ressourcedb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteRessource')));
    }
    /** PUT: update the ressourcedb on the server */
    updateRessource(ressourcedb) {
        const id = typeof ressourcedb === 'number' ? ressourcedb : ressourcedb.ID;
        const url = `${this.ressourcesUrl}/${id}`;
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        return this.http.put(url, ressourcedb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            this.log(`updated ressourcedb id=${ressourcedb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateRessource')));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
RessourceService.ɵfac = function RessourceService_Factory(t) { return new (t || RessourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
RessourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RessourceService, factory: RessourceService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






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
    constructor(ganttchartService, frontRepoService, route, router) {
        this.ganttchartService = ganttchartService;
        this.frontRepoService = frontRepoService;
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.ganttchart = this.frontRepo.GanttCharts.get(id);
            // insertion point for recovery of durations
        });
    }
    // set presentation outlet
    setPresentationRouterOutlet(structName, ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + structName + "-presentation", ID]
                }
            }]);
    }
    // set editor outlet
    setEditorRouterOutlet(ID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "ganttchart-detail", ID]
                }
            }]);
    }
}
GanttChartPresentationComponent.ɵfac = function GanttChartPresentationComponent_Factory(t) { return new (t || GanttChartPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_1__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.presentation__header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    top: 0;\n    position: sticky;\n    padding: 10px 0;\n    z-index: 1;\n    background-color: white;\n}\n\n.presentation__header[_ngcontent-%COMP%]:hover {\n    color: #E8E8E8;\n    cursor: pointer;\n}\n\n.presentation__table[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8E8;\n    border-bottom: none;\n    margin: 10px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnQtcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7Ozs7Q0FJQzs7QUFFRDs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImdhbnR0Y2hhcnQtcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuXG4qIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PSBQUkVTRU5UQVRJT04gPT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxudGgubWF0LWhlYWRlci1jZWxsLFxudGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2VudGF0aW9uX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcmVzZW50YXRpb25fX2hlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNFOEU4RTg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlc2VudGF0aW9uX190YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");


/*
 * Behavior subject
 */






class GanttChartService {
    constructor(http, location, document) {
        this.http = http;
        this.location = location;
        this.document = document;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.GanttChartServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        // path to the service share the same origin with the path to the document
        // get the origin in the URL to the document
        let origin = this.document.location.origin;
        // if debugging with ng, replace 4200 with 8080
        origin = origin.replace("4200", "8080");
        // compute path to the service
        this.ganttchartsUrl = origin + '/api/github.com/fullstack-lang/gonggooglecharts/go/v1/ganttcharts';
    }
    /** GET ganttcharts from the server */
    getGanttCharts() {
        return this.http.get(this.ganttchartsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched ganttcharts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getGanttCharts', [])));
    }
    /** GET ganttchart by id. Will 404 if id not found */
    getGanttChart(id) {
        const url = `${this.ganttchartsUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched ganttchart id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getGanttChart id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new ganttchart to the server */
    postGanttChart(ganttchartdb) {
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        ganttchartdb.Tasks = [];
        return this.http.post(this.ganttchartsUrl, ganttchartdb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            this.log(`posted ganttchartdb id=${ganttchartdb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postGanttChart')));
    }
    /** DELETE: delete the ganttchartdb from the server */
    deleteGanttChart(ganttchartdb) {
        const id = typeof ganttchartdb === 'number' ? ganttchartdb : ganttchartdb.ID;
        const url = `${this.ganttchartsUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted ganttchartdb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteGanttChart')));
    }
    /** PUT: update the ganttchartdb on the server */
    updateGanttChart(ganttchartdb) {
        const id = typeof ganttchartdb === 'number' ? ganttchartdb : ganttchartdb.ID;
        const url = `${this.ganttchartsUrl}/${id}`;
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        ganttchartdb.Tasks = [];
        return this.http.put(url, ganttchartdb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            this.log(`updated ganttchartdb id=${ganttchartdb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateGanttChart')));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
GanttChartService.ɵfac = function GanttChartService_Factory(t) { return new (t || GanttChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
GanttChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GanttChartService, factory: GanttChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XLRw":
/*!*************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/map-components.ts ***!
  \*************************************************************/
/*! exports provided: MapOfDependencysComponents, MapOfDependencySortingComponents, MapOfGanttChartsComponents, MapOfGanttChartSortingComponents, MapOfRessourcesComponents, MapOfRessourceSortingComponents, MapOfTasksComponents, MapOfTaskSortingComponents, MapOfComponents, MapOfSortingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfDependencysComponents", function() { return MapOfDependencysComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfDependencySortingComponents", function() { return MapOfDependencySortingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfGanttChartsComponents", function() { return MapOfGanttChartsComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfGanttChartSortingComponents", function() { return MapOfGanttChartSortingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfRessourcesComponents", function() { return MapOfRessourcesComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfRessourceSortingComponents", function() { return MapOfRessourceSortingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfTasksComponents", function() { return MapOfTasksComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfTaskSortingComponents", function() { return MapOfTaskSortingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfComponents", function() { return MapOfComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOfSortingComponents", function() { return MapOfSortingComponents; });
/* harmony import */ var _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencys-table/dependencys-table.component */ "/pIw");
/* harmony import */ var _dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependency-sorting/dependency-sorting.component */ "xSdS");
/* harmony import */ var _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony import */ var _ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ganttchart-sorting/ganttchart-sorting.component */ "tmWy");
/* harmony import */ var _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ressources-table/ressources-table.component */ "b1k2");
/* harmony import */ var _ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ressource-sorting/ressource-sorting.component */ "7uMM");
/* harmony import */ var _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks-table/tasks-table.component */ "y650");
/* harmony import */ var _task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-sorting/task-sorting.component */ "AnIz");
// insertion point sub template for components imports 








// insertion point sub template for map of components per struct 
const MapOfDependencysComponents = new Map([["DependencysTableComponent", _dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_0__["DependencysTableComponent"]],]);
const MapOfDependencySortingComponents = new Map([["DependencySortingComponent", _dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_1__["DependencySortingComponent"]],]);
const MapOfGanttChartsComponents = new Map([["GanttChartsTableComponent", _ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_2__["GanttChartsTableComponent"]],]);
const MapOfGanttChartSortingComponents = new Map([["GanttChartSortingComponent", _ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_3__["GanttChartSortingComponent"]],]);
const MapOfRessourcesComponents = new Map([["RessourcesTableComponent", _ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_4__["RessourcesTableComponent"]],]);
const MapOfRessourceSortingComponents = new Map([["RessourceSortingComponent", _ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_5__["RessourceSortingComponent"]],]);
const MapOfTasksComponents = new Map([["TasksTableComponent", _tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_6__["TasksTableComponent"]],]);
const MapOfTaskSortingComponents = new Map([["TaskSortingComponent", _task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_7__["TaskSortingComponent"]],]);
// map of all ng components of the stacks
const MapOfComponents = new Map([
    // insertion point sub template for map of components 
    ["Dependency", MapOfDependencysComponents],
    ["GanttChart", MapOfGanttChartsComponents],
    ["Ressource", MapOfRessourcesComponents],
    ["Task", MapOfTasksComponents],
]);
// map of all ng components of the stacks
const MapOfSortingComponents = new Map([
    // insertion point sub template for map of sorting components 
    ["Dependency", MapOfDependencySortingComponents],
    ["GanttChart", MapOfGanttChartSortingComponents],
    ["Ressource", MapOfRessourceSortingComponents],
    ["Task", MapOfTaskSortingComponents],
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
                associationField: node.associationField,
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
                associationField: "",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(dependencyGongNodeStruct);
            this.frontRepo.Dependencys_array.sort((t1, t2) => {
                if (t1.Name > t2.Name) {
                    return 1;
                }
                if (t1.Name < t2.Name) {
                    return -1;
                }
                return 0;
            });
            this.frontRepo.Dependencys_array.forEach(dependencyDB => {
                let dependencyGongNodeInstance = {
                    name: dependencyDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: dependencyDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getDependencyUniqueID"])(dependencyDB.ID),
                    structName: "Dependency",
                    associationField: "",
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
                    associationField: "Task",
                    associatedStructName: "Task",
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
                        associationField: "",
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
                associationField: "",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(ganttchartGongNodeStruct);
            this.frontRepo.GanttCharts_array.sort((t1, t2) => {
                if (t1.Name > t2.Name) {
                    return 1;
                }
                if (t1.Name < t2.Name) {
                    return -1;
                }
                return 0;
            });
            this.frontRepo.GanttCharts_array.forEach(ganttchartDB => {
                var _a;
                let ganttchartGongNodeInstance = {
                    name: ganttchartDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: ganttchartDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getGanttChartUniqueID"])(ganttchartDB.ID),
                    structName: "GanttChart",
                    associationField: "",
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
                    associationField: "Tasks",
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
                        associationField: "",
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
                associationField: "",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(ressourceGongNodeStruct);
            this.frontRepo.Ressources_array.sort((t1, t2) => {
                if (t1.Name > t2.Name) {
                    return 1;
                }
                if (t1.Name < t2.Name) {
                    return -1;
                }
                return 0;
            });
            this.frontRepo.Ressources_array.forEach(ressourceDB => {
                let ressourceGongNodeInstance = {
                    name: ressourceDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: ressourceDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getRessourceUniqueID"])(ressourceDB.ID),
                    structName: "Ressource",
                    associationField: "",
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
                associationField: "",
                associatedStructName: "",
                children: new Array()
            };
            nonInstanceNodeId = nonInstanceNodeId + 1;
            this.gongNodeTree.push(taskGongNodeStruct);
            this.frontRepo.Tasks_array.sort((t1, t2) => {
                if (t1.Name > t2.Name) {
                    return 1;
                }
                if (t1.Name < t2.Name) {
                    return -1;
                }
                return 0;
            });
            this.frontRepo.Tasks_array.forEach(taskDB => {
                var _a;
                let taskGongNodeInstance = {
                    name: taskDB.Name,
                    type: GongNodeType.INSTANCE,
                    id: taskDB.ID,
                    uniqueIdPerStack: Object(_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["getTaskUniqueID"])(taskDB.ID),
                    structName: "Task",
                    associationField: "",
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
                    associationField: "Ressource",
                    associatedStructName: "Ressource",
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
                        associationField: "",
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
                    associationField: "Dependencies",
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
                        associationField: "",
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
                    github_com_fullstack_lang_gonggooglecharts_go_table: ["github_com_fullstack_lang_gonggooglecharts_go-" + path]
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
                        github_com_fullstack_lang_gonggooglecharts_go_table: ["github_com_fullstack_lang_gonggooglecharts_go-" + path.toLowerCase()]
                    }
                }]);
        }
        if (type == GongNodeType.INSTANCE) {
            this.router.navigate([{
                    outlets: {
                        github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + structName.toLowerCase() + "-presentation", id]
                    }
                }]);
        }
    }
    setEditorRouterOutlet(path) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + path.toLowerCase()]
                }
            }]);
    }
    setEditorSpecialRouterOutlet(node) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + node.associatedStructName.toLowerCase() + "-adder", node.id, node.structName, node.associationField]
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
            this.height = 40;
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
                let taskList = new Array();
                taskList = ganttChart.Tasks;
                var sortedTaskList = taskList.sort((t1, t2) => {
                    if (t1.Rank > t2.Rank) {
                        return 1;
                    }
                    if (t1.Rank < t2.Rank) {
                        return -1;
                    }
                    return 0;
                });
                this.height = this.height + sortedTaskList.length * 20;
                console.log("height " + this.height);
                sortedTaskList.forEach(task => {
                    // console.log(task.Name + " start at " + task.Start + " with ressource " + task.Ressource?.Name)
                    var _a, _b;
                    let start = new Date(task.Start);
                    // console.log("start " + start.getFullYear() + " " + start.getMonth() + " " + start.getDay())
                    let end = new Date(task.End);
                    // console.log("end " + end.getFullYear() + " " + end.getMonth() + " " + end.getDay())
                    // see https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format
                    let googleGanttTask = new (GoogleGanttTask);
                    googleGanttTask.Task_ID = task.Name;
                    googleGanttTask.Task_Name = task.DisplayedName;
                    googleGanttTask.Resource = (_a = task.Ressource) === null || _a === void 0 ? void 0 : _a.Name;
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
                            dependencies += (_b = dependency.Task) === null || _b === void 0 ? void 0 : _b.Name;
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
    } }, decls: 4, vars: 2, consts: [[4, "ngFor", "ngForOf"], [1, "commit"], ["width", "1200", "height", "18000", 3, "title", "type", "data", "columns", "options", "ready", "select", "error", "mouseenter", "mouseleave"]], template: function GanttchartComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");


/*
 * Behavior subject
 */






class DependencyService {
    constructor(http, location, document) {
        this.http = http;
        this.location = location;
        this.document = document;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Kamar Raïmo: Adding a way to communicate between components that share information
        // so that they are notified of a change.
        this.DependencyServiceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        // path to the service share the same origin with the path to the document
        // get the origin in the URL to the document
        let origin = this.document.location.origin;
        // if debugging with ng, replace 4200 with 8080
        origin = origin.replace("4200", "8080");
        // compute path to the service
        this.dependencysUrl = origin + '/api/github.com/fullstack-lang/gonggooglecharts/go/v1/dependencys';
    }
    /** GET dependencys from the server */
    getDependencys() {
        return this.http.get(this.dependencysUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched dependencys')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDependencys', [])));
    }
    /** GET dependency by id. Will 404 if id not found */
    getDependency(id) {
        const url = `${this.dependencysUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched dependency id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getDependency id=${id}`)));
    }
    //////// Save methods //////////
    /** POST: add a new dependency to the server */
    postDependency(dependencydb) {
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        dependencydb.Task = {};
        let _Task_Dependencies_reverse = dependencydb.Task_Dependencies_reverse;
        dependencydb.Task_Dependencies_reverse = {};
        return this.http.post(this.dependencysUrl, dependencydb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            dependencydb.Task_Dependencies_reverse = _Task_Dependencies_reverse;
            this.log(`posted dependencydb id=${dependencydb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postDependency')));
    }
    /** DELETE: delete the dependencydb from the server */
    deleteDependency(dependencydb) {
        const id = typeof dependencydb === 'number' ? dependencydb : dependencydb.ID;
        const url = `${this.dependencysUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted dependencydb id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteDependency')));
    }
    /** PUT: update the dependencydb on the server */
    updateDependency(dependencydb) {
        const id = typeof dependencydb === 'number' ? dependencydb : dependencydb.ID;
        const url = `${this.dependencysUrl}/${id}`;
        // insertion point for reset of pointers and reverse pointers (to avoid circular JSON)
        dependencydb.Task = {};
        let _Task_Dependencies_reverse = dependencydb.Task_Dependencies_reverse;
        dependencydb.Task_Dependencies_reverse = {};
        return this.http.put(url, dependencydb, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            // insertion point for restoration of reverse pointers
            dependencydb.Task_Dependencies_reverse = _Task_Dependencies_reverse;
            this.log(`updated dependencydb id=${dependencydb.ID}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateDependency')));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
DependencyService.ɵfac = function DependencyService_Factory(t) { return new (t || DependencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
DependencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DependencyService, factory: DependencyService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _ressource_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ressource-db */ "dPgB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ressource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ressource.service */ "Os04");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




















function RessourcesTableComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RessourcesTableComponent_th_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r16.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
} }
function RessourcesTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RessourcesTableComponent_td_10_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function RessourcesTableComponent_td_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const row_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r20.selection.toggle(row_r18) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r18));
} }
function RessourcesTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Ressource_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Ressource_r22.Name, " ");
} }
function RessourcesTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Ressource_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Ressource_r23.ID, " ");
} }
function RessourcesTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function RessourcesTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RessourcesTableComponent_td_19_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ressource_r24 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.setEditorRouterOutlet(ressource_r24.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function RessourcesTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RessourcesTableComponent_td_22_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ressource_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.deleteRessource(ressource_r28.ID, ressource_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function RessourcesTableComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 23);
} }
function RessourcesTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RessourcesTableComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34); const row_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.setPresentationRouterOutlet(row_r32.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RessourcesTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
function RessourcesTableComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RessourcesTableComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [10, 20, 50, 100, 500, 1000]; };
const allowMultiSelect = true;
// TableComponent is initilizaed from different routes
// TableComponentMode detail different cases 
var TableComponentMode;
(function (TableComponentMode) {
    TableComponentMode[TableComponentMode["DISPLAY_MODE"] = 0] = "DISPLAY_MODE";
    TableComponentMode[TableComponentMode["ONE_MANY_ASSOCIATION_MODE"] = 1] = "ONE_MANY_ASSOCIATION_MODE";
    TableComponentMode[TableComponentMode["MANY_MANY_ASSOCIATION_MODE"] = 2] = "MANY_MANY_ASSOCIATION_MODE";
})(TableComponentMode || (TableComponentMode = {}));
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
        // compute mode
        if (dialogData == undefined) {
            this.mode = TableComponentMode.DISPLAY_MODE;
        }
        else {
            switch (dialogData.SelectionMode) {
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.ONE_MANY_ASSOCIATION_MODE;
                    break;
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.MANY_MANY_ASSOCIATION_MODE;
                    break;
                default:
            }
        }
        // observable for changes in structs
        this.ressourceService.RessourceServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getRessources();
            }
        });
        if (this.mode == TableComponentMode.DISPLAY_MODE) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngAfterViewInit() {
        // enable sorting on all fields (including pointers and reverse pointer)
        this.matTableDataSource.sortingDataAccessor = (ressourceDB, property) => {
            switch (property) {
                // insertion point for specific sorting accessor
                case 'Name':
                    return ressourceDB.Name;
                default:
                    return _ressource_db__WEBPACK_IMPORTED_MODULE_6__["RessourceDB"][property];
            }
        };
        // enable filtering on all fields (including pointers and reverse pointer, which is not done by default)
        this.matTableDataSource.filterPredicate = (ressourceDB, filter) => {
            // filtering is based on finding a lower case filter into a concatenated string
            // the ressourceDB properties
            let mergedContent = "";
            // insertion point for merging of fields
            mergedContent += ressourceDB.Name.toLowerCase();
            let isSelected = mergedContent.includes(filter.toLowerCase());
            return isSelected;
        };
        this.matTableDataSource.sort = this.sort;
        this.matTableDataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.matTableDataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.getRessources();
        this.matTableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ressources);
    }
    getRessources() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.ressources = this.frontRepo.Ressources_array;
            // insertion point for variables Recoveries
            // in case the component is called as a selection component
            if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
                this.ressources.forEach(ressource => {
                    let ID = this.dialogData.ID;
                    let revPointer = ressource[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(ressource);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
                let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
                let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
                if (sourceInstance[this.dialogData.SourceField]) {
                    for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                        let ressource = associationInstance[this.dialogData.IntermediateStructField];
                        this.initialSelection.push(ressource);
                    }
                }
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            // update the mat table data source
            this.matTableDataSource.data = this.ressources;
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
        });
    }
    editRessource(ressourceID, ressource) {
    }
    // display ressource in router
    displayRessourceInRouter(ressourceID) {
        this.router.navigate(["github_com_fullstack_lang_gonggooglecharts_go-" + "ressource-display", ressourceID]);
    }
    // set editor outlet
    setEditorRouterOutlet(ressourceID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "ressource-detail", ressourceID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(ressourceID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + "ressource-presentation", ressourceID]
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
        if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
            let toUpdate = new Set();
            // reset all initial selection of ressource that belong to ressource
            this.initialSelection.forEach(ressource => {
                ressource[this.dialogData.ReversePointer].Int64 = 0;
                ressource[this.dialogData.ReversePointer].Valid = true;
                toUpdate.add(ressource);
            });
            // from selection, set ressource that belong to ressource
            this.selection.selected.forEach(ressource => {
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
                });
            });
        }
        if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
            let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
            let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
            // First, parse all instance of the association struct and remove the instance
            // that have unselect
            let unselectedRessource = new Set();
            for (let ressource of this.initialSelection) {
                if (this.selection.selected.includes(ressource)) {
                    // console.log("ressource " + ressource.Name + " is still selected")
                }
                else {
                    console.log("ressource " + ressource.Name + " has been unselected");
                    unselectedRessource.add(ressource.ID);
                    console.log("is unselected " + unselectedRessource.has(ressource.ID));
                }
            }
            // delete the association instance
            if (sourceInstance[this.dialogData.SourceField]) {
                for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                    let ressource = associationInstance[this.dialogData.IntermediateStructField];
                    if (unselectedRessource.has(ressource.ID)) {
                        this.frontRepoService.deleteService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                }
            }
            // is the source array is emptyn create it
            if (sourceInstance[this.dialogData.SourceField] == undefined) {
                sourceInstance[this.dialogData.SourceField] = new Array();
            }
            // second, parse all instance of the selected
            if (sourceInstance[this.dialogData.SourceField]) {
                this.selection.selected.forEach(ressource => {
                    if (!this.initialSelection.includes(ressource)) {
                        // console.log("ressource " + ressource.Name + " has been added to the selection")
                        let associationInstance = {
                            Name: sourceInstance["Name"] + "-" + ressource.Name,
                        };
                        associationInstance[this.dialogData.IntermediateStructField + "ID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Int64 = ressource.ID;
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Valid = true;
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Int64 = sourceInstance["ID"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Valid = true;
                        this.frontRepoService.postService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                    else {
                        // console.log("ressource " + ressource.Name + " is still selected")
                    }
                });
            }
            // this.selection = new SelectionModel<RessourceDB>(allowMultiSelect, this.initialSelection);
        }
        // why pizza ?
        this.dialogRef.close('Pizza!');
    }
}
RessourcesTableComponent.ɵfac = function RessourcesTableComponent_Factory(t) { return new (t || RessourcesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ressource_service__WEBPACK_IMPORTED_MODULE_8__["RessourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
RessourcesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RessourcesTableComponent, selectors: [["app-ressourcestable"]], viewQuery: function RessourcesTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 28, vars: 8, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [4, "ngIf"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function RessourcesTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function RessourcesTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RessourcesTableComponent_h1_6_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RessourcesTableComponent_th_9_Template, 2, 2, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RessourcesTableComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RessourcesTableComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RessourcesTableComponent_td_13_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, RessourcesTableComponent_th_15_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, RessourcesTableComponent_td_16_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RessourcesTableComponent_th_18_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RessourcesTableComponent_td_19_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, RessourcesTableComponent_th_21_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RessourcesTableComponent_td_22_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RessourcesTableComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RessourcesTableComponent_tr_24_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, RessourcesTableComponent_tr_25_Template, 3, 1, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RessourcesTableComponent_button_27_Template, 2, 0, "button", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.matTableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZXMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsbUNBQW1DOztBQUNuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7OztDQUlDOztBQUNEO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUEsZ0RBQWdEOztBQUNoRDtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJyZXNzb3VyY2VzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCBVSSBmb250LXNpemUgKi9cbioge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuPT09PT09PT09PT09PT09PT1cbj09PT09IFRBQkxFID09PT09XG49PT09PT09PT09PT09PT09PVxuKi9cbi50YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLnRhYmxlX19zYXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZSAubWF0LXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFNwYWNlIGJldHdlZW4gY29sdW1ucyBpbiB0aGUgbWF0ZXJpYWwgdGFibGUgKi9cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreS1ib3JkZXItZWxlbS1sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufSJdfQ== */"] });


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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















const _c0 = function () { return { standalone: true }; };
function TaskDetailComponent_form_0_mat_grid_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_mat_grid_list_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.task.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_mat_grid_list_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.toggleTextArea("Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r1.task.Name);
} }
function TaskDetailComponent_form_0_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_mat_form_field_4_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.task.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r2.task.Name);
} }
function TaskDetailComponent_form_0_mat_grid_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "DisplayedName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_mat_grid_list_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.task.DisplayedName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_mat_grid_list_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.toggleTextArea("DisplayedName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r3.task.DisplayedName);
} }
function TaskDetailComponent_form_0_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "DisplayedName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.task.DisplayedName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r4.task.DisplayedName);
} }
function TaskDetailComponent_form_0_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ressource_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ressource_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ressource_r17.Name, " ");
} }
function TaskDetailComponent_form_0_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganttchart_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ganttchart_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ganttchart_r18.Name, " ");
} }
function TaskDetailComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TaskDetailComponent_form_0_mat_grid_list_3_Template, 10, 4, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TaskDetailComponent_form_0_mat_form_field_4_Template, 4, 3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TaskDetailComponent_form_0_mat_grid_list_5_Template, 10, 4, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TaskDetailComponent_form_0_mat_form_field_6_Template, 4, 3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ressource");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function TaskDetailComponent_form_0_Template_mat_select_valueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.task.Ressource = $event; })("selectionChange", function TaskDetailComponent_form_0_Template_mat_select_selectionChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.fillUpNameIfEmpty($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TaskDetailComponent_form_0_mat_option_13_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.task.Start = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.task.End = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-grid-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Duration Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.Duration_Hours = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Duration Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.Duration_Minutes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Duration Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.Duration_Seconds = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "PercentComplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.task.PercentComplete = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-grid-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.openReverseSelection("Dependency", "Task_DependenciesDBID", "ONE_MANY_ASSOCIATION_MODE", "", "", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Dependencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.openDragAndDropOrdering("Dependency", "Task_DependenciesDBID"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " shuffle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.task.Rank = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "(GanttChart) Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_mat_select_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.task.GanttChart_Tasks_reverse = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, TaskDetailComponent_form_0_mat_option_60_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Save task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isATextArea("DisplayedName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isATextArea("DisplayedName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx_r0.compareObjects)("value", ctx_r0.task.Ressource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.Ressources_array);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c0))("ngModel", ctx_r0.task.Start);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c0))("ngModel", ctx_r0.task.End);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c0))("ngModel", ctx_r0.Duration_Hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c0))("ngModel", ctx_r0.Duration_Minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c0))("ngModel", ctx_r0.Duration_Seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](33, _c0))("ngModel", ctx_r0.task.PercentComplete)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c0))("ngModel", ctx_r0.task.Rank)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx_r0.compareObjects)("ngModel", ctx_r0.task.GanttChart_Tasks_reverse)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.GanttCharts_array);
} }
// TaskDetailComponent is initilizaed from different routes
// TaskDetailComponentState detail different cases 
var TaskDetailComponentState;
(function (TaskDetailComponentState) {
    TaskDetailComponentState[TaskDetailComponentState["CREATE_INSTANCE"] = 0] = "CREATE_INSTANCE";
    TaskDetailComponentState[TaskDetailComponentState["UPDATE_INSTANCE"] = 1] = "UPDATE_INSTANCE";
    // insertion point for declarations of enum values of state
    TaskDetailComponentState[TaskDetailComponentState["CREATE_INSTANCE_WITH_ASSOCIATION_GanttChart_Tasks_SET"] = 2] = "CREATE_INSTANCE_WITH_ASSOCIATION_GanttChart_Tasks_SET";
})(TaskDetailComponentState || (TaskDetailComponentState = {}));
class TaskDetailComponent {
    constructor(taskService, frontRepoService, dialog, route, router) {
        this.taskService = taskService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // this stores the information related to string fields
        // if false, the field is inputed with an <input ...> form 
        // if true, it is inputed with a <textarea ...> </textarea>
        this.mapFields_displayAsTextArea = new Map();
    }
    ngOnInit() {
        // compute state
        this.id = +this.route.snapshot.paramMap.get('id');
        this.originStruct = this.route.snapshot.paramMap.get('originStruct');
        this.originStructFieldName = this.route.snapshot.paramMap.get('originStructFieldName');
        const association = this.route.snapshot.paramMap.get('association');
        if (this.id == 0) {
            this.state = TaskDetailComponentState.CREATE_INSTANCE;
        }
        else {
            if (this.originStruct == undefined) {
                this.state = TaskDetailComponentState.UPDATE_INSTANCE;
            }
            else {
                switch (this.originStructFieldName) {
                    // insertion point for state computation
                    case "Tasks":
                        console.log("Task" + " is instanciated with back pointer to instance " + this.id + " GanttChart association Tasks");
                        this.state = TaskDetailComponentState.CREATE_INSTANCE_WITH_ASSOCIATION_GanttChart_Tasks_SET;
                        break;
                    default:
                        console.log(this.originStructFieldName + " is unkown association");
                }
            }
        }
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            switch (this.state) {
                case TaskDetailComponentState.CREATE_INSTANCE:
                    this.task = new (_task_db__WEBPACK_IMPORTED_MODULE_0__["TaskDB"]);
                    break;
                case TaskDetailComponentState.UPDATE_INSTANCE:
                    this.task = frontRepo.Tasks.get(this.id);
                    break;
                // insertion point for init of association field
                case TaskDetailComponentState.CREATE_INSTANCE_WITH_ASSOCIATION_GanttChart_Tasks_SET:
                    this.task = new (_task_db__WEBPACK_IMPORTED_MODULE_0__["TaskDB"]);
                    this.task.GanttChart_Tasks_reverse = frontRepo.GanttCharts.get(this.id);
                    break;
                default:
                    console.log(this.state + " is unkown state");
            }
            // insertion point for recovery of form controls value for bool fields
            // computation of Hours, Minutes, Seconds for Duration
            this.Duration_Hours = Math.floor(this.task.Duration / (3600 * 1000 * 1000 * 1000));
            this.Duration_Minutes = Math.floor(this.task.Duration % (3600 * 1000 * 1000 * 1000) / (60 * 1000 * 1000 * 1000));
            this.Duration_Seconds = this.task.Duration % (60 * 1000 * 1000 * 1000) / (1000 * 1000 * 1000);
        });
    }
    save() {
        // some fields needs to be translated into serializable forms
        // pointers fields, after the translation, are nulled in order to perform serialization
        // insertion point for translation/nullation of each field
        if (this.task.RessourceID == undefined) {
            this.task.RessourceID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["NullInt64"];
        }
        if (this.task.Ressource != undefined) {
            this.task.RessourceID.Int64 = this.task.Ressource.ID;
            this.task.RessourceID.Valid = true;
        }
        else {
            this.task.RessourceID.Int64 = 0;
            this.task.RessourceID.Valid = true;
        }
        this.task.Duration =
            this.Duration_Hours * (3600 * 1000 * 1000 * 1000) +
                this.Duration_Minutes * (60 * 1000 * 1000 * 1000) +
                this.Duration_Seconds * (1000 * 1000 * 1000);
        // save from the front pointer space to the non pointer space for serialization
        // insertion point for translation/nullation of each pointers
        if (this.task.GanttChart_Tasks_reverse != undefined) {
            if (this.task.GanttChart_TasksDBID == undefined) {
                this.task.GanttChart_TasksDBID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["NullInt64"];
            }
            this.task.GanttChart_TasksDBID.Int64 = this.task.GanttChart_Tasks_reverse.ID;
            this.task.GanttChart_TasksDBID.Valid = true;
            if (this.task.GanttChart_TasksDBID_Index == undefined) {
                this.task.GanttChart_TasksDBID_Index = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["NullInt64"];
            }
            this.task.GanttChart_TasksDBID_Index.Valid = true;
            this.task.GanttChart_Tasks_reverse = undefined; // very important, otherwise, circular JSON
        }
        switch (this.state) {
            case TaskDetailComponentState.UPDATE_INSTANCE:
                this.taskService.updateTask(this.task)
                    .subscribe(task => {
                    this.taskService.TaskServiceChanged.next("update");
                });
                break;
            default:
                this.taskService.postTask(this.task).subscribe(task => {
                    this.taskService.TaskServiceChanged.next("post");
                    this.task = {}; // reset fields
                });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField, selectionMode, sourceField, intermediateStructField, nextAssociatedStruct) {
        console.log("mode " + selectionMode);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        let dialogData = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["DialogData"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.task.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.task.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            // set up the source
            dialogData.SourceStruct = "Task";
            dialogData.SourceField = sourceField;
            // set up the intermediate struct
            dialogData.IntermediateStruct = AssociatedStruct;
            dialogData.IntermediateStructField = intermediateStructField;
            // set up the end struct
            dialogData.NextAssociationStruct = nextAssociatedStruct;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(nextAssociatedStruct).get(nextAssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
    }
    openDragAndDropOrdering(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.task.ID,
            ReversePointer: reverseField,
            OrderingMode: true,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfSortingComponents"].get(AssociatedStruct).get(AssociatedStruct + 'SortingComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    fillUpNameIfEmpty(event) {
        if (this.task.Name == undefined) {
            this.task.Name = event.value.Name;
        }
    }
    toggleTextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            let displayAsTextArea = this.mapFields_displayAsTextArea.get(fieldName);
            this.mapFields_displayAsTextArea.set(fieldName, !displayAsTextArea);
        }
        else {
            this.mapFields_displayAsTextArea.set(fieldName, true);
        }
    }
    isATextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            return this.mapFields_displayAsTextArea.get(fieldName);
        }
        else {
            return false;
        }
    }
    compareObjects(o1, o2) {
        if ((o1 === null || o1 === void 0 ? void 0 : o1.ID) == (o2 === null || o2 === void 0 ? void 0 : o2.ID)) {
            return true;
        }
        else {
            return false;
        }
    }
}
TaskDetailComponent.ɵfac = function TaskDetailComponent_Factory(t) { return new (t || TaskDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_1__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
TaskDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskDetailComponent, selectors: [["app-task-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], ["cols", "5", "rowHeight", "2:1", 4, "ngIf"], ["mat-form-field", "", "class", "detail-full-width", 4, "ngIf"], [1, "detail-full-width"], [3, "compareWith", "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["cols", "3", "rowHeight", "4:1"], [1, "details_hours_width"], ["type", "number", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "details_minutes_width"], [1, "details_seconds_width"], ["cols", "5", "rowHeight", "2:1"], [3, "colspan"], ["mat-raised-button", "", 3, "click"], [3, "compareWith", "ngModel", "ngModelOptions", "ngModelChange"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-form-field", "", 1, "detail-full-width"], [3, "value"]], template: function TaskDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TaskDetailComponent_form_0_Template, 64, 38, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: [".details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 30px 30px;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.detail-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoidGFzay1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cblxuLmRldGFpbHNfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZGV0YWlsLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlsc19fc2F2ZSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZGV0YWlsc19ob3Vyc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uZGV0YWlsc19taW51dGVzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5kZXRhaWxzX3NlY29uZHNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class CommitNbService {
    constructor(http, location, document) {
        this.http = http;
        this.location = location;
        this.document = document;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // path to the service share the same origin with the path to the document
        // get the origin in the URL to the document
        let origin = this.document.location.origin;
        // if debugging with ng, replace 4200 with 8080
        origin = origin.replace("4200", "8080");
        // compute path to the service
        this.commitNbUrl = origin + '/api/github.com/fullstack-lang/gonggooglecharts/go/commitnb';
    }
    // observable of the commit nb getter
    getCommitNb() {
        return this.http.get(this.commitNbUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched commit nb')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCommitNb', -1)));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
CommitNbService.ɵfac = function CommitNbService_Factory(t) { return new (t || CommitNbService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
CommitNbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CommitNbService, factory: CommitNbService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _map_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-components */ "XLRw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















const _c0 = function () { return { standalone: true }; };
function DependencyDetailComponent_form_0_mat_grid_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-grid-tile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DependencyDetailComponent_form_0_mat_grid_list_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.dependency.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DependencyDetailComponent_form_0_mat_grid_list_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.toggleTextArea("Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r1.dependency.Name);
} }
function DependencyDetailComponent_form_0_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DependencyDetailComponent_form_0_mat_form_field_4_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.dependency.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r2.dependency.Name);
} }
function DependencyDetailComponent_form_0_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", task_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r10.Name, " ");
} }
function DependencyDetailComponent_form_0_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", task_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", task_r11.Name, " ");
} }
function DependencyDetailComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "dependency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DependencyDetailComponent_form_0_mat_grid_list_3_Template, 10, 4, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DependencyDetailComponent_form_0_mat_form_field_4_Template, 4, 3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function DependencyDetailComponent_form_0_Template_mat_select_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.dependency.Task = $event; })("selectionChange", function DependencyDetailComponent_form_0_Template_mat_select_selectionChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.fillUpNameIfEmpty($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DependencyDetailComponent_form_0_mat_option_11_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "(Task) Dependencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DependencyDetailComponent_form_0_Template_mat_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.dependency.Task_Dependencies_reverse = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DependencyDetailComponent_form_0_mat_option_18_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DependencyDetailComponent_form_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Save dependency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isATextArea("Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx_r0.compareObjects)("value", ctx_r0.dependency.Task);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.Tasks_array);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx_r0.compareObjects)("ngModel", ctx_r0.dependency.Task_Dependencies_reverse)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frontRepo.Tasks_array);
} }
// DependencyDetailComponent is initilizaed from different routes
// DependencyDetailComponentState detail different cases 
var DependencyDetailComponentState;
(function (DependencyDetailComponentState) {
    DependencyDetailComponentState[DependencyDetailComponentState["CREATE_INSTANCE"] = 0] = "CREATE_INSTANCE";
    DependencyDetailComponentState[DependencyDetailComponentState["UPDATE_INSTANCE"] = 1] = "UPDATE_INSTANCE";
    // insertion point for declarations of enum values of state
    DependencyDetailComponentState[DependencyDetailComponentState["CREATE_INSTANCE_WITH_ASSOCIATION_Task_Dependencies_SET"] = 2] = "CREATE_INSTANCE_WITH_ASSOCIATION_Task_Dependencies_SET";
})(DependencyDetailComponentState || (DependencyDetailComponentState = {}));
class DependencyDetailComponent {
    constructor(dependencyService, frontRepoService, dialog, route, router) {
        this.dependencyService = dependencyService;
        this.frontRepoService = frontRepoService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        // this stores the information related to string fields
        // if false, the field is inputed with an <input ...> form 
        // if true, it is inputed with a <textarea ...> </textarea>
        this.mapFields_displayAsTextArea = new Map();
    }
    ngOnInit() {
        // compute state
        this.id = +this.route.snapshot.paramMap.get('id');
        this.originStruct = this.route.snapshot.paramMap.get('originStruct');
        this.originStructFieldName = this.route.snapshot.paramMap.get('originStructFieldName');
        const association = this.route.snapshot.paramMap.get('association');
        if (this.id == 0) {
            this.state = DependencyDetailComponentState.CREATE_INSTANCE;
        }
        else {
            if (this.originStruct == undefined) {
                this.state = DependencyDetailComponentState.UPDATE_INSTANCE;
            }
            else {
                switch (this.originStructFieldName) {
                    // insertion point for state computation
                    case "Dependencies":
                        console.log("Dependency" + " is instanciated with back pointer to instance " + this.id + " Task association Dependencies");
                        this.state = DependencyDetailComponentState.CREATE_INSTANCE_WITH_ASSOCIATION_Task_Dependencies_SET;
                        break;
                    default:
                        console.log(this.originStructFieldName + " is unkown association");
                }
            }
        }
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
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            switch (this.state) {
                case DependencyDetailComponentState.CREATE_INSTANCE:
                    this.dependency = new (_dependency_db__WEBPACK_IMPORTED_MODULE_0__["DependencyDB"]);
                    break;
                case DependencyDetailComponentState.UPDATE_INSTANCE:
                    this.dependency = frontRepo.Dependencys.get(this.id);
                    break;
                // insertion point for init of association field
                case DependencyDetailComponentState.CREATE_INSTANCE_WITH_ASSOCIATION_Task_Dependencies_SET:
                    this.dependency = new (_dependency_db__WEBPACK_IMPORTED_MODULE_0__["DependencyDB"]);
                    this.dependency.Task_Dependencies_reverse = frontRepo.Tasks.get(this.id);
                    break;
                default:
                    console.log(this.state + " is unkown state");
            }
            // insertion point for recovery of form controls value for bool fields
        });
    }
    save() {
        // some fields needs to be translated into serializable forms
        // pointers fields, after the translation, are nulled in order to perform serialization
        // insertion point for translation/nullation of each field
        if (this.dependency.TaskID == undefined) {
            this.dependency.TaskID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["NullInt64"];
        }
        if (this.dependency.Task != undefined) {
            this.dependency.TaskID.Int64 = this.dependency.Task.ID;
            this.dependency.TaskID.Valid = true;
        }
        else {
            this.dependency.TaskID.Int64 = 0;
            this.dependency.TaskID.Valid = true;
        }
        // save from the front pointer space to the non pointer space for serialization
        // insertion point for translation/nullation of each pointers
        if (this.dependency.Task_Dependencies_reverse != undefined) {
            if (this.dependency.Task_DependenciesDBID == undefined) {
                this.dependency.Task_DependenciesDBID = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["NullInt64"];
            }
            this.dependency.Task_DependenciesDBID.Int64 = this.dependency.Task_Dependencies_reverse.ID;
            this.dependency.Task_DependenciesDBID.Valid = true;
            if (this.dependency.Task_DependenciesDBID_Index == undefined) {
                this.dependency.Task_DependenciesDBID_Index = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["NullInt64"];
            }
            this.dependency.Task_DependenciesDBID_Index.Valid = true;
            this.dependency.Task_Dependencies_reverse = undefined; // very important, otherwise, circular JSON
        }
        switch (this.state) {
            case DependencyDetailComponentState.UPDATE_INSTANCE:
                this.dependencyService.updateDependency(this.dependency)
                    .subscribe(dependency => {
                    this.dependencyService.DependencyServiceChanged.next("update");
                });
                break;
            default:
                this.dependencyService.postDependency(this.dependency).subscribe(dependency => {
                    this.dependencyService.DependencyServiceChanged.next("post");
                    this.dependency = {}; // reset fields
                });
        }
    }
    // openReverseSelection is a generic function that calls dialog for the edition of 
    // ONE-MANY association
    // It uses the MapOfComponent provided by the front repo
    openReverseSelection(AssociatedStruct, reverseField, selectionMode, sourceField, intermediateStructField, nextAssociatedStruct) {
        console.log("mode " + selectionMode);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        let dialogData = new _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["DialogData"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.dependency.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(AssociatedStruct).get(AssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
        if (selectionMode == _front_repo_service__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE) {
            dialogData.ID = this.dependency.ID;
            dialogData.ReversePointer = reverseField;
            dialogData.OrderingMode = false;
            dialogData.SelectionMode = selectionMode;
            // set up the source
            dialogData.SourceStruct = "Dependency";
            dialogData.SourceField = sourceField;
            // set up the intermediate struct
            dialogData.IntermediateStruct = AssociatedStruct;
            dialogData.IntermediateStructField = intermediateStructField;
            // set up the end struct
            dialogData.NextAssociationStruct = nextAssociatedStruct;
            dialogConfig.data = dialogData;
            const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfComponents"].get(nextAssociatedStruct).get(nextAssociatedStruct + 'sTableComponent'), dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
            });
        }
    }
    openDragAndDropOrdering(AssociatedStruct, reverseField) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            ID: this.dependency.ID,
            ReversePointer: reverseField,
            OrderingMode: true,
        };
        const dialogRef = this.dialog.open(_map_components__WEBPACK_IMPORTED_MODULE_2__["MapOfSortingComponents"].get(AssociatedStruct).get(AssociatedStruct + 'SortingComponent'), dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    fillUpNameIfEmpty(event) {
        if (this.dependency.Name == undefined) {
            this.dependency.Name = event.value.Name;
        }
    }
    toggleTextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            let displayAsTextArea = this.mapFields_displayAsTextArea.get(fieldName);
            this.mapFields_displayAsTextArea.set(fieldName, !displayAsTextArea);
        }
        else {
            this.mapFields_displayAsTextArea.set(fieldName, true);
        }
    }
    isATextArea(fieldName) {
        if (this.mapFields_displayAsTextArea.has(fieldName)) {
            return this.mapFields_displayAsTextArea.get(fieldName);
        }
        else {
            return false;
        }
    }
    compareObjects(o1, o2) {
        if ((o1 === null || o1 === void 0 ? void 0 : o1.ID) == (o2 === null || o2 === void 0 ? void 0 : o2.ID)) {
            return true;
        }
        else {
            return false;
        }
    }
}
DependencyDetailComponent.ɵfac = function DependencyDetailComponent_Factory(t) { return new (t || DependencyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_5__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_1__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DependencyDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DependencyDetailComponent, selectors: [["app-dependency-detail"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details__title"], ["cols", "5", "rowHeight", "2:1", 4, "ngIf"], ["mat-form-field", "", "class", "detail-full-width", 4, "ngIf"], [1, "detail-full-width"], [3, "compareWith", "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "compareWith", "ngModel", "ngModelOptions", "ngModelChange"], [1, "details__save"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["cols", "5", "rowHeight", "2:1"], [3, "colspan"], ["mat-form-field", "", 1, "detail-full-width"], ["name", "", "matInput", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [3, "value"]], template: function DependencyDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DependencyDetailComponent_form_0_Template, 22, 10, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dependency);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: [".details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 30px 30px;\n}\n\n.details__title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background: #ffffff;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.detail-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.details__save[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 5px;\n    margin-top: 15px;\n}\n\n.details_hours_width[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 150px;\n}\n\n.details_minutes_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n\n.details_seconds_width[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3ktZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZGVwZW5kZW5jeS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cblxuLmRldGFpbHNfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZGV0YWlsLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlsc19fc2F2ZSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZGV0YWlsc19ob3Vyc193aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uZGV0YWlsc19taW51dGVzX3dpZHRoIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5kZXRhaWxzX3NlY29uZHNfd2lkdGgge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "tmWy":
/*!**********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/ganttchart-sorting/ganttchart-sorting.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GanttChartSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartSortingComponent", function() { return GanttChartSortingComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function GanttChartSortingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganttchart_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ganttchart_r1.Name);
} }
class GanttChartSortingComponent {
    constructor(ganttchartService, frontRepoService, 
    // not null if the component is called as a selection component of ganttchart instances
    dialogRef, dialogData, router) {
        this.ganttchartService = ganttchartService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        // array of GanttChart instances that are in the association
        this.associatedGanttCharts = new Array();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getGanttCharts();
    }
    getGanttCharts() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            let index = 0;
            for (let ganttchart of this.frontRepo.GanttCharts_array) {
                let ID = this.dialogData.ID;
                let revPointerID = ganttchart[this.dialogData.ReversePointer];
                let revPointerID_Index = ganttchart[this.dialogData.ReversePointer + "_Index"];
                if (revPointerID.Int64 == ID) {
                    if (revPointerID_Index == undefined) {
                        revPointerID_Index = new _front_repo_service__WEBPACK_IMPORTED_MODULE_2__["NullInt64"];
                        revPointerID_Index.Valid = true;
                        revPointerID_Index.Int64 = index++;
                    }
                    this.associatedGanttCharts.push(ganttchart);
                }
            }
            // sort associated ganttchart according to order
            this.associatedGanttCharts.sort((t1, t2) => {
                let t1_revPointerID_Index = t1[this.dialogData.ReversePointer + "_Index"];
                let t2_revPointerID_Index = t2[this.dialogData.ReversePointer + "_Index"];
                if (t1_revPointerID_Index && t2_revPointerID_Index) {
                    if (t1_revPointerID_Index.Int64 > t2_revPointerID_Index.Int64) {
                        return 1;
                    }
                    if (t1_revPointerID_Index.Int64 < t2_revPointerID_Index.Int64) {
                        return -1;
                    }
                }
                return 0;
            });
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.associatedGanttCharts, event.previousIndex, event.currentIndex);
        // set the order of GanttChart instances
        let index = 0;
        for (let ganttchart of this.associatedGanttCharts) {
            let revPointerID_Index = ganttchart[this.dialogData.ReversePointer + "_Index"];
            revPointerID_Index.Valid = true;
            revPointerID_Index.Int64 = index++;
        }
    }
    save() {
        this.associatedGanttCharts.forEach(ganttchart => {
            this.ganttchartService.updateGanttChart(ganttchart)
                .subscribe(ganttchart => {
                this.ganttchartService.GanttChartServiceChanged.next("update");
            });
        });
        this.dialogRef.close('Sorting of ' + this.dialogData.ReversePointer + ' done');
    }
}
GanttChartSortingComponent.ɵfac = function GanttChartSortingComponent_Factory(t) { return new (t || GanttChartSortingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_4__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
GanttChartSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GanttChartSortingComponent, selectors: [["lib-ganttchart-sorting"]], decls: 4, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"], ["cdkDrag", "", 1, "example-box"]], template: function GanttChartSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function GanttChartSortingComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GanttChartSortingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GanttChartSortingComponent_Template_button_click_2_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\nSave\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.associatedGanttCharts);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".example-list[_ngcontent-%COMP%] {\n    width: 500px;\n    max-width: 100%;\n    border: solid 1px #ccc;\n    min-height: 60px;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnQtc29ydGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxSEFBcUg7QUFDekg7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImdhbnR0Y2hhcnQtc29ydGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGlzdCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi50YWJsZV9fc2F2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _ganttchart_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ganttchart-db */ "zFDn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ganttchart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ganttchart.service */ "WjmK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




















function GanttChartsTableComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "ganttchart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function GanttChartsTableComponent_th_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r16.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
} }
function GanttChartsTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GanttChartsTableComponent_td_10_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function GanttChartsTableComponent_td_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const row_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r20.selection.toggle(row_r18) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r18));
} }
function GanttChartsTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const GanttChart_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", GanttChart_r22.Name, " ");
} }
function GanttChartsTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const GanttChart_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", GanttChart_r23.ID, " ");
} }
function GanttChartsTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function GanttChartsTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GanttChartsTableComponent_td_19_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ganttchart_r24 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.setEditorRouterOutlet(ganttchart_r24.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function GanttChartsTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GanttChartsTableComponent_td_22_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ganttchart_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.deleteGanttChart(ganttchart_r28.ID, ganttchart_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function GanttChartsTableComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 23);
} }
function GanttChartsTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GanttChartsTableComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34); const row_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.setPresentationRouterOutlet(row_r32.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GanttChartsTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
function GanttChartsTableComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GanttChartsTableComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [10, 20, 50, 100, 500, 1000]; };
const allowMultiSelect = true;
// TableComponent is initilizaed from different routes
// TableComponentMode detail different cases 
var TableComponentMode;
(function (TableComponentMode) {
    TableComponentMode[TableComponentMode["DISPLAY_MODE"] = 0] = "DISPLAY_MODE";
    TableComponentMode[TableComponentMode["ONE_MANY_ASSOCIATION_MODE"] = 1] = "ONE_MANY_ASSOCIATION_MODE";
    TableComponentMode[TableComponentMode["MANY_MANY_ASSOCIATION_MODE"] = 2] = "MANY_MANY_ASSOCIATION_MODE";
})(TableComponentMode || (TableComponentMode = {}));
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
        // compute mode
        if (dialogData == undefined) {
            this.mode = TableComponentMode.DISPLAY_MODE;
        }
        else {
            switch (dialogData.SelectionMode) {
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.ONE_MANY_ASSOCIATION_MODE;
                    break;
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.MANY_MANY_ASSOCIATION_MODE;
                    break;
                default:
            }
        }
        // observable for changes in structs
        this.ganttchartService.GanttChartServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getGanttCharts();
            }
        });
        if (this.mode == TableComponentMode.DISPLAY_MODE) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
            ];
        }
        else {
            this.displayedColumns = ['select', 'ID',
                "Name",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngAfterViewInit() {
        // enable sorting on all fields (including pointers and reverse pointer)
        this.matTableDataSource.sortingDataAccessor = (ganttchartDB, property) => {
            switch (property) {
                // insertion point for specific sorting accessor
                case 'Name':
                    return ganttchartDB.Name;
                default:
                    return _ganttchart_db__WEBPACK_IMPORTED_MODULE_6__["GanttChartDB"][property];
            }
        };
        // enable filtering on all fields (including pointers and reverse pointer, which is not done by default)
        this.matTableDataSource.filterPredicate = (ganttchartDB, filter) => {
            // filtering is based on finding a lower case filter into a concatenated string
            // the ganttchartDB properties
            let mergedContent = "";
            // insertion point for merging of fields
            mergedContent += ganttchartDB.Name.toLowerCase();
            let isSelected = mergedContent.includes(filter.toLowerCase());
            return isSelected;
        };
        this.matTableDataSource.sort = this.sort;
        this.matTableDataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.matTableDataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.getGanttCharts();
        this.matTableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ganttcharts);
    }
    getGanttCharts() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            this.ganttcharts = this.frontRepo.GanttCharts_array;
            // insertion point for variables Recoveries
            // in case the component is called as a selection component
            if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
                this.ganttcharts.forEach(ganttchart => {
                    let ID = this.dialogData.ID;
                    let revPointer = ganttchart[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(ganttchart);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
                let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
                let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
                if (sourceInstance[this.dialogData.SourceField]) {
                    for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                        let ganttchart = associationInstance[this.dialogData.IntermediateStructField];
                        this.initialSelection.push(ganttchart);
                    }
                }
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            // update the mat table data source
            this.matTableDataSource.data = this.ganttcharts;
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
        });
    }
    editGanttChart(ganttchartID, ganttchart) {
    }
    // display ganttchart in router
    displayGanttChartInRouter(ganttchartID) {
        this.router.navigate(["github_com_fullstack_lang_gonggooglecharts_go-" + "ganttchart-display", ganttchartID]);
    }
    // set editor outlet
    setEditorRouterOutlet(ganttchartID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "ganttchart-detail", ganttchartID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(ganttchartID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + "ganttchart-presentation", ganttchartID]
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
        if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
            let toUpdate = new Set();
            // reset all initial selection of ganttchart that belong to ganttchart
            this.initialSelection.forEach(ganttchart => {
                ganttchart[this.dialogData.ReversePointer].Int64 = 0;
                ganttchart[this.dialogData.ReversePointer].Valid = true;
                toUpdate.add(ganttchart);
            });
            // from selection, set ganttchart that belong to ganttchart
            this.selection.selected.forEach(ganttchart => {
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
                });
            });
        }
        if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
            let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
            let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
            // First, parse all instance of the association struct and remove the instance
            // that have unselect
            let unselectedGanttChart = new Set();
            for (let ganttchart of this.initialSelection) {
                if (this.selection.selected.includes(ganttchart)) {
                    // console.log("ganttchart " + ganttchart.Name + " is still selected")
                }
                else {
                    console.log("ganttchart " + ganttchart.Name + " has been unselected");
                    unselectedGanttChart.add(ganttchart.ID);
                    console.log("is unselected " + unselectedGanttChart.has(ganttchart.ID));
                }
            }
            // delete the association instance
            if (sourceInstance[this.dialogData.SourceField]) {
                for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                    let ganttchart = associationInstance[this.dialogData.IntermediateStructField];
                    if (unselectedGanttChart.has(ganttchart.ID)) {
                        this.frontRepoService.deleteService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                }
            }
            // is the source array is emptyn create it
            if (sourceInstance[this.dialogData.SourceField] == undefined) {
                sourceInstance[this.dialogData.SourceField] = new Array();
            }
            // second, parse all instance of the selected
            if (sourceInstance[this.dialogData.SourceField]) {
                this.selection.selected.forEach(ganttchart => {
                    if (!this.initialSelection.includes(ganttchart)) {
                        // console.log("ganttchart " + ganttchart.Name + " has been added to the selection")
                        let associationInstance = {
                            Name: sourceInstance["Name"] + "-" + ganttchart.Name,
                        };
                        associationInstance[this.dialogData.IntermediateStructField + "ID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Int64 = ganttchart.ID;
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Valid = true;
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Int64 = sourceInstance["ID"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Valid = true;
                        this.frontRepoService.postService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                    else {
                        // console.log("ganttchart " + ganttchart.Name + " is still selected")
                    }
                });
            }
            // this.selection = new SelectionModel<GanttChartDB>(allowMultiSelect, this.initialSelection);
        }
        // why pizza ?
        this.dialogRef.close('Pizza!');
    }
}
GanttChartsTableComponent.ɵfac = function GanttChartsTableComponent_Factory(t) { return new (t || GanttChartsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ganttchart_service__WEBPACK_IMPORTED_MODULE_8__["GanttChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
GanttChartsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GanttChartsTableComponent, selectors: [["app-ganttchartstable"]], viewQuery: function GanttChartsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 28, vars: 8, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [4, "ngIf"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function GanttChartsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function GanttChartsTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, GanttChartsTableComponent_h1_6_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, GanttChartsTableComponent_th_9_Template, 2, 2, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, GanttChartsTableComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, GanttChartsTableComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, GanttChartsTableComponent_td_13_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, GanttChartsTableComponent_th_15_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, GanttChartsTableComponent_td_16_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, GanttChartsTableComponent_th_18_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, GanttChartsTableComponent_td_19_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, GanttChartsTableComponent_th_21_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, GanttChartsTableComponent_td_22_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, GanttChartsTableComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, GanttChartsTableComponent_tr_24_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, GanttChartsTableComponent_tr_25_Template, 3, 1, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, GanttChartsTableComponent_button_27_Template, 2, 0, "button", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.matTableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbnR0Y2hhcnRzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoiZ2FudHRjaGFydHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG49PT09PT09PT09PT09PT09PVxuPT09PT0gVEFCTEUgPT09PT1cbj09PT09PT09PT09PT09PT09XG4qL1xuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zIGluIHRoZSBtYXRlcmlhbCB0YWJsZSAqL1xudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59Il19 */"] });


/***/ }),

/***/ "xSdS":
/*!**********************************************************************************************!*\
  !*** ./projects/gonggooglecharts/src/lib/dependency-sorting/dependency-sorting.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DependencySortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencySortingComponent", function() { return DependencySortingComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dependency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dependency.service */ "ayko");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function DependencySortingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dependency_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dependency_r1.Name);
} }
class DependencySortingComponent {
    constructor(dependencyService, frontRepoService, 
    // not null if the component is called as a selection component of dependency instances
    dialogRef, dialogData, router) {
        this.dependencyService = dependencyService;
        this.frontRepoService = frontRepoService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.router = router;
        // array of Dependency instances that are in the association
        this.associatedDependencys = new Array();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.getDependencys();
    }
    getDependencys() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
            let index = 0;
            for (let dependency of this.frontRepo.Dependencys_array) {
                let ID = this.dialogData.ID;
                let revPointerID = dependency[this.dialogData.ReversePointer];
                let revPointerID_Index = dependency[this.dialogData.ReversePointer + "_Index"];
                if (revPointerID.Int64 == ID) {
                    if (revPointerID_Index == undefined) {
                        revPointerID_Index = new _front_repo_service__WEBPACK_IMPORTED_MODULE_2__["NullInt64"];
                        revPointerID_Index.Valid = true;
                        revPointerID_Index.Int64 = index++;
                    }
                    this.associatedDependencys.push(dependency);
                }
            }
            // sort associated dependency according to order
            this.associatedDependencys.sort((t1, t2) => {
                let t1_revPointerID_Index = t1[this.dialogData.ReversePointer + "_Index"];
                let t2_revPointerID_Index = t2[this.dialogData.ReversePointer + "_Index"];
                if (t1_revPointerID_Index && t2_revPointerID_Index) {
                    if (t1_revPointerID_Index.Int64 > t2_revPointerID_Index.Int64) {
                        return 1;
                    }
                    if (t1_revPointerID_Index.Int64 < t2_revPointerID_Index.Int64) {
                        return -1;
                    }
                }
                return 0;
            });
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.associatedDependencys, event.previousIndex, event.currentIndex);
        // set the order of Dependency instances
        let index = 0;
        for (let dependency of this.associatedDependencys) {
            let revPointerID_Index = dependency[this.dialogData.ReversePointer + "_Index"];
            revPointerID_Index.Valid = true;
            revPointerID_Index.Int64 = index++;
        }
    }
    save() {
        this.associatedDependencys.forEach(dependency => {
            this.dependencyService.updateDependency(dependency)
                .subscribe(dependency => {
                this.dependencyService.DependencyServiceChanged.next("update");
            });
        });
        this.dialogRef.close('Sorting of ' + this.dialogData.ReversePointer + ' done');
    }
}
DependencySortingComponent.ɵfac = function DependencySortingComponent_Factory(t) { return new (t || DependencySortingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dependency_service__WEBPACK_IMPORTED_MODULE_4__["DependencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_2__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
DependencySortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DependencySortingComponent, selectors: [["lib-dependency-sorting"]], decls: 4, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"], ["cdkDrag", "", 1, "example-box"]], template: function DependencySortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function DependencySortingComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DependencySortingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DependencySortingComponent_Template_button_click_2_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\nSave\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.associatedDependencys);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".example-list[_ngcontent-%COMP%] {\n    width: 500px;\n    max-width: 100%;\n    border: solid 1px #ccc;\n    min-height: 60px;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3ktc29ydGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxSEFBcUg7QUFDekg7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImRlcGVuZGVuY3ktc29ydGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGlzdCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi50YWJsZV9fc2F2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _front_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front-repo.service */ "Cft9");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _task_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task-db */ "vOkD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../task.service */ "BBzA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




















function TasksTableComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function TasksTableComponent_th_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r32.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
} }
function TasksTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TasksTableComponent_td_10_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TasksTableComponent_td_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const row_r34 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event ? ctx_r36.selection.toggle(row_r34) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r34));
} }
function TasksTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r38.Name, " ");
} }
function TasksTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " DisplayedName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r39.DisplayedName, " ");
} }
function TasksTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ressource ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r40.Ressource ? Task_r40.Ressource.Name : "", " ");
} }
function TasksTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r41.Start, " ");
} }
function TasksTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " End ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r42.End, " ");
} }
function TasksTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r43.Duration_string, " ");
} }
function TasksTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " PercentComplete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r44.PercentComplete.toPrecision(5), " ");
} }
function TasksTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Rank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r45.Rank, " ");
} }
function TasksTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " <-- (GanttChart) Tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r46 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r21.frontRepo.GanttCharts.get(task_r46.GanttChart_TasksDBID.Int64)) == null ? null : tmp_0_0.Name, " ");
} }
function TasksTableComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Task_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", Task_r47.ID, " ");
} }
function TasksTableComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "rgba(0,0,0,.50)" }; };
function TasksTableComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TasksTableComponent_td_43_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const task_r48 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r50.setEditorRouterOutlet(task_r48.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function TasksTableComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TasksTableComponent_td_46_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const task_r52 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r54.deleteTask(task_r52.ID, task_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function TasksTableComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 31);
} }
function TasksTableComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TasksTableComponent_tr_48_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58); const row_r56 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r57.setPresentationRouterOutlet(row_r56.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TasksTableComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
function TasksTableComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TasksTableComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r59.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [10, 20, 50, 100, 500, 1000]; };
const allowMultiSelect = true;
// TableComponent is initilizaed from different routes
// TableComponentMode detail different cases 
var TableComponentMode;
(function (TableComponentMode) {
    TableComponentMode[TableComponentMode["DISPLAY_MODE"] = 0] = "DISPLAY_MODE";
    TableComponentMode[TableComponentMode["ONE_MANY_ASSOCIATION_MODE"] = 1] = "ONE_MANY_ASSOCIATION_MODE";
    TableComponentMode[TableComponentMode["MANY_MANY_ASSOCIATION_MODE"] = 2] = "MANY_MANY_ASSOCIATION_MODE";
})(TableComponentMode || (TableComponentMode = {}));
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
        // compute mode
        if (dialogData == undefined) {
            this.mode = TableComponentMode.DISPLAY_MODE;
        }
        else {
            switch (dialogData.SelectionMode) {
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].ONE_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.ONE_MANY_ASSOCIATION_MODE;
                    break;
                case _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].MANY_MANY_ASSOCIATION_MODE:
                    this.mode = TableComponentMode.MANY_MANY_ASSOCIATION_MODE;
                    break;
                default:
            }
        }
        // observable for changes in structs
        this.taskService.TaskServiceChanged.subscribe(message => {
            if (message == "post" || message == "update" || message == "delete") {
                this.getTasks();
            }
        });
        if (this.mode == TableComponentMode.DISPLAY_MODE) {
            this.displayedColumns = ['ID', 'Edit', 'Delete',
                "Name",
                "DisplayedName",
                "Ressource",
                "Start",
                "End",
                "Duration",
                "PercentComplete",
                "Rank",
                "GanttChart_Tasks",
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
                "GanttChart_Tasks",
            ];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
        }
    }
    ngAfterViewInit() {
        // enable sorting on all fields (including pointers and reverse pointer)
        this.matTableDataSource.sortingDataAccessor = (taskDB, property) => {
            var _a;
            switch (property) {
                // insertion point for specific sorting accessor
                case 'Name':
                    return taskDB.Name;
                case 'DisplayedName':
                    return taskDB.DisplayedName;
                case 'Ressource':
                    return (taskDB.Ressource ? taskDB.Ressource.Name : '');
                case 'Start':
                    return taskDB.Start;
                case 'End':
                    return taskDB.End;
                case 'Duration':
                    return taskDB.Duration;
                case 'PercentComplete':
                    return taskDB.PercentComplete;
                case 'Rank':
                    return taskDB.Rank;
                case 'GanttChart_Tasks':
                    return (_a = this.frontRepo.GanttCharts.get(taskDB.GanttChart_TasksDBID.Int64)) === null || _a === void 0 ? void 0 : _a.Name;
                default:
                    return _task_db__WEBPACK_IMPORTED_MODULE_6__["TaskDB"][property];
            }
        };
        // enable filtering on all fields (including pointers and reverse pointer, which is not done by default)
        this.matTableDataSource.filterPredicate = (taskDB, filter) => {
            var _a;
            // filtering is based on finding a lower case filter into a concatenated string
            // the taskDB properties
            let mergedContent = "";
            // insertion point for merging of fields
            mergedContent += taskDB.Name.toLowerCase();
            mergedContent += taskDB.DisplayedName.toLowerCase();
            if (taskDB.Ressource) {
                mergedContent += taskDB.Ressource.Name.toLowerCase();
            }
            mergedContent += taskDB.PercentComplete.toString();
            mergedContent += taskDB.Rank.toString();
            if (taskDB.GanttChart_TasksDBID.Int64 != 0) {
                mergedContent += (_a = this.frontRepo.GanttCharts.get(taskDB.GanttChart_TasksDBID.Int64)) === null || _a === void 0 ? void 0 : _a.Name.toLowerCase();
            }
            let isSelected = mergedContent.includes(filter.toLowerCase());
            return isSelected;
        };
        this.matTableDataSource.sort = this.sort;
        this.matTableDataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.matTableDataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.getTasks();
        this.matTableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tasks);
    }
    getTasks() {
        this.frontRepoService.pull().subscribe(frontRepo => {
            this.frontRepo = frontRepo;
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
            if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
                this.tasks.forEach(task => {
                    let ID = this.dialogData.ID;
                    let revPointer = task[this.dialogData.ReversePointer];
                    if (revPointer.Int64 == ID) {
                        this.initialSelection.push(task);
                    }
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
                let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
                let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
                if (sourceInstance[this.dialogData.SourceField]) {
                    for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                        let task = associationInstance[this.dialogData.IntermediateStructField];
                        this.initialSelection.push(task);
                    }
                }
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](allowMultiSelect, this.initialSelection);
            }
            // update the mat table data source
            this.matTableDataSource.data = this.tasks;
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
        });
    }
    editTask(taskID, task) {
    }
    // display task in router
    displayTaskInRouter(taskID) {
        this.router.navigate(["github_com_fullstack_lang_gonggooglecharts_go-" + "task-display", taskID]);
    }
    // set editor outlet
    setEditorRouterOutlet(taskID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_editor: ["github_com_fullstack_lang_gonggooglecharts_go-" + "task-detail", taskID]
                }
            }]);
    }
    // set presentation outlet
    setPresentationRouterOutlet(taskID) {
        this.router.navigate([{
                outlets: {
                    github_com_fullstack_lang_gonggooglecharts_go_presentation: ["github_com_fullstack_lang_gonggooglecharts_go-" + "task-presentation", taskID]
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
        if (this.mode == TableComponentMode.ONE_MANY_ASSOCIATION_MODE) {
            let toUpdate = new Set();
            // reset all initial selection of task that belong to task
            this.initialSelection.forEach(task => {
                task[this.dialogData.ReversePointer].Int64 = 0;
                task[this.dialogData.ReversePointer].Valid = true;
                toUpdate.add(task);
            });
            // from selection, set task that belong to task
            this.selection.selected.forEach(task => {
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
                });
            });
        }
        if (this.mode == TableComponentMode.MANY_MANY_ASSOCIATION_MODE) {
            let mapOfSourceInstances = this.frontRepo[this.dialogData.SourceStruct + "s"];
            let sourceInstance = mapOfSourceInstances.get(this.dialogData.ID);
            // First, parse all instance of the association struct and remove the instance
            // that have unselect
            let unselectedTask = new Set();
            for (let task of this.initialSelection) {
                if (this.selection.selected.includes(task)) {
                    // console.log("task " + task.Name + " is still selected")
                }
                else {
                    console.log("task " + task.Name + " has been unselected");
                    unselectedTask.add(task.ID);
                    console.log("is unselected " + unselectedTask.has(task.ID));
                }
            }
            // delete the association instance
            if (sourceInstance[this.dialogData.SourceField]) {
                for (let associationInstance of sourceInstance[this.dialogData.SourceField]) {
                    let task = associationInstance[this.dialogData.IntermediateStructField];
                    if (unselectedTask.has(task.ID)) {
                        this.frontRepoService.deleteService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                }
            }
            // is the source array is emptyn create it
            if (sourceInstance[this.dialogData.SourceField] == undefined) {
                sourceInstance[this.dialogData.SourceField] = new Array();
            }
            // second, parse all instance of the selected
            if (sourceInstance[this.dialogData.SourceField]) {
                this.selection.selected.forEach(task => {
                    if (!this.initialSelection.includes(task)) {
                        // console.log("task " + task.Name + " has been added to the selection")
                        let associationInstance = {
                            Name: sourceInstance["Name"] + "-" + task.Name,
                        };
                        associationInstance[this.dialogData.IntermediateStructField + "ID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Int64 = task.ID;
                        associationInstance[this.dialogData.IntermediateStructField + "ID"].Valid = true;
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"] = new _front_repo_service__WEBPACK_IMPORTED_MODULE_4__["NullInt64"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Int64 = sourceInstance["ID"];
                        associationInstance[this.dialogData.SourceStruct + "_" + this.dialogData.SourceField + "DBID"].Valid = true;
                        this.frontRepoService.postService(this.dialogData.IntermediateStruct, associationInstance);
                    }
                    else {
                        // console.log("task " + task.Name + " is still selected")
                    }
                });
            }
            // this.selection = new SelectionModel<TaskDB>(allowMultiSelect, this.initialSelection);
        }
        // why pizza ?
        this.dialogRef.close('Pizza!');
    }
}
TasksTableComponent.ɵfac = function TasksTableComponent_Factory(t) { return new (t || TasksTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_front_repo_service__WEBPACK_IMPORTED_MODULE_4__["FrontRepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
TasksTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TasksTableComponent, selectors: [["app-taskstable"]], viewQuery: function TasksTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 52, vars: 8, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [4, "ngIf"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], ["matColumnDef", "select", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "DisplayedName"], ["matColumnDef", "Ressource"], ["matColumnDef", "Start"], ["matColumnDef", "End"], ["matColumnDef", "Duration"], ["matColumnDef", "PercentComplete"], ["matColumnDef", "Rank"], ["matColumnDef", "GanttChart_Tasks"], ["matColumnDef", "ID", "sticky", ""], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "row-link", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["class", "table__save", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "material-icons", 3, "ngStyle", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "row-link", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["color", "primary", "mat-raised-button", "", 1, "table__save", 3, "click"]], template: function TasksTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function TasksTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TasksTableComponent_h1_6_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, TasksTableComponent_th_9_Template, 2, 2, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, TasksTableComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, TasksTableComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, TasksTableComponent_td_13_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, TasksTableComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, TasksTableComponent_td_16_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, TasksTableComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, TasksTableComponent_td_19_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, TasksTableComponent_th_21_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, TasksTableComponent_td_22_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, TasksTableComponent_th_24_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, TasksTableComponent_td_25_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, TasksTableComponent_th_27_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, TasksTableComponent_td_28_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](29, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, TasksTableComponent_th_30_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, TasksTableComponent_td_31_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](32, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, TasksTableComponent_th_33_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, TasksTableComponent_td_34_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](35, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, TasksTableComponent_th_36_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, TasksTableComponent_td_37_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, TasksTableComponent_th_39_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, TasksTableComponent_td_40_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](41, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, TasksTableComponent_th_42_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, TasksTableComponent_td_43_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](44, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, TasksTableComponent_th_45_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, TasksTableComponent_td_46_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, TasksTableComponent_tr_47_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, TasksTableComponent_tr_48_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, TasksTableComponent_tr_49_Template, 3, 1, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "mat-paginator", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, TasksTableComponent_button_51_Template, 2, 0, "button", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.matTableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogData);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0;\n}\n\nh1[_ngcontent-%COMP%]::first-letter {\n    text-transform: uppercase;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n}\n\n\n\n.table[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.table__save[_ngcontent-%COMP%] {\n    position: relative !important;\n    left: 50%;\n    transform: translateX(-50%) !important;\n    margin-top: 15px !important;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    cursor: pointer;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n    padding: 0 15px !important;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n    border-right: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoidGFza3MtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIE92ZXJyaWRlIE1hdGVyaWFsIFVJIGZvbnQtc2l6ZSAqL1xuKiB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG49PT09PT09PT09PT09PT09PVxuPT09PT0gVEFCTEUgPT09PT1cbj09PT09PT09PT09PT09PT09XG4qL1xuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFibGVfX3NhdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zIGluIHRoZSBtYXRlcmlhbCB0YWJsZSAqL1xudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5LWJvcmRlci1lbGVtLWxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59Il19 */"] });


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
/*! exports provided: GonggooglechartsModule, SplitterComponent, GongNodeType, SidebarComponent, FrontRepo, FrontRepoSingloton, NullInt64, DialogData, SelectionMode, FrontRepoService, getDependencyUniqueID, getGanttChartUniqueID, getRessourceUniqueID, getTaskUniqueID, CommitNbService, PushFromFrontNbService, DependencyDetailComponent, DependencyPresentationComponent, DependencySortingComponent, DependencysTableComponent, DependencyDB, DependencyService, GanttChartDetailComponent, GanttChartPresentationComponent, GanttChartSortingComponent, GanttChartsTableComponent, GanttChartDB, GanttChartService, RessourceDetailComponent, RessourcePresentationComponent, RessourceSortingComponent, RessourcesTableComponent, RessourceDB, RessourceService, TaskDetailComponent, TaskPresentationComponent, TaskSortingComponent, TasksTableComponent, TaskDB, TaskService */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["DialogData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontRepoService", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["FrontRepoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDependencyUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getDependencyUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGanttChartUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getGanttChartUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRessourceUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getRessourceUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTaskUniqueID", function() { return _lib_front_repo_service__WEBPACK_IMPORTED_MODULE_3__["getTaskUniqueID"]; });

/* harmony import */ var _lib_commitnb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/commitnb.service */ "t6MY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommitNbService", function() { return _lib_commitnb_service__WEBPACK_IMPORTED_MODULE_4__["CommitNbService"]; });

/* harmony import */ var _lib_push_from_front_nb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/push_from_front_nb.service */ "6N/f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushFromFrontNbService", function() { return _lib_push_from_front_nb_service__WEBPACK_IMPORTED_MODULE_5__["PushFromFrontNbService"]; });

/* harmony import */ var _lib_dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/dependency-detail/dependency-detail.component */ "tmHK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyDetailComponent", function() { return _lib_dependency_detail_dependency_detail_component__WEBPACK_IMPORTED_MODULE_6__["DependencyDetailComponent"]; });

/* harmony import */ var _lib_dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/dependency-presentation/dependency-presentation.component */ "+Yeo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyPresentationComponent", function() { return _lib_dependency_presentation_dependency_presentation_component__WEBPACK_IMPORTED_MODULE_7__["DependencyPresentationComponent"]; });

/* harmony import */ var _lib_dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/dependency-sorting/dependency-sorting.component */ "xSdS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencySortingComponent", function() { return _lib_dependency_sorting_dependency_sorting_component__WEBPACK_IMPORTED_MODULE_8__["DependencySortingComponent"]; });

/* harmony import */ var _lib_dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/dependencys-table/dependencys-table.component */ "/pIw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencysTableComponent", function() { return _lib_dependencys_table_dependencys_table_component__WEBPACK_IMPORTED_MODULE_9__["DependencysTableComponent"]; });

/* harmony import */ var _lib_dependency_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/dependency-db */ "GPUy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyDB", function() { return _lib_dependency_db__WEBPACK_IMPORTED_MODULE_10__["DependencyDB"]; });

/* harmony import */ var _lib_dependency_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/dependency.service */ "ayko");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyService", function() { return _lib_dependency_service__WEBPACK_IMPORTED_MODULE_11__["DependencyService"]; });

/* harmony import */ var _lib_ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/ganttchart-detail/ganttchart-detail.component */ "Ll9Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartDetailComponent", function() { return _lib_ganttchart_detail_ganttchart_detail_component__WEBPACK_IMPORTED_MODULE_12__["GanttChartDetailComponent"]; });

/* harmony import */ var _lib_ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/ganttchart-presentation/ganttchart-presentation.component */ "PksR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartPresentationComponent", function() { return _lib_ganttchart_presentation_ganttchart_presentation_component__WEBPACK_IMPORTED_MODULE_13__["GanttChartPresentationComponent"]; });

/* harmony import */ var _lib_ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/ganttchart-sorting/ganttchart-sorting.component */ "tmWy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartSortingComponent", function() { return _lib_ganttchart_sorting_ganttchart_sorting_component__WEBPACK_IMPORTED_MODULE_14__["GanttChartSortingComponent"]; });

/* harmony import */ var _lib_ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/ganttcharts-table/ganttcharts-table.component */ "wVj4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartsTableComponent", function() { return _lib_ganttcharts_table_ganttcharts_table_component__WEBPACK_IMPORTED_MODULE_15__["GanttChartsTableComponent"]; });

/* harmony import */ var _lib_ganttchart_db__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/ganttchart-db */ "zFDn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartDB", function() { return _lib_ganttchart_db__WEBPACK_IMPORTED_MODULE_16__["GanttChartDB"]; });

/* harmony import */ var _lib_ganttchart_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/ganttchart.service */ "WjmK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GanttChartService", function() { return _lib_ganttchart_service__WEBPACK_IMPORTED_MODULE_17__["GanttChartService"]; });

/* harmony import */ var _lib_ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/ressource-detail/ressource-detail.component */ "I2i6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceDetailComponent", function() { return _lib_ressource_detail_ressource_detail_component__WEBPACK_IMPORTED_MODULE_18__["RessourceDetailComponent"]; });

/* harmony import */ var _lib_ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/ressource-presentation/ressource-presentation.component */ "Oa77");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourcePresentationComponent", function() { return _lib_ressource_presentation_ressource_presentation_component__WEBPACK_IMPORTED_MODULE_19__["RessourcePresentationComponent"]; });

/* harmony import */ var _lib_ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/ressource-sorting/ressource-sorting.component */ "7uMM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceSortingComponent", function() { return _lib_ressource_sorting_ressource_sorting_component__WEBPACK_IMPORTED_MODULE_20__["RessourceSortingComponent"]; });

/* harmony import */ var _lib_ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/ressources-table/ressources-table.component */ "b1k2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourcesTableComponent", function() { return _lib_ressources_table_ressources_table_component__WEBPACK_IMPORTED_MODULE_21__["RessourcesTableComponent"]; });

/* harmony import */ var _lib_ressource_db__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/ressource-db */ "dPgB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceDB", function() { return _lib_ressource_db__WEBPACK_IMPORTED_MODULE_22__["RessourceDB"]; });

/* harmony import */ var _lib_ressource_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/ressource.service */ "Os04");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RessourceService", function() { return _lib_ressource_service__WEBPACK_IMPORTED_MODULE_23__["RessourceService"]; });

/* harmony import */ var _lib_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/task-detail/task-detail.component */ "k2dw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return _lib_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_24__["TaskDetailComponent"]; });

/* harmony import */ var _lib_task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/task-presentation/task-presentation.component */ "7rAC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskPresentationComponent", function() { return _lib_task_presentation_task_presentation_component__WEBPACK_IMPORTED_MODULE_25__["TaskPresentationComponent"]; });

/* harmony import */ var _lib_task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/task-sorting/task-sorting.component */ "AnIz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskSortingComponent", function() { return _lib_task_sorting_task_sorting_component__WEBPACK_IMPORTED_MODULE_26__["TaskSortingComponent"]; });

/* harmony import */ var _lib_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/tasks-table/tasks-table.component */ "y650");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return _lib_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_27__["TasksTableComponent"]; });

/* harmony import */ var _lib_task_db__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/task-db */ "vOkD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskDB", function() { return _lib_task_db__WEBPACK_IMPORTED_MODULE_28__["TaskDB"]; });

/* harmony import */ var _lib_task_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/task.service */ "BBzA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return _lib_task_service__WEBPACK_IMPORTED_MODULE_29__["TaskService"]; });

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