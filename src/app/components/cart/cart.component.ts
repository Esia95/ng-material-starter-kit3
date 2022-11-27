import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {Observable, switchMap} from "rxjs";
import {CartModel} from "../../models/cart.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  constructor(private _cartService: CartService, private _activatedRoute:ActivatedRoute) {
  }
  readonly cart$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cartService.getOne(data['id']))
  )
}
