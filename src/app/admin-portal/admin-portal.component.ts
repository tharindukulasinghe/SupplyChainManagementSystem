import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admin-portal",
  templateUrl: "./admin-portal.component.html",
  styleUrls: ["./admin-portal.component.css"]
})
export class AdminPortalComponent implements OnInit {
  section;
  trains;
  error;
  uorders;
  errort;

  constructor(private route: ActivatedRoute, private data: DataService) {
    route.queryParamMap.subscribe(params => {
      this.section = params.get("section");
    });
    this.error = false;
    this.errort = false;
    this.data.getAllTrains().subscribe(response => {
      let trainschedules = JSON.parse(JSON.stringify(response));
      this.trains = trainschedules.data;
    });

    this.data.getUnassignedOrders().subscribe(response => {
      let uodr = JSON.parse(JSON.stringify(response));
      this.uorders = uodr.data;
    });
  }

  onSubmit(f) {
    this.data.addTrain(f).subscribe(res => {
      let result = JSON.parse(JSON.stringify(res));
      if (result.error == 1) {
        this.error = true;
      } else {
        this.data.getAllTrains().subscribe(response => {
          let trainschedules = JSON.parse(JSON.stringify(response));
          this.trains = trainschedules.data;
        });
        this.error = false;
      }
    });
  }

  assign(f) {
    this.data.assign(f).subscribe(res => {
      let result = JSON.parse(JSON.stringify(res));
      if (result.error == 1) {
        this.errort = true;
        console.log(result);
      } else {
        this.data.getAllTrains().subscribe(response => {
          let trainschedules = JSON.parse(JSON.stringify(response));
          this.trains = trainschedules.data;
        });

        this.data.getUnassignedOrders().subscribe(response => {
          let uodr = JSON.parse(JSON.stringify(response));
          this.uorders = uodr.data;
        });
        this.errort = false;
      }
    });
  }

  ngOnInit() {}
}
