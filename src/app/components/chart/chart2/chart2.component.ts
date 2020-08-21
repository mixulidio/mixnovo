import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { ServiceControlService } from "./../../../services/service-control.service";
import { ItemNota } from "../../models/ItemPrecoRe.model";

@Component({
  selector: "chart2",
  templateUrl: "./chart2.component.html",
  styleUrls: ["./chart2.component.css"],
})
export class Chart2Component implements OnInit {
  displayedColumns: string[] = ["dt", "descricao", "valorUnitario"];
  dataSource = new MatTableDataSource<ItemNota>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private serCtrl: ServiceControlService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.serCtrl.read().subscribe((its) => {
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
