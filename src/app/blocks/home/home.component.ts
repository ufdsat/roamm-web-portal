import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  readonly ROOT_URL =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign";
  campaignid: any;
  discretePrompt: any;
  numericPrompt: any;
  cognitive: any;
  watch: any;
  feature: any;
  count: number = 0;
  tabs: any = [];
  constructor(private http: HttpClient, private authService: AuthService) {
    this.tabs = [
      "Campaign ID",
      "Numeric Prompt",
      "Discrete Prompt",
      "Cognitive",
      "Watch",
      "Feature",
      "Submit"
    ];
  }
  ngOnInit() {
    localStorage.removeItem("discrete_form");
    localStorage.removeItem("numeric_form");
    localStorage.removeItem("cognitive_form");
    localStorage.removeItem("watch_form");
    localStorage.removeItem("feature_form");
  }
  tabsNavigation(tab) {
    this.count = tab;

    // console.log(event.target.classList);
    // event.target.classList.toggle("btn-primary");
    // if (event.target.classList.contains("btn-outline-primary")) {
    //   event.target.classList.remove("btn-outline-primary");
    //   event.target.classList.add("btn-primary"); // To ADD
    // } else if (event.target.classList.contains("btn-primary")) {
    //   event.target.classList.remove("btn-primary");
    //   event.target.classList.add("btn-outline-primary"); // To ADD
    // }
  }

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
  previous() {
    if (this.count >= 1 && this.count <= 6) {
      this.count -= 1;
    }
  }
  next() {
    if (this.count >= 0 && this.count < 6) {
      this.count += 1;
    }
  }

  // submit() {
  //   console.log(
  //     this.discretePrompt,
  //     this.numericPrompt,
  //     this.cognitive,
  //     this.watch
  //   );

  postData() {
    const user = this.authService.user.value;
    const data = {
      campaignManager: user.email,
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
