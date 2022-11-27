import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {CatFactService} from "../../services/cat-facts.service";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  constructor(private _catFactService: CatFactService) {
  }
  readonly data$: Observable<any> = this._catFactService.getAll();
}
