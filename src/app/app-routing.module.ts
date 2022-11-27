import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cat-fact', component: CatFactsComponent },
    { path: 'age/:name', component: AgePredictionComponent },
    { path: 'cart/:id', component: CartComponent }
  ]), ProductDetailsComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactsServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, CartComponentModule, CartServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
