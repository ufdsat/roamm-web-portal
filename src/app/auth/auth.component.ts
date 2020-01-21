import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnInit {
	isLogin = true;
	error: string = null;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	onSwitchMode() {
		this.isLogin = !this.isLogin;
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}

		const email = form.value.username;
		const password = form.value.password;
		if (this.isLogin) {
			this.authService.login(email, password).subscribe(
				(resData) => {
					this.router.navigate([ '' ]);
				},
				(errorMessage) => {
					this.error = errorMessage;
				}
			);
		} else {
			this.authService.signup(email, password).subscribe(
				(resData) => {
					this.router.navigate([ '' ]);
				},
				(errorMessage) => {
					this.error = errorMessage;
				}
			);
		}
		form.reset();
	}
}
