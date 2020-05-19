import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  user: any;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user, !!user);
      this.user = user;
      // console.log(user);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
