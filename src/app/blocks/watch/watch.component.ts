import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  createPlatformFactory
} from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-watch",
  templateUrl: "./watch.component.html"
})
export class WatchComponent implements OnInit {
  // time = { hour: 13, minute: 30 };
  watchForm: FormGroup;
  featuresQuestion: any;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.watchForm = this.fb.group({
      watches: this.fb.array([])
    });

    const watch = this.fb.group({
      SEND_TO_SERVER: [],
      location_rate: [],
      pressure_rate: [],
      // Prompts_time: [{ hour: 3, minute: 10 }],
      Prompts_time: this.fb.array([this.timeArr()]),
      RECEIVE_CONFIG_FROM_SERVER: [],
      WATCH_ID: [],
      prompt_start: [],
      RAW_MODE: [],
      location_active: [],
      battery_active: [],
      SAVE_LOCALLY: [],
      step_rate: [],
      UV_active: [],
      UV_rate: [],
      COLLECTION_FREQUENCY: [],
      ONE_EIGHTY_OVER_PI: [{ value: "180/3.14", disabled: true }],
      gyro_active: [],
      gyro_rate: [],
      heartrate_active: [],
      export_rate: [],
      battery_rate: [],
      SAMPLING_RATE: [],
      prompt_rate: [],
      prompt_end: [],
      accel_rate: [],
      heartrate_rate: [],
      accel_active: [],
      pressure_active: [],
      VIABLE_CONSTRUCTION_RATE: [],
      step_active: []
      // features: this.fb.array([this.buildFeature()])
    });
    this.watchForms.push(watch);
  }
  timeArr(): FormGroup {
    return this.fb.group({
      time: [{ hour: 3, minute: 10 }]
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
      calculate: []
    });
  }

  addWatch() {
    const watch = this.fb.group({
      SEND_TO_SERVER: [],
      location_rate: [],
      pressure_rate: [],
      Prompts_time: this.fb.array([this.timeArr()]),
      RECEIVE_CONFIG_FROM_SERVER: [],
      WATCH_ID: [],
      prompt_start: [],
      RAW_MODE: [],
      location_active: [],
      battery_active: [],
      SAVE_LOCALLY: [],
      step_rate: [],
      UV_active: [],
      UV_rate: [],
      COLLECTION_FREQUENCY: [],
      ONE_EIGHTY_OVER_PI: [{ value: "180/3.14", disabled: true }],
      gyro_active: [],
      gyro_rate: [],
      heartrate_active: [],
      export_rate: [],
      battery_rate: [],
      SAMPLING_RATE: [],
      prompt_rate: [],
      prompt_end: [],
      accel_rate: [],
      heartrate_rate: [],
      accel_active: [],
      pressure_active: [],
      VIABLE_CONSTRUCTION_RATE: [],
      step_active: [],
      sample_onme: []
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
    this.messageEvent.emit(this.watchForms.value);
  }
}
