import { Component, OnInit } from '@angular/core';
import { Country } from '../../country.interfaces/country.interface';
import { CountriesService } from '../../services/countries.services';

@Component({
  selector: 'by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: ``
})
export class ByCapitalPagesComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean=false;
  public initialValue: string='';

  constructor(private countriesService:CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue= this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string):void{
    this.isLoading = true;
    this.countriesService.searchCountry(term)
    .subscribe(countries=>{
       this.countries=countries;
       this.isLoading=false;
    });
 }
}
