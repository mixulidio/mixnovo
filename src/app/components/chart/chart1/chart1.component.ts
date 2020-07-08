import { Line } from './../../models/line.model';
import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';
import { ItemPrecoDt } from '../../models/ItemPrecoRe.model';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'nfx-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  Highcharts : typeof Highcharts = Highcharts;
  chartOptions : any ;

//  itens: ItemPrecoDt[];// = [{codigo: '1', descricao: 'desc', dt: null, valorUnitario: 10}];
//  itensChart1: Line[];
//  displayedColumns: string[] = ['codigo', 'dt', 'descricao','valorUnitario'];

  constructor(private serCtrl: ServiceControlService) { }

  ngOnInit(): void {
//    this.serCtrl.read().subscribe(its => {
//      this.itens = its;
//    });

// https://stackoverflow.com/questions/54434380/how-to-use-add-series-and-update-methods-in-the-high-chart-wrapper-for-angular

    this.serCtrl.readChart1().subscribe(data => {
       this.chartOptions =          data            ;
    });
  }

}
