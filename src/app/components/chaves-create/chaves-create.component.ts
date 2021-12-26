import { NotaFiscal } from "./../models/notaFiscal.model";
import { Chaves } from "./../models/chaves.model";
import { ServiceControlService } from "./../../services/service-control.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "chaves-create",
  templateUrl: "./chaves-create.component.html",
  styleUrls: ["./chaves-create.component.css"],
})
export class ChavesCreateComponent implements OnInit {
  chavesStr: string;
  chaves: Chaves = { chave: null }; // TODO new ?
  spinnerWait = false;
  chavesParaConsulta: string[];

  constructor(
    private serviceControlService: ServiceControlService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  createProcess() {
    if (this.chavesStr == null || this.chavesStr.trim().length == 0) {
      return;
    }
    this.spinnerWait = true;
    this.chaves.chave = this.chavesStr.replace(" ", "").split("\n");
    this.chavesStr = "";
    this.chavesParaConsulta = [];
    var self = this;
    this.serviceControlService.createProcess(this.chaves).subscribe((ret) => {
      this.spinnerWait = false;
      if (ret != null) {
        var erros: string = "";
        ret.chave.forEach((element) => {
          erros = erros + "\n" + element;
        });
        if (erros != null && erros != "") {
          this.notificationService.notify("Chaves com erros ou já importadas");
          this.chavesStr = erros;
        }
      } else {
        this.notificationService.notify("Chave(s) importada(s) com sucesso.");
      }

      self.chaves.chave.forEach(function (value) {
        if (value != "") self.chavesParaConsulta.push(value.trim());
      });
    });
  }
}
