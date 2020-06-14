import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemPrecoDt } from '../components/models/ItemPrecoDt.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceControlService {

  baseUrl = "/api/mixnfx-backend/itemnota/listItemPerMonth";

  constructor(private http: HttpClient) { }

  log(msg: string){
    console.log(msg);
  }

  read(): Observable<ItemPrecoDt[]>{
    return this.http.get<ItemPrecoDt[]>(this.baseUrl)
  }
}
