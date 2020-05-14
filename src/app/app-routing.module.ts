import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./blocks/home/home.component";
import { ConfigureWatchComponent } from "./blocks/configure-watch/configure-watch.component";
import { WatchStatusComponent } from "./blocks/watch-status/watch-status.component";
import { AuthComponent } from "./auth/auth.component";
import { ParticipantComponent } from "./blocks/participant/participant.component";
import { AuthGuard } from "./auth/auth.guard";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NumericPromptComponent } from "./blocks/numeric-prompt/numeric-prompt.component";
import { DiscretePromptComponent } from "./blocks/discrete-prompt/discrete-prompt.component";
import { WatchComponent } from "./blocks/watch/watch.component";
import { FeatureComponent } from "./blocks/feature/feature.component";
import { CognitiveComponent } from "./blocks/cognitive/cognitive.component";

const routes: Routes = [
  {
    path: "create-campaign",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "Participant",
    component: ParticipantComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "ConfigureWatch",
    component: ConfigureWatchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: WatchStatusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "NumericPrompt",
    component: NumericPromptComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "DiscretePrompt",
    component: DiscretePromptComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "Watch",
    component: WatchComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "Feature",
    component: FeatureComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "Cognitive",
    component: CognitiveComponent,
    canActivate: [AuthGuard],
  },
  { path: "auth", component: AuthComponent },
  { path: "3232cb6b61415092122d840c1f61664b", component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
