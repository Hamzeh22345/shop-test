import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import { State } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { searchProducts, searchProductsRequest } from '../../store/actions/products.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  counter: number = 0;
  value: string = '';
  constructor(private store: Store<State>) {
    this.store.subscribe((data: any) => {
      if (data.products.counter < 0) {
        this.counter = 0;
        data.products.counter = 0;
      } else {
        this.counter = data.products.counter;
      }
    });
  }

  onSearch($event: any) {
    const searchValue = $event.target.value;

    this.store.dispatch(searchProductsRequest());
    setTimeout(() => {
      this.store.dispatch(searchProducts({search: searchValue}));
      
    }, 500); // Adjust timing based on animation duration
  }
}
