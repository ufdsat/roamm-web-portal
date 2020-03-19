import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-cognitive",
  templateUrl: "./cognitive.component.html"
})
export class CognitiveComponent implements OnInit {
  cognitiveForm: FormGroup;
  items: any = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    var items = localStorage.getItem("cognitive_form");
    if (items) {
      this.items = JSON.parse(items);
      // this.populateDiscrete(this.items);
    }
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
    if (items) {
      for (var i = 0; i < this.items.length; i++) {
        const cognitiveItem = this.fb.group({
          shapes: [this.items[i].shapes],
          noOfTrails: [this.items[i].noOfTrails],
          targetShape: [this.items[i].targetShape],
          time: [this.items[i].time],
          color: [this.items[i].color]
        });
        // discretePromptItem.controls.values.setValue(this.fb.array(temp));
        this.cognitiveForms.push(cognitiveItem);
      }
    } else {
      this.cognitiveForms.push(cognitive);
    }
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
    localStorage.setItem(
      "cognitive_form",
      JSON.stringify(this.cognitiveForms.value)
    );
    this.messageEvent.emit(this.cognitiveForms.value);
    console.log(this.cognitiveForms.value);
  }
}
