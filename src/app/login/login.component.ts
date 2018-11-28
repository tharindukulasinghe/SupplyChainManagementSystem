import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email;
  password;
  error;
  errormessage;
  constructor(private router: Router, private auth: AuthService) {
    this.error = false;
  }

  ngOnInit() {}

  onSubmit() {
    //console.log(this.email + "  " + this.password);
    const details = {
      email: this.email,
      password: this.password
    };

    this.auth.login(details).subscribe(response => {
      let result = JSON.parse(JSON.stringify(response));
      if (result && result.token) {
        localStorage.setItem("token", result.token);
        console.log(result.token);
        this.router.navigate(["/"]);
      } else {
        console.log(result);
        this.error = true;
        this.errormessage = result.data;
      }
    });
  }
}
