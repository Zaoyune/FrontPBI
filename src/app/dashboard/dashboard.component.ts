import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Chart} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  title = 'FrontPBI';
  public token : any;
  public chart: any;
  public offers: any;
  isVisible = false;
  isVisible1 = false;
  isVisible2 = false;
  isVisible3 = false;
  isVisible4 = false;
  isVisible5 = false;
  ngOnInit() {
    this.createChart();
    this.getDataWithHeaders();
  }
  constructor(private http:HttpClient) {
  }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Janvier', 'Fevrier', 'Mars','Avril',
          'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre' ],
        datasets: [
          {
            label: "Score par mois",
            data: ['200','500', '600', '900', '1200', '1800', '2200', '4000','4000', '7000', '8000', '10000'],
            backgroundColor: 'blue'
          },

        ]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              display: true,
            },
          },
          y: {
            ticks: {
              display: true,
            },
          },
        },
      },

    });
  }
  getDataWithHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let o = new URLSearchParams();
    o.append('grant_type', 'client_credentials');
    o.append('client_id', 'HACKATHONPPD1');
    o.append('client_secret', 'i4uBCRPZ9C6BK2dJ1y8g');
    this.http.post('https://authppd.web.bpifrance.fr/mga/sps/oauth/oauth20/token',o, { headers }).subscribe(data => {
      // handle the response data
      this.token = data;
      console.log(this.token['access_token']);
    });
    let e = new URLSearchParams();
    e.append('x-api-key', 'AJfnLAnZNI_-Y5HYAF_Urudff#eTx6b8NZut!upqWv62yMqfvvdui4hljISbBP9F');
    e.append('Authorization', 'Bearer '+ this.token['access_token']);
    this.http.post('https://rdo.preprod.api-at.cloud.bpifrance.fr/rdo/rest/v1/offers',e, { headers }).subscribe(data => {
      // handle the response data
      this.offers = data;
      console.log(this.offers);
    });
  }
}
