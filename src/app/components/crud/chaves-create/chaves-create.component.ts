import { Chaves } from './../../models/chaves.model';
import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nfx-chaves-create',
  templateUrl: './chaves-create.component.html',
  styleUrls: ['./chaves-create.component.css']
})
export class ChavesCreateComponent implements OnInit {

  chavesStr: string;
  chaves : Chaves = {chave: null}; // TODO new ?
  spinnerWait = false;
  
  constructor(private serviceControlService: ServiceControlService, private router: Router) { }

  ngOnInit(): void {
  }

  createProcess(){
    this.spinnerWait = true;
    this.chaves.chave =  this.chavesStr.split("\n");
    this.serviceControlService.createProcess(this.chaves).subscribe(ret => {
      this.spinnerWait = false;
      if( ret != null){
        this.chavesStr = "Erros:";
        ret.chave.forEach(element => {
          this.chavesStr = this.chavesStr + "\n" + element;
        });
        console.log(ret);
      } else {
        this.chavesStr = null;
      }
    })
  }

}
