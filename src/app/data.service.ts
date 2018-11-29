import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllTrains() {
    return this.http.get("http://localhost:3000/trains/all");
  }

  addTrain(details) {
    return this.http.post(
      "http://localhost:3000/trains/add",
      JSON.stringify(details)
    );
  }

  getUnassignedOrders() {
    return this.http.get("http://localhost:3000/orders/getUnassigned");
  }

  assign(details) {
    return this.http.post("http://localhost:3000/orders/assign", details);
  }
}
