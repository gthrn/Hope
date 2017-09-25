import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MenuComponent } from "./pages/menu/menu.component"
import { AnalysisComponent } from "./pages/analysis/analysis.component"
import { CustomersComponent } from "./pages/customers/customers.component";
import { NewCustomersComponent } from "./pages/customers/new/new-customers.component";

export const routes: Routes = [
    { path: "", component: MenuComponent },
    { path: "analysis", component: AnalysisComponent },  
    { path: "customers", component: CustomersComponent },
    { path: "customers/new", component: NewCustomersComponent },
];

export const navigatableComponents = [
    MenuComponent,
    AnalysisComponent,
    CustomersComponent,
    NewCustomersComponent,
]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }