import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: "app-numeric-prompt",
  templateUrl: "./numeric-prompt.component.html",
})
export class NumericPromptComponent implements OnInit {
  @Input() disableInput: boolean = false;
  numericForm: FormGroup;
  items: any = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    var items = localStorage.getItem("numeric_form");
    if (items) {
      this.items = JSON.parse(items);
      // this.populateDiscrete(this.items);
    }
    this.numericForm = this.fb.group({
      numericPrompts: this.fb.array([]),
    });
    const numericPrompt = this.fb.group({
      question: [],
      type: [{ value: "range", disabled: true }],
      longUIquestion: [],
      min: [],
      max: [],
      inc: [],
      default: [],
      // time: []
    });
    if (items) {
      for (var i = 0; i < this.items.length; i++) {
        const numericPromptItem = this.fb.group({
          question: [this.items[i].question],
          type: [{ value: "range", disabled: true }],
          longUIquestion: [this.items[i].longUIquestion],
          min: [this.items[i].min],
          max: [this.items[i].max],
          inc: [this.items[i].inc],
          default: [this.items[i].default],
        });
        // discretePromptItem.controls.values.setValue(this.fb.array(temp));
        this.numericPromptForms.push(numericPromptItem);
      }
    } else {
      this.numericPromptForms.push(numericPrompt);
    }
    if (this.disableInput == true) {
      this.numericForm.disable();
    }
  }
  get numericPromptForms() {
    return this.numericForm.get("numericPrompts") as FormArray;
  }

  addNumericPrompt() {
    const numericPrompt = this.fb.group({
      question: [],
      type: [{ value: "range", disabled: true }],
      longUIquestion: [],
      min: [],
      max: [],
      inc: [],
      default: [],
      time: [],
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
    localStorage.setItem(
      "numeric_form",
      JSON.stringify(this.numericPromptForms.value)
    );
    this.messageEvent.emit(this.numericPromptForms.value);
  }
}
