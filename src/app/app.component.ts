import {Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {HttpClient, HttpHeaders} from "@angular/common/http";
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'FrontPBI';
  ngOnInit() {
  }
  constructor(private http:HttpClient) {
  }

}
