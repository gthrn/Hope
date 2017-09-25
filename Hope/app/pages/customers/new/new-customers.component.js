"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var NewCustomersComponent = (function () {
    function NewCustomersComponent(page) {
        this.page = page;
        this.contactsFound = [];
    }
    NewCustomersComponent.prototype.search = function () {
        var textFieldSearchQuery = this.page.getViewById("searchQuery");
        var contacts = require("nativescript-contacts");
        var permissions = require('nativescript-permissions');
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "I need these permissions because I'm cool").then(function () {
            var contactFields = ['name', 'phoneNumbers'];
            contacts.getContactsByName(textFieldSearchQuery.text, contactFields).then(function (args) {
                if (args.data instanceof Array) {
                    alert("Gefundene Kontakte: " + args.data.length);
                }
                else {
                    alert("Keine Kontakte gefunden");
                }
            }, function (err) {
                console.log("Error: " + err);
            });
        })
            .catch(function () {
            console.log("Uh oh, no permissions - plan B time!");
        });
    };
    NewCustomersComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "pages/customers/new/new-customers.component.html",
            styleUrls: ["pages/customers/new/new-customers-common.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], NewCustomersComponent);
    return NewCustomersComponent;
}());
exports.NewCustomersComponent = NewCustomersComponent;
