"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui-pro/chart/angular");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./pages/menu/menu.component");
var analysis_component_1 = require("./pages/analysis/analysis.component");
var customers_component_1 = require("./pages/customers/customers.component");
var new_customers_component_1 = require("./pages/customers/new/new-customers.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                angular_1.NativeScriptUIChartModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                analysis_component_1.AnalysisComponent,
                customers_component_1.CustomersComponent,
                new_customers_component_1.NewCustomersComponent
            ].concat(app_routing_1.navigatableComponents),
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
