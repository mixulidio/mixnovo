import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from '@angular/material/radio'; 

import {MatCheckboxModule} from '@angular/material/checkbox';

import { HighchartsChartModule } from "highcharts-angular";

import { HeaderComponent } from "./components/template/header/header.component";
import { Chart1Component } from "./components/chart/chart1/chart1.component";
import { Chart2Component } from "./components/chart/chart2/chart2.component";
import { HomeComponent } from "./components/template/home/home.component";
import { ChavesCreateComponent } from "./components/chaves-create/chaves-create.component";

import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { List1qtdComponent } from "./components/chart/list1qtd/list1qtd.component";
import { GastosPorMesComponent } from "./components/chart/gastos-por-mes/gastos-por-mes.component";

import { ZXingScannerModule } from "@zxing/ngx-scanner";
import { ChaveImportQrcodeComponent } from "./components/chave-import-qrcode/chave-import-qrcode.component";
import { NotaFiscalComponent } from "./components/nota-fiscal/nota-fiscal.component";
import { ChaveReadQrcodeComponent } from "./components/chave-read-qrcode/chave-read-qrcode.component";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { AuthenticationComponent } from "./components/template/authentication/authentication.component";
import { LoginComponent } from "./components/template/login/login.component";
import { LoginCreateComponent } from "./components/template/login-create/login-create.component";
import { httpInterceptorProviders } from "./interceptors";
import { ListInflacaoComponent } from "./components/chart/list-inflacao/list-inflacao.component";
import { ListNotasComponent } from "./components/chart/list-notas/list-notas.component";
import { ListaComprasIncluirComponent } from "./components/lista-compras-incluir/lista-compras-incluir.component";
import { ListaComprasListarComponent } from './components/lista-compras-listar/lista-compras-listar.component';
import { ListaComprasProdutosBaseComponent } from './components/lista-compras-produtos-base/lista-compras-produtos-base.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Chart1Component,
    Chart2Component,
    HomeComponent,
    ChavesCreateComponent,
    List1qtdComponent,
    GastosPorMesComponent,
    ChaveImportQrcodeComponent,
    NotaFiscalComponent,
    ChaveReadQrcodeComponent,
    AuthenticationComponent,
    LoginComponent,
    LoginCreateComponent,
    ListInflacaoComponent,
    ListNotasComponent,
    ListaComprasIncluirComponent,
    ListaComprasListarComponent,
    ListaComprasProdutosBaseComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    ZXingScannerModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [
    //httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
