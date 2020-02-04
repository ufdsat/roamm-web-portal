import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { DataService } from "../data.service";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ElementFinder } from "protractor";

@Component({
  selector: "ngbd-modal-content",
  templateUrl: "./modal-content.component.html"
})
export class NgbdModalContent {
  @Input() name;
  questionId: any;
  category: string;
  subscription: Subscription;
  showSpinner: boolean = false;
  questionIdList: any;
  npQuestions: any;
  dpQuestions: any;
  featureQuestions: any;
  dict: any = {};

  @Output() questionIdEvent = new EventEmitter<any>();

  constructor(
    public activeModal: NgbActiveModal,
    private data: DataService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    let numericPromptQuestions = [];

    let discretePromptQuestions = [];

    let featureQuestions = [];
    console.log(this.dict);
    if (this.category == "Numeric Prompts") {
      numericPromptQuestions = this.getQuestionList(this.npQuestions);
    } else if (this.category == "Discrete Prompts") {
      discretePromptQuestions = this.getQuestionList(this.dpQuestions);
    } else {
      featureQuestions = this.getQuestionList(this.featureQuestions);
    }

    this.questionIdList =
      this.category == "Numeric Prompts"
        ? numericPromptQuestions
        : this.category == "Discrete Prompts"
        ? discretePromptQuestions
        : featureQuestions;
    if (this.category == undefined) {
      this.category = "Features";
    }
  }
  getQuestionList(questions) {
    let questionList = [];
    for (var i = 0; i < questions.length; i++) {
      questionList.push(questions[i].question);
      this.dict[questions[i].question] = questions[i].questionid;
    }
    return questionList;
  }
  toggleEvent(event) {
    if (event.target.checked) {
      this.showSpinner = true;
      this.questionId = this.dict[event.target.value];
      this.questionIdEvent.emit(this.questionId);
    }
  }
}

@Component({
  selector: "ngbd-modal-component",
  templateUrl: "./modal.component.html"
})
export class NgbdModalComponent {
  @Input("watchId") watchId: string;
  @Input("category") category: string;
  @Input("npQuestions") np: string;
  @Input("dpQuestions") dp: string;
  @Input("featureQuestions") featureQuestions: string;
  questionId: any;
  subscription: Subscription;
  modalRef: any;
  constructor(
    private modalService: NgbModal,
    private data: DataService,
    private http: HttpClient
  ) {}

  open() {
    this.modalRef = this.modalService.open(NgbdModalContent);

    this.modalRef.componentInstance.category = this.category;
    this.modalRef.componentInstance.npQuestions = this.np;
    this.modalRef.componentInstance.dpQuestions = this.dp;

    this.modalRef.componentInstance.featureQuestions = this.featureQuestions;
    console.log(this.np, this.dp, this.featureQuestions);
    this.modalRef.componentInstance.questionIdEvent.subscribe(value => {
      this.questionId = value;
      this.numericPromptModal(this.watchId, this.questionId);
    });
  }

  public numericPromptModal(watchid, questionid) {
    this.http
      .get<any>(
        "https://dhfytq5t67.execute-api.us-east-2.amazonaws.com/campaign/apifordata?watchid=" +
          watchid +
          "+" +
          questionid
      )
      .subscribe(d => {
        this.modalRef.componentInstance.showSpinner = false;

        this.data.sendData(d);
      });
  }
}
