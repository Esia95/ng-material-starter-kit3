import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import {CatFactsServiceModule} from "./services/cat-facts.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cat-fact', component: CatFactsComponent }
  ]), ProductDetailsComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
