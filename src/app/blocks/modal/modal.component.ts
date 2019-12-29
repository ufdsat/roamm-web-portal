import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WatchStatusComponent } from '../watch-status/watch-status.component';
import { DataService } from '../data.service';

@Component({
	selector: 'ngbd-modal-content',
	templateUrl: './modal-content.component.html'
})
export class NgbdModalContent {
	@Input() name;

	constructor(public activeModal: NgbActiveModal, private data: DataService) {}
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
		const modalRef = this.modalService.open(NgbdModalContent);
		modalRef.componentInstance.name = 'World';
	}
}
