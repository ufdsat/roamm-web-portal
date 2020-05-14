import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-sampling-rates",
  templateUrl: "./sampling-rates.component.html",
  styleUrls: ["./sampling-rates.component.scss"],
})
export class SamplingRatesComponent implements OnInit {
  @Input() disableInput: boolean = false;
  watchForm: FormGroup;
  featuresQuestion: any;
  items: any = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    var items = localStorage.getItem("sampling_rates_form");
    if (items) {
      this.items = JSON.parse(items);
      // this.populateDiscrete(this.items);
    }
    this.watchForm = this.fb.group({
      watches: this.fb.array([]),
    });

    const watch = this.fb.group({
      // SEND_TO_SERVER: [],
      location_rate: [],
      pressure_rate: [],
      // Prompts_time: [{ hour: 3, minute: 10 }],
      Prompts_time: this.fb.array([this.timeArr()]),
      // RECEIVE_CONFIG_FROM_SERVER: [],
      WATCH_ID: [],
      prompt_start: [],
      // RAW_MODE: [],
      // location_active: [],
      // battery_active: [],
      // SAVE_LOCALLY: [],
      step_rate: [],
      // UV_active: [],
      UV_rate: [],
      COLLECTION_FREQUENCY: [],
      ONE_EIGHTY_OVER_PI: [{ value: "180/3.14", disabled: true }],
      // gyro_active: [],
      gyro_rate: [],
      // heartrate_active: [],
      export_rate: [],
      battery_rate: [],
      SAMPLING_RATE: [],
      prompt_rate: [],
      prompt_end: [],
      accel_rate: [],
      heartrate_rate: [],
      // accel_active: [],
      // pressure_active: [],
      VIABLE_CONSTRUCTION_RATE: [],
      // step_active: [],
      // features: this.fb.array([this.buildFeature()])
    });
    if (items) {
      for (var i = 0; i < this.items.length; i++) {
        var temp = [];
        for (var j = 0; j < this.items[i].Prompts_time.length; j++) {
          temp.push(
            this.fb.group({
              time: this.items[i].Prompts_time[j].time,
            })
          );
        }
        const watchItem = this.fb.group({
          // SEND_TO_SERVER: [this.items[i].SEND_TO_SERVER],
          location_rate: [this.items[i].location_rate],
          pressure_rate: [this.items[i].pressure_rate],
          // Prompts_time: [{ hour: 3, minute: 10 }],
          Prompts_time: this.fb.array(temp),
          // RECEIVE_CONFIG_FROM_SERVER: [
          //   this.items[i].RECEIVE_CONFIG_FROM_SERVER,
          // ],
          WATCH_ID: [this.items[i].WATCH_ID],
          prompt_start: [this.items[i].prompt_start],
          // RAW_MODE: [this.items[i].RAW_MODE],
          // location_active: [this.items[i].location_active],
          // battery_active: [this.items[i].battery_active],
          // SAVE_LOCALLY: [this.items[i].SAVE_LOCALLY],
          step_rate: [this.items[i].step_rate],
          // UV_active: [this.items[i].UV_active],
          UV_rate: [this.items[i].UV_rate],
          COLLECTION_FREQUENCY: [this.items[i].COLLECTION_FREQUENCY],
          ONE_EIGHTY_OVER_PI: [{ value: "180/3.14", disabled: true }],
          // gyro_active: [this.items[i].gyro_active],
          gyro_rate: [this.items[i].gyro_rate],
          // heartrate_active: [this.items[i].heartrate_active],
          export_rate: [this.items[i].export_rate],
          battery_rate: [this.items[i].battery_rate],
          SAMPLING_RATE: [this.items[i].SAMPLING_RATE],
          prompt_rate: [this.items[i].prompt_rate],
          prompt_end: [this.items[i].prompt_end],
          accel_rate: [this.items[i].accel_rate],
          heartrate_rate: [this.items[i].heartrate_rate],
          // accel_active: [this.items[i].accel_active],
          // pressure_active: [this.items[i].pressure_active],
          VIABLE_CONSTRUCTION_RATE: [
            this.items[i].quesVIABLE_CONSTRUCTION_RATEtion,
          ],
          // step_active: [this.items[i].step_active],
        });
        // discretePromptItem.controls.values.setValue(this.fb.array(temp));
        this.watchForms.push(watchItem);
      }
    } else {
      this.watchForms.push(watch);
    }
    if (this.disableInput == true) {
      this.watchForm.disable();
    }
  }
  timeArr(): FormGroup {
    return this.fb.group({
      time: [{ hour: 3, minute: 10 }],
    });
  }
  addValue(i) {
    const timeArray = this.watchForm
      .get("watches")
      ["controls"][i].get("Prompts_time") as FormArray;
    timeArray.push(this.timeArr());
  }
  deleteValue(i, iy) {
    const timeArray = this.watchForm
      .get("watches")
      ["controls"][i].get("Prompts_time") as FormArray;
    timeArray.removeAt(iy);
  }

  get watchForms() {
    return this.watchForm.get("watches") as FormArray;
  }

  buildFeature() {
    return this.fb.group({
      // questionId: [],
      question: [],
      calculate: [],
    });
  }

  addWatch() {
    const watch = this.fb.group({
      // SEND_TO_SERVER: [],
      location_rate: [],
      pressure_rate: [],
      // Prompts_time: [{ hour: 3, minute: 10 }],
      Prompts_time: this.fb.array([this.timeArr()]),
      // RECEIVE_CONFIG_FROM_SERVER: [],
      WATCH_ID: [],
      prompt_start: [],
      // RAW_MODE: [],
      // location_active: [],
      // battery_active: [],
      // SAVE_LOCALLY: [],
      step_rate: [],
      // UV_active: [],
      UV_rate: [],
      COLLECTION_FREQUENCY: [],
      ONE_EIGHTY_OVER_PI: [{ value: "180/3.14", disabled: true }],
      // gyro_active: [],
      gyro_rate: [],
      // heartrate_active: [],
      export_rate: [],
      battery_rate: [],
      SAMPLING_RATE: [],
      prompt_rate: [],
      prompt_end: [],
      accel_rate: [],
      heartrate_rate: [],
      // accel_active: [],
      // pressure_active: [],
      VIABLE_CONSTRUCTION_RATE: [],
      // step_active: [],
      // features: this.fb.array([this.buildFeature()])
    });

    this.watchForms.push(watch);
    // console.log("watch forms", this.watchForms);
  }
  deleteWatch(i) {
    this.watchForms.removeAt(i);
  }

  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    localStorage.setItem(
      "sampling_rates_form",
      JSON.stringify(this.watchForms.value)
    );
    this.messageEvent.emit(this.watchForms.value);
  }
}
