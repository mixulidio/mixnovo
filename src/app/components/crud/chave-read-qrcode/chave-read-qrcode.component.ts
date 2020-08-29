import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ServiceControlService } from 'src/app/services/service-control.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'chave-read-qrcode',
  templateUrl: './chave-read-qrcode.component.html',
  styleUrls: ['./chave-read-qrcode.component.css']
})
export class ChaveReadQrcodeComponent implements OnInit {

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;

  scannerEnabled: boolean = true;
  chavesStr: string;
  spinnerWait = false;

  constructor(private serviceControlService: ServiceControlService,
              private router: Router,
              private notificationService: NotificationService) {}

  ngOnInit(): void {
  }

  public scanSuccessHandler($event: any) {
    this.spinnerWait = true;
    this.scannerEnabled = false;
    this.chavesStr = $event;
    var chave =  $event

    this.serviceControlService.consultaNotaFiscal($event).subscribe(ret => {
      this.spinnerWait = false;
      this.chavesStr = "Ok " + ret;
      this.notificationService.notify('Nota(s) importada(s).');
      this.router.navigate(["/nota-fiscal", ret.chave]);
    },(error) =>{
      this.spinnerWait = false;
      this.notificationService.notify('Erro ao consultar a nota: ' + error.message);
      this.chavesStr = "Erro: " + error.message;
    });
  }

  public enableScanner() {
    this.scannerEnabled = true; // !this.scannerEnabled; 
  }

}
