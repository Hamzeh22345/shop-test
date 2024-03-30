import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HomeEffects } from './pages/home/effects/home.effect';
import { productsReducer } from './shared/store/reducers/products.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(), provideStore({ products: productsReducer }), provideEffects(HomeEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
