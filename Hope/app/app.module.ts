import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";

import { AppRoutingModule, routes, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { AnalysisComponent } from "./pages/analysis/analysis.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { NewCustomersComponent } from "./pages/customers/new/new-customers.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptUIChartModule,
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        AnalysisComponent,
        CustomersComponent,
        NewCustomersComponent,
        ...navigatableComponents,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
