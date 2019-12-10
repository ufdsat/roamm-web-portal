import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  createPlatformFactory
} from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html"
})
export class FeatureComponent {
  featureForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.featureForm = this.fb.group({
      features: this.fb.array([this.addFeatureGroup()])
    });
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
    this.messageEvent.emit(this.featureForm.value.features);
  }
}
