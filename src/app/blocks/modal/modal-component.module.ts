import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphsComponent } from '../graphs/graphs.component';

import { NgbdModalComponent, NgbdModalContent } from './modal.component';

@NgModule({
	imports: [ BrowserModule, NgbModule ],
	declarations: [ NgbdModalComponent, NgbdModalContent, GraphsComponent ],
	exports: [ NgbdModalComponent ],
	bootstrap: [ NgbdModalComponent ],
	entryComponents: [ NgbdModalContent ]
})
export class NgbdModalComponentModule {}
