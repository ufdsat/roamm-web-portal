import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'ngbd-modal-content',
	templateUrl: './modal-content.component.html'
})
export class NgbdModalContent {
	@Input() name;
	questionId: any;
	subscription: Subscription;
	showSpinner: boolean = true;
	@Output() questionIdEvent = new EventEmitter<any>();

	constructor(public activeModal: NgbActiveModal, private data: DataService, private http: HttpClient) {}

	toggleEvent(event) {
		if (event.target.checked) {
			this.questionId = event.target.value;
			this.questionIdEvent.emit(this.questionId);
		}
	}
}

@Component({
	selector: 'ngbd-modal-component',
	templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
	@Input('watchId') watchId: string;
	questionId: any;
	subscription: Subscription;
	constructor(private modalService: NgbModal, private data: DataService, private http: HttpClient) {}

	open() {
		const modalRef = this.modalService.open(NgbdModalContent, { windowClass: 'modal-class' });
		modalRef.componentInstance.name = 'World';
		modalRef.componentInstance.questionIdEvent.subscribe((value) => {
			this.questionId = value;
			this.numericPromptModal(this.watchId, this.questionId);
		});
	}

	public numericPromptModal(watchid, questionid) {
		this.http
			.get<any>(
				'https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/apifordata?watchid=' +
					watchid +
					'+' +
					questionid
			)
			.subscribe((d) => {
				console.log(d);
				this.data.sendData(d);
			});
	}
}
