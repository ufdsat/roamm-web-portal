import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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
    WatchStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "Participant", component: ParticipantComponent },
      { path: "ConfigureWatch", component: ConfigureWatchComponent },
      { path: "WatchStatus", component: WatchStatusComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
