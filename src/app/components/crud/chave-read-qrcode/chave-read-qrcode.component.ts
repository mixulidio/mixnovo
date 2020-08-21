import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ServiceControlService } from 'src/app/services/service-control.service';
import { Router } from '@angular/router';

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

  constructor(private serviceControlService: ServiceControlService, private router: Router) { }

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
      this.router.navigate(["/nota-fiscal", ret.chave]);
    },(error) =>{
      this.spinnerWait = false;
      this.chavesStr = "Erro: " + error.message;
    });
  }

  public enableScanner() {
    this.scannerEnabled = true; // !this.scannerEnabled; 
  }

}
