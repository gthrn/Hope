import { Component, OnInit } from "@angular/core"
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
declare var android:any;

@Component({
    selector: "ns-app",
    templateUrl: "pages/customers/new/new-customers.component.html",
    styleUrls: ["pages/customers/new/new-customers-common.css"]
})

export class NewCustomersComponent {
    public contactsFound: string[];

    constructor(private page: Page) {
        this.contactsFound = [];
    }

    search() {
        let textFieldSearchQuery = this.page.getViewById<TextField>("searchQuery");
        var contacts = require( "nativescript-contacts" );
        var permissions = require('nativescript-permissions');
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "I need these permissions because I'm cool").then(function() {
                
            var contactFields = ['name','phoneNumbers']
            contacts.getContactsByName(textFieldSearchQuery.text ,contactFields).then(function(args){
                if (args.data instanceof Array) {
                    alert("Gefundene Kontakte: " + args.data.length);
                } else {
                    alert("Keine Kontakte gefunden");
                }
            }, function(err){
                console.log("Error: " + err);
            });
        })
        .catch(function() {
            console.log("Uh oh, no permissions - plan B time!");
        });

    }
 }