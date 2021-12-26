import { ListInflacaoComponent } from "./components/chart/list-inflacao/list-inflacao.component";
import { AuthGuard } from "./services/auth.guard";
import { LoginCreateComponent } from "./components/template/login-create/login-create.component";
import { LoginComponent } from "./components/template/login/login.component";
import { AuthenticationComponent } from "./components/template/authentication/authentication.component";
import { ChaveReadQrcodeComponent } from "./components/chave-read-qrcode/chave-read-qrcode.component";
import { NotaFiscalComponent } from "./components/nota-fiscal/nota-fiscal.component";
import { ChaveImportQrcodeComponent } from "./components/chave-import-qrcode/chave-import-qrcode.component";
import { GastosPorMesComponent } from "./components/chart/gastos-por-mes/gastos-por-mes.component";
import { List1qtdComponent } from "./components/chart/list1qtd/list1qtd.component";
import { ChavesCreateComponent } from "./components/chaves-create/chaves-create.component";
import { HomeComponent } from "./components/template/home/home.component";
import { Chart2Component } from "./components/chart/chart2/chart2.component";
import { Chart1Component } from "./components/chart/chart1/chart1.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListNotasComponent } from "./components/chart/list-notas/list-notas.component";
import { ListaComprasIncluirComponent } from "./components/lista-compras-incluir/lista-compras-incluir.component";

const routes: Routes = [
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "chart1", component: Chart1Component },
      { path: "chart2", component: Chart2Component },
      { path: "chaves-create", component: ChavesCreateComponent },
      { path: "list1qtd", component: List1qtdComponent },
      { path: "gastos-por-mes", component: GastosPorMesComponent },
      { path: "chave-import-qrcode", component: ChaveImportQrcodeComponent },
      { path: "chave-read-qrcode", component: ChaveReadQrcodeComponent },
      { path: "nota-fiscal/:chave", component: NotaFiscalComponent },
      { path: "list-inflacao", component: ListInflacaoComponent },
      { path: "list-notas", component: ListNotasComponent },
      { path: "item-lista-incluir", component: ListaComprasIncluirComponent },
    ],
    // canActivate: [AuthGuard]
  },
  // ,{
  //   path: '', component: AuthenticationComponent,
  //   children: [
  //     {path: '', redirectTo: 'login', pathMatch: 'full'},
  //     {path: 'login', component: LoginComponent},
  //     {path: 'login-create', component: LoginCreateComponent},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
