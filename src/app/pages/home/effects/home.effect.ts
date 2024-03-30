import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HomeService } from '../home.service';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/models/product';
@Injectable()
export class HomeEffects {
pageSize: number = 10;
startIndex:number=0;
endIndex:number=10;

  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Products] fetchProducts'),
      exhaustMap(() =>
        this.homeService.getAllProducts(this.pageSize).pipe(
          map((products) => ({
            type: '[Products] fetchProductsSuccess',
            products: products,
            pageSize: this.pageSize,
            startIndex:this.startIndex,
            endIndex:this.endIndex,
          })),
          catchError(() => EMPTY)
        )
      ),
     
    )
  );

  constructor(private actions$: Actions, private homeService: HomeService, private store:Store<State>) {

    this.store.subscribe((data: any)=> {
      this.pageSize = data.products.pageSize;
      this.startIndex=data.products.startIndex;
      this.endIndex=data.products.endIndex;
      console.log(this.startIndex);
      console.log(data.products.pageSize);
      console.log(data.products.startIndex);
      
    })
  }
}
