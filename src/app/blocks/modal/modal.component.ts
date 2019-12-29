import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WatchStatusComponent } from '../watch-status/watch-status.component';

import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'ngbd-modal-content',
	templateUrl: './modal-content.component.html'
})
export class NgbdModalContent {
	@Input() name;
	subscription: Subscription;
	showSpinner: boolean = true;
	constructor(public activeModal: NgbActiveModal, private data: DataService) {
		this.subscription = this.data.getData().subscribe((data) => {
			if (data) {
				this.showSpinner = false;
				console.log('Inside modal constructor');
			}
		});
	}
	ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
	clearData() {
		this.data.clearData();
	}
}

@Component({
	selector: 'ngbd-modal-component',
	templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
	constructor(private modalService: NgbModal, private data: DataService) {}

	open() {
		const modalRef = this.modalService.open(NgbdModalContent, { windowClass: 'modal-class' });
		modalRef.componentInstance.name = 'World';
	}
}
