import { NotaFiscal } from "./../components/models/notaFiscal.model";
import { Chaves } from "./../components/models/chaves.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ItemNota } from "../components/models/ItemPrecoRe.model";
import { environment } from "src/environments/environment";
import { ItemListaComrpas } from "../components/models/itemListaCompras.model";

@Injectable({
  providedIn: "root",
})
export class ServiceControlService {
  baseUrl = "/api/mixnfx-backend";

  constructor(private http: HttpClient) {
    //if (environment.production) {
    this.baseUrl = `${environment.api}`;
    //}
  }

  read(): Observable<ItemNota[]> {
    return this.http.get<ItemNota[]>(
      this.baseUrl + "/itemnota/listItemPerMonth"
    );
  }

  normalizaChave(chave: string): string {
    chave = chave.trim();
    if (chave.length == 98) {
      chave = chave.substr(54, 44); // nfg  https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx?chaveNFe=44
    } else if (chave.length >= 93) {
      chave = chave.substr(49, 44); // qr code https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=44|2|1|1|A9C0207CCF5021B5E6C1910BEBAEFB62620CD123
    } else if (chave.length > 44) {
      chave = chave.substr(0, 44);
    }
    return chave;
  }

  consultaNotaFiscal(chave: string): Observable<NotaFiscal> {
    return this.http.get<NotaFiscal>(
      this.baseUrl +
        "/notafiscal/consultaNotaFiscal/" +
        this.normalizaChave(chave)
    );
  }

  readChart1(): Observable<string> {
    return this.http.get<string>(this.baseUrl + "/itemnota/listItemChart1");
  }

  createProcess(chaves: Chaves): Observable<Chaves> {
    var chavesNorma: Chaves = { chave: [] };
    var self = this;
    chaves.chave.forEach(function (value) {
      if (value != "") chavesNorma.chave.push(self.normalizaChave(value));
    });
    return this.http.post<Chaves>(
      this.baseUrl + "/notafiscal/processalote",
      chavesNorma
    );
  }

  processaNotaQrcode(url: string): Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>(
      this.baseUrl + "/notafiscal/processaNotaQrcode",
      url
    );
  }

  gastosPorMes(qtdMeses: number): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(
      this.baseUrl + "/notafiscal/gastosPorMes/" + qtdMeses
    );
  }

  listQtdItem(): Observable<ItemNota[]> {
    return this.http.get<ItemNota[]>(this.baseUrl + "/itemnota/listQtdItem");
  }

  listaNotasMes(ano: number, mes: number): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(
      this.baseUrl + "/notafiscal/listaNotaFiscal/" + ano + "/" + mes
    );
  }

  incluirItemListaCompras(
    item: ItemListaComrpas
  ): Observable<ItemListaComrpas> {
    return this.http.post<ItemListaComrpas>(
      `${this.baseUrl}/listacompras/create`,
      item
    );
  }

  incluiItemLista(item : ItemNota): Observable<ItemListaComrpas>{
    return this.http.post<ItemListaComrpas>(
      `${this.baseUrl}/listacompras/inclui`, item.codigo
    )
  }

  listaCompras(): Observable<ItemListaComrpas[]>{
    return this.http.get<ItemListaComrpas[]>(
      this.baseUrl + "/listacompras/list"
    );
  }

  atualizaItemListaCompras(item : ItemListaComrpas) : Observable<ItemListaComrpas>  {
    return this.http.put(this.baseUrl  + "/listacompras",item);
  }

  deleteItem(item : ItemListaComrpas) : Observable<any>  {
      return this.http.delete(this.baseUrl  + "/listacompras/delete/" + item.id);
  }

  listaParaListaCompras(): Observable<ItemNota[]> {
    return this.http.get<ItemNota[]>(this.baseUrl + "/itemnota/listaParaListaCompras");
  }
}
