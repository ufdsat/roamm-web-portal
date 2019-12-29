import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { NgbdModalComponentModule } from '../modal/modal-component.module';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
// import { ModalComponent } from "../modal/modal.component";
@Component({
	selector: 'app-watch-status',
	templateUrl: './watch-status.component.html'
})
export class WatchStatusComponent implements OnInit {
	// numericForm: FormGroup;
	// data: any;
	watchData: any;
	constructor(
		private fb: FormBuilder,
		private modalService: NgbModal,
		private http: HttpClient,
		private data: DataService
	) {}
	ngOnInit() {
		this.data.currentWatchData.subscribe((data) => (this.watchData = data));
	}
	public numericPromptModal(watchid, questionid) {
		this.http
			.get<any>(
				'https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/apifordata?watchid=' +
					watchid +
					'+' +
					questionid
			)
			.subscribe((d) => this.data.changeData(d));
	}
	data1 = {
		statusCode: 200,
		body: {
			Items: [
				{
					participantid: '123',
					campaignid: '455',
					watchid: '26EB',
					campaign: {
						NumericPrompts: [
							{
								question: 'Protien',
								questionid: 1,
								longUIquestion: 'Whats your protien intake'
							},
							{
								question: 'fat',
								questionid: 2,
								longUIquestion: 'Whats your fat intake'
							},
							{
								question: 'calcium',
								questionid: 3,
								longUIquestion: 'Whats your calcium intake'
							}
						],
						DiscreetPrompts: [
							{
								question: 'Symptions',
								questionid: 4,
								longUIquestion: 'The symptoms that patient experienced'
							},
							{
								question: 'Mobility',
								questionid: 5,
								longUIquestion: 'The extent of mobility of patient'
							}
						],
						Features: [
							{
								question: 'mvm',
								questionid: 91,
								calculate: true
							},
							{
								question: 'svdm',
								questionid: 92,
								calculate: true
							},
							{
								question: 'mangle',
								questionid: 93,
								calculate: true
							},
							{
								question: 'sdangle',
								questionid: 94,
								calculate: true
							},
							{
								question: 'df',
								questionid: 95,
								calculate: true
							},
							{
								question: 'fpdf',
								questionid: 96,
								calculate: true
							},
							{
								question: 'p625',
								questionid: 97,
								calculate: true
							}
						]
					}
				}
			]
		}
	};

	// openModal() {
	//   const modalRef = this.modalService.open(ModalComponent);
	// }
}
