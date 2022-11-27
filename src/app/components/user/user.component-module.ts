import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent]
})
export class UserComponentModule {
}
