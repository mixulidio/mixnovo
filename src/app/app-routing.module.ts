import { HomeComponent } from './components/templete/home/home.component';
import { Chart2Component } from './components/chart/chart2/chart2.component';
import { Chart1Component } from './components/chart/chart1/chart1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'chart1', component: Chart1Component},
  {path: 'chart2', component: Chart2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
