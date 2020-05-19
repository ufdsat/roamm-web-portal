import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  readonly ROOT_URL =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign";
  campaignid: any;
  discretePrompt: any;
  numericPrompt: any;
  cognitive: any;
  watch: any;
  samplingRate: any;
  feature: any;
  count: number = 0;
  tabs: any = [];
  itemValue: any;
  submit_success: boolean = false;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.tabs = [
      "Campaign ID",
      "Numeric Prompt",
      "Discrete Prompt",
      "Cognitive",
      "Sensor Settings",
      "Sampling Rates",
      "Features",
      "Review",
      "Submit",
    ];
  }
  ngOnInit() {
    this.submit_success = false;
    localStorage.removeItem("discrete_form");
    localStorage.removeItem("numeric_form");
    localStorage.removeItem("cognitive_form");
    localStorage.removeItem("watch_form");
    localStorage.removeItem("sampling_rate_form");
    localStorage.removeItem("feature_form");
    localStorage.removeItem("campaignId");
  }
  tabsNavigation(tab) {
    this.count = tab;
  }

  add(event) {
    this.campaignid = event.target.value;
    localStorage.setItem("campaignId", JSON.stringify(this.campaignid));
    if (
      this.itemValue == null ||
      this.itemValue == undefined ||
      this.itemValue
    ) {
      this.itemValue = JSON.parse(localStorage.getItem("campaignId"));
      console.log(this.itemValue);
    }
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
  receiveSamplingRate($event) {
    this.samplingRate = $event;
  }
  receiveFeature($event) {
    this.feature = $event;
  }
  previous() {
    if (this.count >= 1 && this.count <= this.tabs.length) {
      this.count -= 1;
    }
  }
  next() {
    if (this.count >= 0 && this.count < this.tabs.length) {
      this.count += 1;
    }
  }

  postData() {
    const user = this.authService.user.value;
    const data = {
      campaignManager: user.email,
      campaignid: this.campaignid,
      DiscreetPrompts: this.discretePrompt,
      NumericPrompts: this.numericPrompt,
      CognitiveParameters: this.cognitive,
      WatchConfigurationParameters: this.watch,
      SamplingRateParameters: this.samplingRate,
      Features: this.feature,
    };
    const result = { item: data };
    this.http.post(this.ROOT_URL, result).subscribe((data) => {
      console.log(data, "subscribe");
      this.submit_success = true;
    });
  }
}
