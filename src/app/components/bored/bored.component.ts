import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CatFactService} from "../../services/cat-facts.service";
import {Observable} from "rxjs";
import {BoredService} from "../../services/bored.service";

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredComponent {
  constructor(private _boredService: BoredService) {
  }
  readonly data$: Observable<any> = this._boredService.getAll();
}

