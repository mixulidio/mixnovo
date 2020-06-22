import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/templete/nav/nav.component';
import { MatButtonModule  } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'

import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './components/template/header/header.component';
import { Chart1Component } from './components/chart/chart1/chart1.component';
import { Chart2Component } from './components/chart/chart2/chart2.component';
import { HomeComponent } from './components/templete/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    Chart1Component,
    Chart2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
