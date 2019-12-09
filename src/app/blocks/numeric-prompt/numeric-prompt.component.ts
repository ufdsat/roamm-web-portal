import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: "app-numeric-prompt",
  templateUrl: "./numeric-prompt.component.html"
})
export class NumericPromptComponent implements OnInit {
  numericForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.numericForm = this.fb.group({
      numericPrompts: this.fb.array([])
    });
    const numericPrompt = this.fb.group({
      question: [],
      type: [{ value: "range", disabled: true }],
      longUIquestion: [],
      min: [],
      max: [],
      inc: [],
      default: []
      // time: []
    });
    this.numericPromptForms.push(numericPrompt);
  }
  get numericPromptForms() {
    return this.numericForm.get("numericPrompts") as FormArray;
  }

  addNumericPrompt() {
    const numericPrompt = this.fb.group({
      question: [],
      type: [],
      longUIquestion: [],
      min: [],
      max: [],
      inc: [],
      default: [],
      time: []
    });
    this.numericPromptForms.push(numericPrompt);
  }
  deleteNumericPrompt(i) {
    this.numericPromptForms.removeAt(i);
  }
  onsubmit() {
    console.log(this.numericPromptForms);
  }

  @Output() messageEvent = new EventEmitter<any>();

  submit() {
    this.messageEvent.emit(this.numericPromptForms.value);
  }
}
