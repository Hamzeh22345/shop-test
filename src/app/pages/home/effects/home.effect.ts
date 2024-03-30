import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HomeService } from '../home.service';
@Injectable()
export class HomeEffects {
  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Products] fetchProducts'),
      exhaustMap(() =>
        this.homeService.getAllProducts().pipe(
          map((products) => ({
            type: '[Products] fetchProductsSuccess',
            products: products
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private homeService: HomeService) {}
}
