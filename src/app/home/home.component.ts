import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  navigate() {
    console.log(this.auth.getUserType());

    if (this.auth.getUserType() == "admin") {
      this.router.navigate(["/admin-portal"]);
    }
  }
}
