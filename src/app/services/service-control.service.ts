import { NotaFiscal } from './../components/models/notaFiscal.model';
import { Chaves } from './../components/models/chaves.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemNota } from '../components/models/ItemPrecoRe.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceControlService {

  baseUrl = "/api/mixnfx-backend";

  constructor(private http: HttpClient) { }

  log(msg: string){
    console.log(msg);
  }

  read(): Observable<ItemNota[]>{
    return this.http.get<ItemNota[]>(this.baseUrl + "/itemnota/listItemPerMonth");
  }

  consultaNotaFiscal(chave: string): Observable<NotaFiscal>{
    if(chave.length > 44)
      chave = chave.substr(49,44);
    return this.http.get<NotaFiscal>(this.baseUrl + "/notafiscal/consultaNotaFiscal/" + chave);
  }

  readChart1(): Observable<string>{
    return this.http.get<string>(this.baseUrl + "/itemnota/listItemChart1");
  }

  createProcess(chaves: Chaves): Observable<Chaves> {
    return this.http.post<Chaves>(this.baseUrl + "/notafiscal/processalote", chaves);
  }

  processaNotaQrcode(url: string): Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>(this.baseUrl + "/notafiscal/processaNotaQrcode", url);
  }

  gastosPorMes(qtdMeses: number): Observable<NotaFiscal[]>{
    return this.http.get<NotaFiscal[]>(this.baseUrl + "/notafiscal/gastosPorMes/" + qtdMeses);
  }

  listQtdItem(): Observable<ItemNota[]>{
    return this.http.get<ItemNota[]>(this.baseUrl + "/itemnota/listQtdItem");
  }


}
