import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardComponent } from '../../shared/components/card/card.component';
import { IProduct, State } from '../../shared/models/product';
import {
  counterDecrement,
  counterIncrement,
  fetchProducts,
  pageSizeChange,
} from '../../shared/store/actions/products.actions';
import { HomeService } from './home.service';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardProduct: IProduct[] = [];
  isLoading: boolean = false;
  pageSize: number = 10;
  dataLength:number=20;

  constructor(
    @Inject(HomeService) private homeService: HomeService,
    private store: Store<State>
  ) {
    this.store.subscribe((data: any) => {

      this.isLoading = data.products.isLoading;
      this.dataLength=data.products.products.length
    });

    this.getCardData();

  }

  getCardData() {

    this.store.dispatch(fetchProducts({pageSize:this.pageSize}));
    this.store.subscribe((data: any) => {
      this.cardProduct = data.products.filteredProducts;
    });
  }
  addToCart() {
    this.store.dispatch(counterIncrement());
  }
  removeFromCart() {
    this.store.dispatch(counterDecrement());
  }
  onPageSizeChange($event: any) {

    
    this.store.dispatch(fetchProducts({pageSize:$event.pageSize}));
  }
}
