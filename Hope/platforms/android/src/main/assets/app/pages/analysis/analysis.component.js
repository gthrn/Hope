"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var AnalysisComponent = (function () {
    function AnalysisComponent() {
    }
    AnalysisComponent.prototype.ngOnInit = function () {
        this.startTime = new Date(2017, 0, 11);
        this.endTime = new Date(2017, 0, 11);
        this.categoricalSource = new observable_array_1.ObservableArray([
            { TimeStamp: new Date(2017, 0, 11).getTime(), Amount: 10 },
            { TimeStamp: new Date(2017, 0, 12).getTime(), Amount: 10 },
            { TimeStamp: new Date(2017, 0, 13).getTime(), Amount: 1 },
            { TimeStamp: new Date(2017, 0, 14).getTime(), Amount: 3 },
            { TimeStamp: new Date(2017, 0, 15).getTime(), Amount: 18 },
            { TimeStamp: new Date(2017, 0, 16).getTime(), Amount: 3 },
            { TimeStamp: new Date(2017, 0, 17).getTime(), Amount: 18 },
        ]);
    };
    AnalysisComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "pages/analysis/analysis.component.html",
            styleUrls: ["pages/analysis/analysis-common.css", "pages/analysis/analysis.css"]
        })
    ], AnalysisComponent);
    return AnalysisComponent;
}());
exports.AnalysisComponent = AnalysisComponent;
var DataEntry = (function () {
    function DataEntry(TimeStamp, Amount) {
        this.TimeStamp = TimeStamp;
        this.Amount = Amount;
    }
    return DataEntry;
}());
exports.DataEntry = DataEntry;
