import { NotaFiscal } from './../../models/notaFiscal.model';
import { Chaves } from './../../models/chaves.model';
import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chaves-create',
  templateUrl: './chaves-create.component.html',
  styleUrls: ['./chaves-create.component.css']
})
export class ChavesCreateComponent implements OnInit {

  chavesStr: string;
  chaves : Chaves = {chave: null}; // TODO new ?
  spinnerWait = false;
  chavesParaConsulta: string[];
  
  constructor(private serviceControlService: ServiceControlService, private router: Router) { }

  ngOnInit(): void {
  }

  createProcess(){
    this.spinnerWait = true;
    this.chaves.chave =  this.chavesStr.replace(" ","").split("\n");
    this.chavesStr = "";
    this.chavesParaConsulta = [];
    var self = this;
    this.serviceControlService.createProcess(this.chaves).subscribe(ret => {
      this.spinnerWait = false;
      if( ret != null){
        var erros:string = "";
        ret.chave.forEach(element => {
          erros = erros + "\n" + element;
        });
        if(erros != null && erros != ""){
          this.chavesStr = "Chaves com erros ou já importadas:" + erros;
        }
      }

      self.chaves.chave.forEach(function (value) {
        if(value != "")
          self.chavesParaConsulta.push(value.trim());
      });
    })
  }

}
