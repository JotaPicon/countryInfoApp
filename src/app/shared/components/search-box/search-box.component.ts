import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{

  private debouncer: Subject<string> =new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string> ();

  @Output()
  public onDebouce = new EventEmitter<string> ();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
       debounceTime(1000)
    )
    .subscribe(value=>{
      this.onDebouce.emit(value);
    })

  }

  ngOnDestroy():void{
    this.debouncer.unsubscribe();
  }

  emiteValue(value: string): void{
    this.onValue.emit(value);
  }

  onKeyPress(serachTerm:string){
    this.debouncer.next(serachTerm);
  }
}
