import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nfx-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  constructor(private serCtrl: ServiceControlService) { }

  ngOnInit(): void {
  }

}
