"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.analysis = function () {
        this.router.navigate(["/analysis"]);
    };
    ;
    MenuComponent.prototype.customers = function () {
        this.router.navigate(["/customers"]);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "pages/menu/menu.component.html",
            styleUrls: ["pages/menu/menu-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
