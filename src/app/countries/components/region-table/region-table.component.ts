import { Component,Input } from '@angular/core';
import { Country } from '../../country.interfaces/country.interface';

@Component({
  selector: 'region-table',
  templateUrl: './region-table.component.html',
  styles: `img{
    width: 35px;
  }`
})
export class RegionTableComponent {

@Input()
public countries: Country[]=[];

}
