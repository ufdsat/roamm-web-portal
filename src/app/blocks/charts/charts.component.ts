import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import * as d3 from "d3";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html"
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  public createChart() {
    d3.csv("../../assets/data.csv").then(function(data) {
      const timeparser = d3.timeParse("%d/%m/%Y");
      for (let d of data) {
        if (d.value != "None") {
          // d.value = parseInt(d.value);
          d.collectedtimestamp = d.collectedtimestamp.split(" ")[0];
        }
      }
      console.log(data);
      var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    });

    // console.log(this.data);
  }
}
