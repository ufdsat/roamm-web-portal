import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.username;
    const password = form.value.password;
    this.authService.signup(email, password).subscribe(
      resData => {
        this.router.navigate([""]);
      },
      errorMessage => {
        this.error = errorMessage;
      }
    );
    form.reset();
  }
}
