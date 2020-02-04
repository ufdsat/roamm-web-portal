import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-configure-watch",
  templateUrl: "./configure-watch.component.html",
  styleUrls: ["./configure-watch.component.scss"]
})
export class ConfigureWatchComponent {
  configureWatch: FormGroup;
  participants: any;
  campaigns: any;
  starttime: NgbDateStruct;
  endtime: NgbDateStruct;
  meridianStart: boolean = true;
  meridianEnd: boolean = true;
  successMessage: string = "";
  ROOT_URL_CAMPAIGN =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/getcampaign?campaignmanagerid=";
  readonly ROOT_URL_PARTICIPANT =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/getparticipant";
  CONFIGURE_WATCH_POST =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/assignpaticipant";
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    const user = this.authService.user.value;
    this.http.get<any>(this.ROOT_URL_CAMPAIGN + user.email).subscribe(data => {
      this.campaigns = data.campaigns;
    });
    this.http.get<any>(this.ROOT_URL_PARTICIPANT).subscribe(data => {
      // console.log(data.participant);
      // this.participants = data.participant;
      this.participants = data.participant;
    });
  }
  toggleMeridianStart() {
    this.meridianStart = !this.meridianStart;
  }
  toggleMeridianEnd() {
    this.meridianEnd = !this.meridianEnd;
  }

  onSubmit(form: NgForm) {
    const convertedStartTime = this.convertDate(this.starttime);
    const convertedEndTime = this.convertDate(this.endtime);
    const data = {
      watchid: form.value.watchid,
      campaignid: form.value.campaignid,
      participantid: form.value.participantid,
      starttime: convertedStartTime,
      endtime: convertedEndTime
    };
    this.http.post(this.CONFIGURE_WATCH_POST, data).subscribe(data => {
      this.successMessage = "Participant saved successfully!";
      form.reset();
    });
  }

  convertDate(date: any) {
    let year = date.year;
    let month = ("0" + this.starttime.month).slice(-2);
    let day = ("0" + this.starttime.day).slice(-2);
    return year + "-" + month + "-" + day;
  }
}
