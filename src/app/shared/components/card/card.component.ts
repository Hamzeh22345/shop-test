import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  onAddClick() {
    this.add.emit();
  }
  onRemoveClick() {
    this.remove.emit();
  }
}
