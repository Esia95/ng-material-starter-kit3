import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CartComponent } from './cart.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [CartComponent],
  providers: [],
  exports: [CartComponent]
})
export class CartComponentModule {
}
