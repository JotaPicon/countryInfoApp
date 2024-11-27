import { Component, Input } from '@angular/core';
import { Country } from '../../country.interfaces/country.interface';

@Component({
  selector: 'contries-table',
  templateUrl: './country-table.component.html',
  styles: `img{
    width: 35px;
  }`
})
export class CountryTableComponent {

@Input()
public countries: Country[]=[];

}
