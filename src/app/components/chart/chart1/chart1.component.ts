import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';
import { ItemPrecoDt } from '../../models/ItemPrecoDt.model';

@Component({
  selector: 'nfx-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  itens: ItemPrecoDt[];

  constructor(private serCtrl: ServiceControlService) { }

  ngOnInit(): void {
    
    this.serCtrl.read().subscribe(its => {
      this.itens = its;
    })
    ;
  }



}
