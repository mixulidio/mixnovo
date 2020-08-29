import { ChaveReadQrcodeComponent } from './components/crud/chave-read-qrcode/chave-read-qrcode.component';
import { NotaFiscalComponent } from './components/crud/nota-fiscal/nota-fiscal.component';
import { ChaveImportQrcodeComponent } from './components/crud/chave-import-qrcode/chave-import-qrcode.component';
import { GastosPorMesComponent } from './components/chart/gastos-por-mes/gastos-por-mes.component';
import { List1qtdComponent } from './components/chart/list1qtd/list1qtd.component';
import { ChavesCreateComponent } from './components/crud/chaves-create/chaves-create.component';
import { HomeComponent } from './components/template/home/home.component';
import { Chart2Component } from './components/chart/chart2/chart2.component';
import { Chart1Component } from './components/chart/chart1/chart1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  {
    path: '', component: HomeComponent,
    children:[
      {path: 'chart1', component: Chart1Component},
      {path: 'chart2', component: Chart2Component},
      {path: 'chaves-create', component: ChavesCreateComponent},
      {path: 'list1qtd', component: List1qtdComponent},
      {path: 'gastos-por-mes', component: GastosPorMesComponent},
      {path: 'chave-import-qrcode', component: ChaveImportQrcodeComponent},
      {path: 'chave-read-qrcode', component: ChaveReadQrcodeComponent},
      {path: 'nota-fiscal/:chave', component: NotaFiscalComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
