import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  ReactiveFormsModule,
  FormControlDirective,
  FormGroupDirective,
  FormsModule
} from "@angular/forms";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DiscretePromptComponent } from "./blocks/discrete-prompt/discrete-prompt.component";
import { NumericPromptComponent } from "./blocks/numeric-prompt/numeric-prompt.component";
import { CognitiveComponent } from "./blocks/cognitive/cognitive.component";
import { WatchComponent } from "./blocks/watch/watch.component";
import { NavbarComponent } from "./blocks/partials/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { ParticipantComponent } from "./blocks/participant/participant.component";
import { FeatureComponent } from "./blocks/feature/feature.component";
import { ConfigureWatchComponent } from "./blocks/configure-watch/configure-watch.component";
import { WatchStatusComponent } from "./blocks/watch-status/watch-status.component";
import { HomeComponent } from "./blocks/home/home.component";
import { NgbdModalComponentModule } from "./blocks/modal/modal-component.module";
import { GraphsComponent } from "./blocks/graphs/graphs.component";
import { AuthComponent } from "./auth/auth.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoaderComponent } from "./ui/loader/loader.component";
// import { SpinnerComponent } from './ui/spinner/spinner.component';
// import { ChartComponent } from './blocks/charts/charts.component';
// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@NgModule({
  declarations: [
    AppComponent,
    DiscretePromptComponent,
    NumericPromptComponent,
    CognitiveComponent,
    WatchComponent,
    ParticipantComponent,
    HomeComponent,
    NavbarComponent,
    ConfigureWatchComponent,
    FeatureComponent,
    WatchStatusComponent,
    AuthComponent,
    SignUpComponent,
    LoaderComponent
    // SpinnerComponent
    // GraphsComponent
    // ChartComponent
    // NgbdModalComponentModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    NgbModule,
    NgbdModalComponentModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: "", component: HomeComponent },
      // { path: "Participant", component: ParticipantComponent },
      // { path: "ConfigureWatch", component: ConfigureWatchComponent },
      // { path: "WatchStatus", component: WatchStatusComponent },
      // { path: "auth", component: AuthComponent }
    ])
  ],
  providers: [NgbActiveModal, FormControlDirective, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
