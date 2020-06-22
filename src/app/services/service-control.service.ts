import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemPrecoDt } from '../components/models/ItemPrecoDt.model';
import { Line } from './../components/models/line.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceControlService {

  baseUrl = "/api/mixnfx-backend/itemnota/";

  constructor(private http: HttpClient) { }

  log(msg: string){
    console.log(msg);
  }

  read(): Observable<ItemPrecoDt[]>{
    return this.http.get<ItemPrecoDt[]>(this.baseUrl + "listItemPerMonth");
  }

  readChart1(): Observable<string>{
    return this.http.get<string>(this.baseUrl + "listItemChart1");
  }
}
