import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from '../charts/charts.component';

import { NgbdModalComponent, NgbdModalContent } from './modal.component';

@NgModule({
	imports: [ BrowserModule, NgbModule ],
	declarations: [ NgbdModalComponent, NgbdModalContent, ChartComponent ],
	exports: [ NgbdModalComponent ],
	bootstrap: [ NgbdModalComponent ],
	entryComponents: [ NgbdModalContent ]
})
export class NgbdModalComponentModule {}
