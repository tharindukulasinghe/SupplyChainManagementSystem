import { AuthService } from "./auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { DriverPortalComponent } from './driver-portal/driver-portal.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavBarComponent, AdminPortalComponent, DriverPortalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
