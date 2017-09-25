import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "pages/customers/customers.component.html",
    styleUrls: ["pages/customers/customers-common.css"]
})

export class CustomersComponent {
    
    constructor(private router: Router) {
    }

    newCustomer() {
        this.router.navigate(["/customers/new"])
    }
 }