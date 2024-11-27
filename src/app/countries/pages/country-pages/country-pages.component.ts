import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.services';
import { switchMap } from 'rxjs';
import { Country } from '../../country.interfaces/country.interface';

@Component({
  selector: 'country-pages',
  templateUrl: './country-pages.component.html',
  styles: ``
})
export class CountryPagesComponent implements OnInit{

  public country?: Country;

constructor(private activateRoute: ActivatedRoute,
            private router: Router,
            private countriesService: CountriesService,

){}
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(

        switchMap(({id })=> this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country=>{

        if (!country)return this.router.navigateByUrl('')
        return this.country=country ;
      });

    }
  }

