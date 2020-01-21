import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
	user = new BehaviorSubject<User>(null);
	private tokenExpirationTimer: any;
	constructor(private http: HttpClient, private router: Router) {}
	signup(email: string, password: string) {
		return this.http
			.post<
				AuthResponseData
			>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQG52fnC0KJQq5HbCLct1ddKfXCDCu2cU', {
				email: email,
				password: password,
				returnSecureToken: true
			})
			.pipe(
				catchError(this.handleError),
				tap((resData) => {
					this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
				})
			);
	}

	login(email: string, password: string) {
		return this.http
			.post<
				AuthResponseData
			>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQG52fnC0KJQq5HbCLct1ddKfXCDCu2cU',
				{
					email: email,
					password: password,
					returnSecureToken: true
				}
			)
			.pipe(
				catchError(this.handleError),
				tap((resData) => {
					this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
				})
			);
	}

	logout() {
		this.user.next(null);
		localStorage.removeItem('userData');
		if (this.tokenExpirationTimer) {
			clearTimeout(this.tokenExpirationTimer);
		}
		this.tokenExpirationTimer = null;
		this.router.navigate([ '/auth' ]);
	}

	autoLogout(expirationDuration: number) {
		this.tokenExpirationTimer = setTimeout(() => {
			this.logout();
		}, expirationDuration);
	}

	autoLogin() {
		const userData: {
			email: string;
			id: string;
			_token: string;
			_tokenExpirationDate: Date;
		} = JSON.parse(localStorage.getItem('userData'));
		if (!userData) {
			return;
		}
		const loadedUser = new User(
			userData.email,
			userData.id,
			userData._token,
			new Date(userData._tokenExpirationDate)
		);

		if (loadedUser.token) {
			this.user.next(loadedUser);
			const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
			this.autoLogout(expirationDuration);
		}
	}

	private handleError(errorResponse: HttpErrorResponse) {
		let errorMessage = 'An unknown error occured';
		if (!errorResponse.error || !errorResponse.error.error) {
			return throwError(errorMessage);
		}
		switch (errorResponse.error.error.message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'This email already exists!';
				break;
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'Email not found!';
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'The password enetered is not correct';
		}
		return throwError(errorMessage);
	}

	private handleAuthentication(email: string, localId: string, token: string, expiresIn: number) {
		const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
		const user = new User(email, localId, token, expirationDate);
		this.user.next(user);
		this.autoLogout(expiresIn * 1000);
		localStorage.setItem('userData', JSON.stringify(user));
	}
}
