import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-cognitive",
  templateUrl: "./cognitive.component.html"
})
export class CognitiveComponent implements OnInit {
  cognitiveForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.cognitiveForm = this.fb.group({
      cognitives: this.fb.array([])
    });
    const cognitive = this.fb.group({
      shapes: [],
      noOfTrails: [],
      targetShape: [],
      time: [],
      color: []
    });
    this.cognitiveForms.push(cognitive);
  }
  get cognitiveForms() {
    return this.cognitiveForm.get("cognitives") as FormArray;
  }

  addCognitive() {
    const cognitive = this.fb.group({
      shapes: [],
      noOfTrails: [],
      targetShape: [],
      time: [],
      color: []
    });
    this.cognitiveForms.push(cognitive);
  }
  deleteCognitive(i) {
    this.cognitiveForms.removeAt(i);
  }

  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    this.messageEvent.emit(this.cognitiveForms.value);
    console.log(this.cognitiveForms.value);
  }
}
