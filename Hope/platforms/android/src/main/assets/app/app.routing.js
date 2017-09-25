"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var menu_component_1 = require("./pages/menu/menu.component");
var analysis_component_1 = require("./pages/analysis/analysis.component");
var customers_component_1 = require("./pages/customers/customers.component");
var new_customers_component_1 = require("./pages/customers/new/new-customers.component");
exports.routes = [
    { path: "", component: menu_component_1.MenuComponent },
    { path: "analysis", component: analysis_component_1.AnalysisComponent },
    { path: "customers", component: customers_component_1.CustomersComponent },
    { path: "customers/new", component: new_customers_component_1.NewCustomersComponent },
];
exports.navigatableComponents = [
    menu_component_1.MenuComponent,
    analysis_component_1.AnalysisComponent,
    customers_component_1.CustomersComponent,
    new_customers_component_1.NewCustomersComponent,
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(exports.routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
