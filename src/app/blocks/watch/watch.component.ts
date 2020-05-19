import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-watch",
  templateUrl: "./watch.component.html",
})
export class WatchComponent implements OnInit {
  @Input() disableInput: boolean = false;
  // time = { hour: 13, minute: 30 };
  watchForm: FormGroup;
  featuresQuestion: any;
  items: any = [];
  default_checkbox_values: any = {
    sendToServer: true,
    receiveConfigFromServer: true,
    locationActive: true,
    batteryActive: true,
    accelActive: true,
  };
  default_value_checkbox: boolean = true;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    var items = localStorage.getItem("watch_form");
    if (items) {
      this.items = JSON.parse(items);
      // this.populateDiscrete(this.items);
    }
    this.watchForm = this.fb.group({
      watches: this.fb.array([]),
    });

    const watch = this.fb.group({
      SEND_TO_SERVER: [],
      RECEIVE_CONFIG_FROM_SERVER: [],
      RAW_MODE: [],
      location_active: [],
      battery_active: [],
      SAVE_LOCALLY: [],

      heartrate_active: [],
      accel_active: [],
    });
    if (items) {
      for (var i = 0; i < this.items.length; i++) {
        var temp = [];
        // for (var j = 0; j < this.items[i].Prompts_time.length; j++) {
        //   temp.push(
        //     this.fb.group({
        //       time: this.items[i].Prompts_time[j].time,
        //     })
        //   );
        // }
        const watchItem = this.fb.group({
          SEND_TO_SERVER: [this.items[i].SEND_TO_SERVER],
          RECEIVE_CONFIG_FROM_SERVER: [
            this.items[i].RECEIVE_CONFIG_FROM_SERVER,
          ],
          RAW_MODE: [this.items[i].RAW_MODE],
          location_active: [this.items[i].location_active],
          battery_active: [this.items[i].battery_active],
          SAVE_LOCALLY: [this.items[i].SAVE_LOCALLY],
          // UV_active: [this.items[i].UV_active],
          // gyro_active: [this.items[i].gyro_active],
          heartrate_active: [this.items[i].heartrate_active],
          accel_active: [this.items[i].accel_active],
          // pressure_active: [this.items[i].pressure_active],
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
      SEND_TO_SERVER: [],
      RECEIVE_CONFIG_FROM_SERVER: [],
      RAW_MODE: [],
      location_active: [],
      battery_active: [],
      SAVE_LOCALLY: [],
      // UV_active: [],
      // gyro_active: [],
      heartrate_active: [],
      accel_active: [],
      // pressure_active: [],
      // step_active: [],
    });

    this.watchForms.push(watch);
    // console.log("watch forms", this.watchForms);
  }
  deleteWatch(i) {
    this.watchForms.removeAt(i);
  }

  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    localStorage.setItem("watch_form", JSON.stringify(this.watchForms.value));
    this.messageEvent.emit(this.watchForms.value);
  }
}
