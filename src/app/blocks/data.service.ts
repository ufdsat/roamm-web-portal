import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	changeMessage(arg0: string) {
		throw new Error('Method not implemented.');
	}
	private watchData = new BehaviorSubject<any>('');
	currentWatchData = this.watchData.asObservable();
	constructor() {}

	changeData(data) {
		this.watchData.next(data);
	}
}
