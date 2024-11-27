import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountriesRoutModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CapitalTableComponent } from './components/capital-table/capital-table.component';
import { RegionTableComponent } from './components/region-table/region-table.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';
import { LoadingSpinnerComponent } from "../shared/components/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
    CountryPagesComponent,
    CountryTableComponent,
    CapitalTableComponent,
    RegionTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutModule,
    SharedModule,
    RouterModule,
    LoadingSpinnerComponent
]
})
export class CountriesModule { }

