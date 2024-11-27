import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../country.interfaces/country.interface';


@Component({
  selector: 'by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles: ``
})
export class ByCountryPagesComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean=false;
  public initialValue: string='';

  constructor(private countriesServices:CountriesService){}
  ngOnInit(): void {
   this.countries = this.countriesServices.cacheStore.byCountries.countries;
   this.initialValue = this.countriesServices.cacheStore.byCountries.term
  }

  searchByCountry(term: string):void{
    this.isLoading = true;
    this.countriesServices.searchCountry(term)
    .subscribe(countries=>{
       this.countries=countries;
       this.isLoading=false;
    });
 }

}
