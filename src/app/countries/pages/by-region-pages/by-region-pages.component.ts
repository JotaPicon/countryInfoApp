import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../country.interfaces/country.interface';
import { Region } from '../../country.interfaces/region.type';



@Component({
  selector: 'by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles: ``
})
export class ByRegionPagesComponent {

  public countries: Country[] = [];
  public regions:  Region[] =['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public isLoading: boolean=false;
  public selectedRegion?: Region;

  constructor(private countriesServices:CountriesService){}

  searchByRegion(term: Region):void{
    this.isLoading=true;
    this.selectedRegion= term;
    this.countriesServices.searchRegion(term)
    .subscribe(countries=>{
      this.countries=countries;
      this.isLoading=false;
    });

 }


}
