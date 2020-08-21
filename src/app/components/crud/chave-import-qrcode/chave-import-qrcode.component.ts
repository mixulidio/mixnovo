import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ServiceControlService } from 'src/app/services/service-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'chave-import-qrcode',
  templateUrl: './chave-import-qrcode.component.html',
  styleUrls: ['./chave-import-qrcode.component.css']
})
export class ChaveImportQrcodeComponent implements OnInit {

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
    this.serviceControlService.processaNotaQrcode($event).subscribe(ret => {
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
 
/*
aprimorar

https://zxing-js.github.io/library/

https://www.npmjs.com/package/@zxing/ngx-scanner

https://github.com/zxing-js/ngx-scanner
https://github.com/zxing-js/ngx-scanner/wiki/Advanced-Usage

*/
