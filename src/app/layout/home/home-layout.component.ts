/* eslint-disable @typescript-eslint/consistent-type-imports */
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
})
export class HomeLayoutComponent {
  constructor() {}
}
