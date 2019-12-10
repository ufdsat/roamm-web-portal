import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  readonly ROOT_URL =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign";
  constructor(private http: HttpClient) {}
  campaignid: any;
  discretePrompt: any;
  numericPrompt: any;
  cognitive: any;
  watch: any;
  feature: any;
  add(event) {
    this.campaignid = event.target.value;
  }
  receiveDiscretePrompt($event) {
    this.discretePrompt = $event;
  }

  receiveNumericPrompt($event) {
    this.numericPrompt = $event;
  }

  receiveCognitive($event) {
    this.cognitive = $event;
  }

  receiveWatch($event) {
    this.watch = $event;
  }
  receiveFeature($event) {
    this.feature = $event;
  }

  // submit() {
  //   console.log(
  //     this.discretePrompt,
  //     this.numericPrompt,
  //     this.cognitive,
  //     this.watch
  //   );

  postData() {
    const data = {
      campaignid: this.campaignid,
      DiscreetPrompts: this.discretePrompt,
      NumericPrompts: this.numericPrompt,
      CognitiveParameters: this.cognitive,
      WatchConfigurationParameters: this.watch,
      Features: this.feature
    };
    const result = { item: data };
    console.log(result);
    console.log(JSON.stringify(result, null, 2));
    // this.http.post(this.ROOT_URL, data);
    this.http.post(this.ROOT_URL, result).subscribe(data => {
      console.log(data, "subscribe");
    });
  }
}
// }
