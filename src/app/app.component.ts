import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ROAMM Web Portal";
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
  // readonly ROOT_URL = "";
  // constructor(private http: HttpClient) {}

  // discretePrompt: any;
  // numericPrompt: any;
  // cognitive: any;
  // watch: any;

  // receiveDiscretePrompt($event) {
  //   this.discretePrompt = $event;
  // }

  // receiveNumericPrompt($event) {
  //   this.numericPrompt = $event;
  // }

  // receiveCognitive($event) {
  //   this.cognitive = $event;
  // }

  // receiveWatch($event) {
  //   this.watch = $event;
  // }

  // // submit() {
  // //   console.log(
  // //     this.discretePrompt,
  // //     this.numericPrompt,
  // //     this.cognitive,
  // //     this.watch
  // //   );

  // postData() {
  //   const data = {
  //     discretePrompt: this.discretePrompt,
  //     numericPrompt: this.numericPrompt,
  //     cognitive: this.cognitive,
  //     watch: this.watch
  //   };
  //   console.log(data);
  //   // this.http.post(this.ROOT_URL, data);
  // }
}
// }
