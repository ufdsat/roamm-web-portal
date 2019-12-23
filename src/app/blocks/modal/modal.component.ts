import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from '../charts/charts.component';

@Component({
	selector: 'ngbd-modal-content',
	templateUrl: './modal-content.component.html'
})
export class NgbdModalContent {
	@Input() name;

	constructor(public activeModal: NgbActiveModal) {}
}

@Component({
	selector: 'ngbd-modal-component',
	templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
	constructor(private modalService: NgbModal) {}

	open() {
		const modalRef = this.modalService.open(NgbdModalContent);
		modalRef.componentInstance.name = 'World';
	}
}
