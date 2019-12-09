import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-discrete-prompt",
  templateUrl: "./discrete-prompt.component.html"
})
export class DiscretePromptComponent implements OnInit {
  discreteForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.discreteForm = this.fb.group({
      discretePrompts: this.fb.array([])
    });
    const discretePrompt = this.fb.group({
      question: [],
      type: [{ value: "discreet", disabled: true }],
      longUIquestion: [],
      // time: [],
      values: this.fb.array([this.valuesArr()])
    });
    this.discretePromptForms.push(discretePrompt);
  }
  get discretePromptForms() {
    return this.discreteForm.get("discretePrompts") as FormArray;
  }

  valuesArr(): FormGroup {
    return this.fb.group({
      value: []
    });
  }

  addValue(i) {
    const valueArray = this.discreteForm
      .get("discretePrompts")
      ["controls"][i].get("values") as FormArray;
    valueArray.push(this.valuesArr());
  }
  deleteValue(i, iy) {
    const valueArray = this.discreteForm
      .get("discretePrompts")
      ["controls"][i].get("values") as FormArray;
    valueArray.removeAt(iy);
  }
  // deleteValue(values) {
  //   console.log(values);
  //   // values.removeAt(i);
  // }
  addDiscretePrompt() {
    const discretePrompt = this.fb.group({
      question: [],
      type: [{ value: "discreet", disabled: true }],
      longUIquestion: [],
      time: [],
      values: this.fb.array([this.valuesArr()])
    });
    this.discretePromptForms.push(discretePrompt);
  }
  deleteDiscretePrompt(i) {
    this.discretePromptForms.removeAt(i);
  }

  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    this.messageEvent.emit(this.discretePromptForms.value);
  }
}
