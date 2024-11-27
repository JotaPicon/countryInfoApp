import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './shared/pages/contac-pages/contac-pages.component';

const routes: Routes=[
  {
  path: 'home',
  component: HomePageComponent
  },
  {
  path: 'about',
  component: AboutPagesComponent
  },
  {
  path: 'contact',
  component: ContactPagesComponent
  },
  {
  path: 'countries',
  loadChildren:()=>import('./countries/countries.module').then( m=>m.CountriesModule)
  },
  {
    path: '**',
    redirectTo:'countries/by-country'
  }
];

@NgModule({
imports:[
  RouterModule.forRoot( routes),
],
exports:[
  RouterModule
]

})
export class AppRoutingModule { }
