import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { ServiceControlService } from "./../../../services/service-control.service";
import { ItemPrecoRe } from "../../models/ItemPrecoRe.model";

@Component({
  selector: 'nfx-list1qtd',
  templateUrl: './list1qtd.component.html',
  styleUrls: ['./list1qtd.component.css']
})
export class List1qtdComponent implements OnInit {
  displayedColumns: string[] = ["descricao", "qtd"];
  dataSource = new MatTableDataSource<ItemPrecoRe>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private serCtrl: ServiceControlService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.serCtrl.listQtdItem().subscribe((its) => {
      this.dataSource.data = its;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
