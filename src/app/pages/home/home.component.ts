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
      console.log(data);

      this.isLoading = data.products.isLoading;
      this.dataLength=data.products.products.length
      console.log(this.isLoading);
    });

    this.getCardData();

  }

  getAllData(pageIndex: number, pageSize: number) {
    
    this.homeService.getAll().subscribe((data:any)=> {
    })
  }

  getCardData() {

    this.store.dispatch(fetchProducts({pageSize:1000,startIndex:0,endIndex:10}));
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
    console.log($event);
    const startingIndex = $event.pageIndex * $event.pageSize;
    const endingIndex = startingIndex + $event.pageSize;
    console.log(startingIndex);
    console.log(endingIndex);
    
    this.store.dispatch(fetchProducts({pageSize:$event.pageSize,startIndex:startingIndex,endIndex:endingIndex}));
  }
}
