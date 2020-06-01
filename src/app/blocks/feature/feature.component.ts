import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  createPlatformFactory,
  Input,
} from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
})
export class FeatureComponent implements OnInit {
  @Input() disableInput: boolean = false;
  featureForm: FormGroup;
  items: any = [];
  featureValue: any = [];
  options: any = [];
  default_checkbox_values: any = {
    mvm: true,
    svdm: true,
    mangle: true,
    sdangle: true,
    df: true,
    fpdf: true,
    p625: true,
    gps: false,
  };
  default_value_checkbox: boolean = true;
  constructor(private fb: FormBuilder) {
    this.options = ["mvm", "svdm", "mangle", "sdangle", "df", "fpdf", "p625"];
  }
  ngOnInit() {
    var items = localStorage.getItem("feature_form");
    if (items) {
      this.items = JSON.parse(items);
    }
    this.featureForm = this.fb.group({
      features: this.fb.array([]),
    });

    const features = this.fb.group({
      mvm: [this.default_checkbox_values.mvm],
      svdm: [this.default_checkbox_values.svdm],
      mangle: [this.default_checkbox_values.mangle],
      sdangle: [this.default_checkbox_values.sdangle],
      df: [this.default_checkbox_values.df],
      fpdf: [this.default_checkbox_values.fpdf],
      p625: [this.default_checkbox_values.p625],
      gps: [this.default_checkbox_values.gps],
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
        const featureItem = this.fb.group({
          mvm: [this.items[i].mvm],
          svdm: [this.items[i].svdm],
          mangle: [this.items[i].mangle],
          sdangle: [this.items[i].sdangle],
          df: [this.items[i].df],
          fpdf: [this.items[i].fpdf],
          p625: [this.items[i].p625],
          gps: [this.items[i].gps],
        });
        // discretePromptItem.controls.values.setValue(this.fb.array(temp));
        this.featureForms.push(featureItem);
      }
    } else {
      this.featureForms.push(features);
    }
    // if (items) {
    //   // console.log(items);
    //   for (var i = 0; i < this.items.length; i++) {
    //     console.log(this.items[i].question);
    //     this.featureValue.push(
    //       this.fb.group({
    //         question: [this.items[i].question],
    //         calculate: [this.items[i].calculate],
    //       })
    //     );
    //   }
    //   this.featureForm = this.fb.group({
    //     features: this.fb.array(this.featureValue),
    //   });
    // } else {
    //   this.featureForm = this.fb.group({
    //     features: this.fb.array([this.addFeatureGroup()]),
    //   });
    // }
    if (this.disableInput == true) {
      this.featureForm.disable();
    }
    this.submit();
  }
  addFeatureGroup(): FormGroup {
    return this.fb.group({
      question: [],
      calculate: [],
    });
  }
  get featureForms(): FormArray {
    return this.featureForm.get("features") as FormArray;
  }

  // addFeatures(): void {
  //   this.FeatureArray.push(this.addFeatureGroup());
  // }
  // removeFeatures(index: number): void {
  //   this.FeatureArray.removeAt(index);
  // }
  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    localStorage.setItem(
      "feature_form",
      JSON.stringify(this.featureForms.value)
    );
    this.messageEvent.emit(this.featureForms.value);
  }
}

// export class WatchComponent implements OnInit {
//   @Input() disableInput: boolean = false;
//   // time = { hour: 13, minute: 30 };
//   watchForm: FormGroup;
//   featuresQuestion: any;
//   items: any = [];
//   default_value_checkbox: boolean = true;
//   constructor(private fb: FormBuilder) {}
//   ngOnInit() {
//     var items = localStorage.getItem("watch_form");
//     if (items) {
//       this.items = JSON.parse(items);
//       // this.populateDiscrete(this.items);
//     }
//     this.watchForm = this.fb.group({
//       watches: this.fb.array([]),
//     });

//     const watch = this.fb.group({
//       SEND_TO_SERVER: [],
//       RECEIVE_CONFIG_FROM_SERVER: [],
//       RAW_MODE: [],
//       location_active: [],
//       battery_active: [],
//       SAVE_LOCALLY: [],

//       heartrate_active: [],
//       accel_active: [],
//     });
//     if (items) {
//       for (var i = 0; i < this.items.length; i++) {
//         var temp = [];
//         for (var j = 0; j < this.items[i].Prompts_time.length; j++) {
//           temp.push(
//             this.fb.group({
//               time: this.items[i].Prompts_time[j].time,
//             })
//           );
//         }
//         const watchItem = this.fb.group({
//           SEND_TO_SERVER: [this.items[i].SEND_TO_SERVER],
//           RECEIVE_CONFIG_FROM_SERVER: [
//             this.items[i].RECEIVE_CONFIG_FROM_SERVER,
//           ],
//           RAW_MODE: [this.items[i].RAW_MODE],
//           location_active: [this.items[i].location_active],
//           battery_active: [this.items[i].battery_active],
//           SAVE_LOCALLY: [this.items[i].SAVE_LOCALLY],
//           // UV_active: [this.items[i].UV_active],
//           // gyro_active: [this.items[i].gyro_active],
//           heartrate_active: [this.items[i].heartrate_active],
//           accel_active: [this.items[i].accel_active],
//           // pressure_active: [this.items[i].pressure_active],
//           // step_active: [this.items[i].step_active],
//         });
//         // discretePromptItem.controls.values.setValue(this.fb.array(temp));
//         this.watchForms.push(watchItem);
//       }
//     } else {
//       this.watchForms.push(watch);
//     }
//     if (this.disableInput == true) {
//       this.watchForm.disable();
//     }
//   }
//   timeArr(): FormGroup {
//     return this.fb.group({
//       time: [{ hour: 3, minute: 10 }],
//     });
//   }
//   addValue(i) {
//     const timeArray = this.watchForm
//       .get("watches")
//       ["controls"][i].get("Prompts_time") as FormArray;
//     timeArray.push(this.timeArr());
//   }
//   deleteValue(i, iy) {
//     const timeArray = this.watchForm
//       .get("watches")
//       ["controls"][i].get("Prompts_time") as FormArray;
//     timeArray.removeAt(iy);
//   }

//   get watchForms() {
//     return this.watchForm.get("watches") as FormArray;
//   }

//   buildFeature() {
//     return this.fb.group({
//       // questionId: [],
//       question: [],
//       calculate: [],
//     });
//   }

//   addWatch() {
//     const watch = this.fb.group({
//       SEND_TO_SERVER: [],
//       RECEIVE_CONFIG_FROM_SERVER: [],
//       RAW_MODE: [],
//       location_active: [],
//       battery_active: [],
//       SAVE_LOCALLY: [],
//       // UV_active: [],
//       // gyro_active: [],
//       heartrate_active: [],
//       accel_active: [],
//       // pressure_active: [],
//       // step_active: [],
//     });

//     this.watchForms.push(watch);
//     // console.log("watch forms", this.watchForms);
//   }
//   deleteWatch(i) {
//     this.watchForms.removeAt(i);
//   }

//   @Output() messageEvent = new EventEmitter<any>();

//   submit() {
//     localStorage.setItem("watch_form", JSON.stringify(this.watchForms.value));
//     this.messageEvent.emit(this.watchForms.value);
//   }
// }
