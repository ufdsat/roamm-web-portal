import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  createPlatformFactory,
  Input
} from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html"
})
export class FeatureComponent implements OnInit {
  @Input() disableInput: boolean = false;
  featureForm: FormGroup;
  items: any = [];
  featureValue: any = [];
  options: any = [];
  constructor(private fb: FormBuilder) {
    this.options = ["mvm", "svdm", "mangle", "sdangle", "df", "fpdf", "p625"];
  }
  ngOnInit() {
    var items = localStorage.getItem("feature_form");
    if (items) {
      this.items = JSON.parse(items);
      // this.populateDiscrete(this.items);
    }

    if (items) {
      // console.log(items);
      for (var i = 0; i < this.items.length; i++) {
        console.log(this.items[i].question);
        this.featureValue.push(
          this.fb.group({
            question: [this.items[i].question],
            calculate: [this.items[i].calculate]
          })
        );
      }
      this.featureForm = this.fb.group({
        features: this.fb.array(this.featureValue)
      });
    } else {
      this.featureForm = this.fb.group({
        features: this.fb.array([this.addFeatureGroup()])
      });
    }
    if (this.disableInput == true) {
      this.featureForm.disable();
    }
  }
  addFeatureGroup(): FormGroup {
    return this.fb.group({
      question: [],
      calculate: []
    });
  }
  get FeatureArray(): FormArray {
    return this.featureForm.get("features") as FormArray;
  }

  addFeatures(): void {
    this.FeatureArray.push(this.addFeatureGroup());
  }
  removeFeatures(index: number): void {
    this.FeatureArray.removeAt(index);
  }
  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    localStorage.setItem(
      "feature_form",
      JSON.stringify(this.featureForm.value.features)
    );
    this.messageEvent.emit(this.featureForm.value.features);
  }
}
