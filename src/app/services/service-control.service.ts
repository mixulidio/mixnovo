import { Chaves } from './../components/models/chaves.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemPrecoDt } from '../components/models/ItemPrecoRe.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceControlService {

  baseUrl = "/api/mixnfx-backend";

  constructor(private http: HttpClient) { }

  log(msg: string){
    console.log(msg);
  }

  read(): Observable<ItemPrecoDt[]>{
    return this.http.get<ItemPrecoDt[]>(this.baseUrl + "/itemnota/listItemPerMonth");
  }

  readChart1(): Observable<string>{
    return this.http.get<string>(this.baseUrl + "/itemnota/listItemChart1");
  }

  createProcess(chaves: Chaves): Observable<Chaves> {
    return this.http.post<Chaves>(this.baseUrl + "/notafiscal/processalote", chaves)
  }
}
