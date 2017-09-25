import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "pages/menu/menu.component.html",
    styleUrls: ["pages/menu/menu-common.css"]
})

export class MenuComponent { 

    constructor(private router: Router) {
    }
        
    analysis() {
        this.router.navigate(["/analysis"])
    };

    customers() {
        this.router.navigate(["/customers"])
    }
}
