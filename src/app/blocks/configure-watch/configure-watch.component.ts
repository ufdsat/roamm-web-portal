import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-configure-watch",
  templateUrl: "./configure-watch.component.html"
})
export class ConfigureWatchComponent {
  configureWatch: FormGroup;
  participants: any;
  campaigns: any;
  readonly ROOT_URL_CAMPAIGN =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/getcampaign";
  readonly ROOT_URL_PARTICIPANT =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/getparticipant";
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.ROOT_URL_CAMPAIGN).subscribe(data => {
      this.campaigns = data;
    });
    this.http.get(this.ROOT_URL_PARTICIPANT).subscribe(data => {
      // console.log(data.participant);
      // this.participants = data.participant;
      this.participants = data;
    });
  }
  submit() {
    console.log(this.configureWatch);
  }
}
