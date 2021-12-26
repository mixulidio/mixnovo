import { ServiceControlService } from "./../../services/service-control.service";
import { NotaFiscal } from "./../models/notaFiscal.model";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "nota-fiscal",
  templateUrl: "./nota-fiscal.component.html",
  styleUrls: ["./nota-fiscal.component.css"],
})
export class NotaFiscalComponent implements OnInit {
  @Input() chaveInput: string;
  notaFiscal: NotaFiscal;
  spinnerWait = false;

  constructor(
    private serviceControlService: ServiceControlService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.spinnerWait = true;
    if (this.chaveInput == null) {
      this.chaveInput = this.route.snapshot.params["chave"];
    }
    this.serviceControlService.consultaNotaFiscal(this.chaveInput).subscribe(
      (ret) => {
        this.notaFiscal = ret;
        this.spinnerWait = false;
      },
      (error) => {
        this.notaFiscal = null;
        this.spinnerWait = false;
        this.notificationService.notify(
          "Erro: " + this.chaveInput + " : " + error
        );
      }
    );
  }
}
