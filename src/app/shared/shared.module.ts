import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingSpinnerComponent,
    


  ],
  exports:[
    AboutPagesComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent

  ]
})
export class SharedModule { }
