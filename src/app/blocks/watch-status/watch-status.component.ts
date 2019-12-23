import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { NgbdModalComponentModule } from "../modal/modal-component.module";
import { HttpClient } from "@angular/common/http";
// import { ModalComponent } from "../modal/modal.component";
@Component({
  selector: "app-watch-status",
  templateUrl: "./watch-status.component.html"
})
export class WatchStatusComponent implements OnInit {
  // numericForm: FormGroup;
  // data: any;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}
  ngOnInit() {
    
  }
  data = {
    statusCode: 200,
    body: {
      Items: [
        {
          participantid: "123",
          campaignid: "455",
          watchid: "2125w76",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "rohith",
          starttime: "06/22/2019 1:42 p.m",
          endtime: "06/29/2019 1:42 p.m",
          campaignid: "99",
          watchid: "26EB",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "123999",
          starttime: "122",
          endtime: "122",
          campaignid: "455",
          watchid: "29088",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "ro",
          starttime: "06/22/2019 1:42 p.m",
          endtime: "06/29/2019 1:42 p.m",
          campaignid: "999",
          watchid: "24AF",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "roh",
          starttime: "nostart",
          endtime: "noend",
          campaignid: "99",
          watchid: "DC3C",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "4552",
          starttime: "06/22/2019 1:42 p.m",
          endtime: "06/29/2019 1:42 p.m",
          campaignid: "999",
          watchid: "89140",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "123",
          starttime: "122",
          endtime: "122",
          campaignid: "455",
          watchid: "26",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "123",
          starttime: "122",
          endtime: "122",
          campaignid: "455",
          watchid: "8910",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        },
        {
          participantid: "4553",
          starttime: "05/22/2019 1:42 p.m",
          endtime: "06/29/2019 1:42 p.m",
          campaignid: "999",
          watchid: "17",
          campaign: {
            NumericPrompts: [
              {
                question: "Protien",
                questionid: 1,
                longUIquestion: "Whats your protien intake"
              },
              {
                question: "fat",
                questionid: 2,
                longUIquestion: "Whats your fat intake"
              },
              {
                question: "calcium",
                questionid: 3,
                longUIquestion: "Whats your calcium intake"
              }
            ],
            DiscreetPrompts: [
              {
                question: "Symptions",
                questionid: 4,
                longUIquestion: "The symptoms that patient experienced"
              },
              {
                question: "Mobility",
                questionid: 5,
                longUIquestion: "The extent of mobility of patient"
              }
            ],
            Features: [
              {
                question: "mvm",
                questionid: 91,
                calculate: true
              },
              {
                question: "svdm",
                questionid: 92,
                calculate: true
              },
              {
                question: "mangle",
                questionid: 93,
                calculate: true
              },
              {
                question: "sdangle",
                questionid: 94,
                calculate: true
              },
              {
                question: "df",
                questionid: 95,
                calculate: true
              },
              {
                question: "fpdf",
                questionid: 96,
                calculate: true
              },
              {
                question: "p625",
                questionid: 97,
                calculate: true
              }
            ]
          }
        }
      ],
      Count: 9,
      ScannedCount: 9,
      ResponseMetadata: {
        RequestId: "UP94CN0FCBF0EODKQTBRHNN9CBVV4KQNSO5AEMVJF66Q9ASUAAJG",
        HTTPStatusCode: 200,
        HTTPHeaders: {
          server: "Server",
          date: "Fri, 13 Dec 2019 14:11:22 GMT",
          "content-type": "application/x-amz-json-1.0",
          "content-length": "1248",
          connection: "keep-alive",
          "x-amzn-requestid":
            "UP94CN0FCBF0EODKQTBRHNN9CBVV4KQNSO5AEMVJF66Q9ASUAAJG",
          "x-amz-crc32": "3465931326"
        },
        RetryAttempts: 0
      }
    }
  };

  // openModal() {
  //   const modalRef = this.modalService.open(ModalComponent);
  // }
}
