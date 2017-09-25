import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "ns-app",
    templateUrl: "pages/analysis/analysis.component.html",
    styleUrls: ["pages/analysis/analysis-common.css", "pages/analysis/analysis.css"]
})

export class AnalysisComponent implements OnInit{
    
    public categoricalSource: ObservableArray<DataEntry>;
    public startTime: Date;
    public endTime: Date;

    ngOnInit() {
        this.startTime = new Date(2017, 0, 11,);
        this.endTime = new Date(2017, 0, 11);

        this.categoricalSource = new ObservableArray([
            { TimeStamp: new Date(2017, 0, 11).getTime(), Amount: 10 },
            { TimeStamp: new Date(2017, 0, 12).getTime(), Amount: 10 },
            { TimeStamp: new Date(2017, 0, 13).getTime(), Amount: 1 },
            { TimeStamp: new Date(2017, 0, 14).getTime(), Amount: 3 },
            { TimeStamp: new Date(2017, 0, 15).getTime(), Amount: 18 },
            { TimeStamp: new Date(2017, 0, 16).getTime(), Amount: 3 },
            { TimeStamp: new Date(2017, 0, 17).getTime(), Amount: 18 },
        ]);
    }
 }

export class DataEntry {
    constructor(
        public TimeStamp?: number,
        public Amount?: number,) {
    }
}