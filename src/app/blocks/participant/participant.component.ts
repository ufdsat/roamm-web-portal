import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-participant",
  templateUrl: "./participant.component.html"
})
export class ParticipantComponent implements OnInit {
  participantForm: FormGroup;
  readonly ROOT_URL =
    "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/getparticipant";
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.participantForm = this.fb.group({
      participant_id: [],
      first_name: [],
      last_name: [],
      age: [],
      height: [],
      weight: [],
      gender: []
    });
  }

  submit() {
    // this.http.post(this.ROOT_URL, this.participantForm.value);
    this.http
      .post(this.ROOT_URL, this.participantForm.value)
      .subscribe(data => {
        console.log(data);
      });
    // console.log(this.participantForm.value);
  }
}
