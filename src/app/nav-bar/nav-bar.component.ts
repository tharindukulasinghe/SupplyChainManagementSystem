import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  username = "test";

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
