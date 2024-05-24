import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  navigation = [
    { route: '/home', text: 'Home' },
    { route: '/works', text: 'Works' },
    { route: '/prcss', text: 'Prcss' },
    { route: '/contact', text: 'Contact' },
    { route: '/info', text: 'Info' },
  ];
}
