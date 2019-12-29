import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	// changeMessage(arg0: string) {
	// 	throw new Error('Method not implemented.');
	// }
	// private watchData = new BehaviorSubject<any>('');
	// currentWatchData = this.watchData.asObservable();
	// constructor() {}

	// changeData(data) {
	// 	this.watchData.next(data);
	// }
	// clearData() {
	// 	this.watchData.next('');
	// }
	private data = new Subject<any>();
	sendData(d: any) {
		this.data.next(d);
	}
	clearData() {
		this.data.next();
	}
	getData(): Observable<any> {
		return this.data.asObservable();
	}
}
