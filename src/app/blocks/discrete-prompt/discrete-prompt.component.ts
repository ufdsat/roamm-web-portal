import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-discrete-prompt",
  templateUrl: "./discrete-prompt.component.html"
})
export class DiscretePromptComponent implements OnInit {
  discreteForm: FormGroup;
  items: any = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    var items = localStorage.getItem("discrete_form");
    if (items) {
      this.items = JSON.parse(items);
      // this.populateDiscrete(this.items);
    }

    this.discreteForm = this.fb.group({
      discretePrompts: this.fb.array([])
    });

    const discretePrompt = this.fb.group({
      question: [],
      type: [{ value: "discreet", disabled: true }],
      longUIquestion: [],
      values: this.fb.array([this.valuesArr()])
    });

    if (items) {
      for (var i = 0; i < this.items.length; i++) {
        var temp = [];
        for (var j = 0; j < this.items[i].values.length; j++) {
          temp.push(
            this.fb.group({
              value: this.items[i].values[j].value
            })
          );
        }
        const discretePromptItem = this.fb.group({
          question: [this.items[i].question],
          type: [{ value: "discreet", disabled: true }],
          longUIquestion: [this.items[i].longUIquestion],
          // values: this.fb.array([this.valuesArr()])
          values: this.fb.array(temp)
        });
        // discretePromptItem.controls.values.setValue(this.fb.array(temp));
        this.discretePromptForms.push(discretePromptItem);
      }
    } else {
      this.discretePromptForms.push(discretePrompt);
    }
  }

  // populateDiscrete(items) {
  //   console.log(items, "items");
  //   console.log(this.discretePromptForms, "forms");
  // }
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
    localStorage.setItem(
      "discrete_form",
      JSON.stringify(this.discretePromptForms.value)
    );
    this.messageEvent.emit(this.discretePromptForms.value);
  }
}
