import { ItemNota } from './../../models/ItemPrecoRe.model';
import { ServiceControlService } from './../../../services/service-control.service';
import { NotaFiscal } from './../../models/notaFiscal.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nota-fiscal',
  templateUrl: './nota-fiscal.component.html',
  styleUrls: ['./nota-fiscal.component.css']
})
export class NotaFiscalComponent implements OnInit {

  notaFiscal: NotaFiscal;
  spinnerWait = false;

  constructor(private serviceControlService: ServiceControlService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinnerWait = true;
    const chave = this.route.snapshot.params['chave'];
    this.serviceControlService.consultaNotaFiscal(chave).subscribe(ret => {
      this.notaFiscal = ret;
      this.spinnerWait = false;
    });
  }
}
