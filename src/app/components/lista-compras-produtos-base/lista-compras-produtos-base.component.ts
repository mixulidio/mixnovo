import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceControlService } from 'src/app/services/service-control.service';
import { ItemNota } from '../models/ItemPrecoRe.model';

@Component({
  selector: 'nfx-lista-compras-produtos-base',
  templateUrl: './lista-compras-produtos-base.component.html',
  styleUrls: ['./lista-compras-produtos-base.component.css']
})
export class ListaComprasProdutosBaseComponent implements OnInit {
  
  displayedColumnsItens: string[] = ["butao", "descricao1", "avg1"];
  dataSourceItens = new MatTableDataSource<ItemNota>();
  @ViewChild(MatPaginator, { static: true }) paginatorItens: MatPaginator;
  @ViewChild(MatSort, { static: true }) sortItens: MatSort;
  filtro:string = "";

  @Output() resposta = new EventEmitter();
  
  constructor(
    private service: ServiceControlService,
  ) {}

  ngOnInit(): void {
    this.ngOnInitItens();
  }

  ngOnInitItens(): void {
    this.dataSourceItens.paginator = this.paginatorItens;
    this.service.listaParaListaCompras().subscribe((its) => {
      this.dataSourceItens.data = its;
      this.dataSourceItens.sort = this.sortItens;
    });
  }

  applyFilterItens(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceItens.filter = filterValue;
  }

  limpaFiltro(){
    this.dataSourceItens.filter = "";
    this.filtro = "";
  }

  clickAddItem(row : ItemNota){
    this.service.incluiItemLista(row).subscribe(it => {
      this.resposta.emit(true);
      this.limpaFiltro();
    })
  }

}
