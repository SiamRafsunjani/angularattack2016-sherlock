import {Component} from '@angular/core';


@Component({
  selector:'language-use',
  template:`<h1 *ngIf="data">
                {{data}}
            </h1>`

})
export class LanguageUseComponent{
    data:string;
}
