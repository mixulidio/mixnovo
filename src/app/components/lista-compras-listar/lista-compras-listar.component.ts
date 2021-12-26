import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceControlService } from 'src/app/services/service-control.service';
import { ItemListaComrpas } from '../models/itemListaCompras.model';

@Component({
  selector: 'nfx-lista-compras-listar',
  templateUrl: './lista-compras-listar.component.html',
  styleUrls: ['./lista-compras-listar.component.css']
})
export class ListaComprasListarComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['select', "descricao", "preco", "butao"]; // TODO desc produto
  dataSource = new MatTableDataSource<ItemListaComrpas>();
  selection = new SelectionModel<ItemListaComrpas>(true, []);
  //@ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: ServiceControlService,
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.carregaListaCompras();
  }

  carregaListaCompras(){
    this.service.listaCompras().subscribe((its) => {
      this.dataSource.data = its;
      this.dataSource.sort = this.sort;
    });
  }

  public calculateTotal() {
    return this.dataSource.data.reduce((accum, curr) => accum + curr.itemNota.valorUnitario, 0);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: ItemListaComrpas): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id }`; // row.id  + 1
  }

  change(event, row){
    row.tickEd = event.checked;
    this.service.atualizaItemListaCompras(row)
    .subscribe(data => {
      //console.log(data);
   });
  }

  checkedFun(row : ItemListaComrpas){
    return row.tickEd;
  }

  deleteItem(row : ItemListaComrpas){
    this.service.deleteItem(row)
    .subscribe(data => {
      this.carregaListaCompras();
   });
  }

}
