import { Component,Input } from '@angular/core';
import { Country } from '../../country.interfaces/country.interface';

@Component({
  selector: 'capital-table',
  templateUrl: './capital-table.component.html',
  styles: `img{
    width: 35px;
    }`
})
export class CapitalTableComponent {
  
@Input()
public countries: Country[]=[];
}
