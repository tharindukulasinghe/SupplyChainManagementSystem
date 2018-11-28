import { JwtHelper } from "angular-jwt";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(details) {
    return this.http.post("http://localhost:3000/users/login", details);
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem("token");
    return token != null && !helper.isTokenExpired(token);
  }

  getUserType() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem("token");
    const user = helper.decodeToken(token);
    return user.payload.type;
  }
}
