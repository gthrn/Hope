"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CustomersComponent = (function () {
    function CustomersComponent(router) {
        this.router = router;
    }
    CustomersComponent.prototype.newCustomer = function () {
        this.router.navigate(["/customers/new"]);
    };
    CustomersComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "pages/customers/customers.component.html",
            styleUrls: ["pages/customers/customers-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
