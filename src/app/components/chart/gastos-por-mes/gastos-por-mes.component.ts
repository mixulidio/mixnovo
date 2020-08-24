import { NotaFiscal } from './../../models/notaFiscal.model'; 
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { ServiceControlService } from "./../../../services/service-control.service";
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'gastos-por-mes',
  templateUrl: './gastos-por-mes.component.html',
  styleUrls: ['./gastos-por-mes.component.css']
})
export class GastosPorMesComponent implements OnInit {
  displayedColumns: string[] = ["dataEmissao", "valorTotal", "valorDesconto", "qtdNotas", "qtdItens"];
  dataSource = new MatTableDataSource<NotaFiscal>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  private subject: Subject<number> = new Subject();

  constructor(private serCtrl: ServiceControlService) {}

  ngOnInit(): void {
    this.consultaMeses(12);
    this.subject.pipe(
      debounceTime(600),
      distinctUntilChanged() // only emit if value is different from previous value
     ).subscribe((res) => {
       this.consultaMeses(res);
     });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onKeyUpS(qtd: number){
    this.subject.next(qtd);
  }

  consultaMeses(qtd: number){
    if(qtd != null && qtd != undefined && qtd > 0){
      this.dataSource.paginator = this.paginator;
      this.serCtrl.gastosPorMes(qtd).subscribe((its) => {
        //this.dataSource = new MatTableDataSource(its);
        this.dataSource.data = its;
        this.dataSource.sort = this.sort;
      });
    }
  }
}
