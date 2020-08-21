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
  chavesParaConsulta: NotaFiscal[];
  
  constructor(private serviceControlService: ServiceControlService, private router: Router) { }

  ngOnInit(): void {
  }

  createProcess(){
    this.spinnerWait = true;
    this.chaves.chave =  this.chavesStr.split("\n");
    this.serviceControlService.createProcess(this.chaves).subscribe(ret => {
      this.spinnerWait = false;
      if( ret != null){
        var erros:string;
        ret.chave.forEach(element => {
          erros = erros + "\n" + element;
        });
        if(erros != null ){
          this.chavesStr = "Chaves com erros ou já importadas:" + erros;
        }
      }

      this.chaves.chave.forEach(function (value) {
        this.chavesParaConsulta = value;
        console.log(value);
      });


/*
      this.chavesParaConsulta = this.chaves.chave.map(function (p) {
        var m :NotaFiscal;
        m.chave = p;
        return m;
      })
*/
      console.log(this.chavesParaConsulta);
    })
  }

}
