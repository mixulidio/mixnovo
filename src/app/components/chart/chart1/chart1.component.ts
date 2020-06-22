import { Line } from './../../models/line.model';
import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';
import { ItemPrecoDt } from '../../models/ItemPrecoDt.model';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'nfx-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  Highcharts : typeof Highcharts = Highcharts;
  updateFlag: boolean = false; 
  chartOptions = {
    title: {
      text: 'My custom title'
    },
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  itens: ItemPrecoDt[];// = [{codigo: '1', descricao: 'desc', dt: null, valorUnitario: 10}];
  itensChart1: Line[];
  displayedColumns: string[] = ['codigo', 'dt', 'descricao','valorUnitario'];

  constructor(private serCtrl: ServiceControlService) { }

  ngOnInit(): void {
//    this.serCtrl.read().subscribe(its => {
//      this.itens = its;
//    });

// https://stackoverflow.com/questions/54434380/how-to-use-add-series-and-update-methods-in-the-high-chart-wrapper-for-angular
    
    this.serCtrl.readChart1().subscribe(data => {

      console.log( data ); 
      this.chartOptions =          data            ;
      
      this.updateFlag = true;
     // console.log( JSON.parse(data) );

/*
      const updated_normal_data = [];
      const updated_abnormal_data = [];
      data.forEach(row => {
        const temp_row = [
          new Date(row.timestamp).getTime(),
          row.value
        ];
        row.Normal === 1 ? updated_normal_data.push(temp_row) : updated_abnormal_data.push(temp_row);
      });
      this.chartOptions.series[0]['data'] = updated_normal_data;
      this.chartOptions.series[1]['data'] = updated_abnormal_data;
      Highcharts.chart('container', this.chartOptions);
*/


    })
  }

}
