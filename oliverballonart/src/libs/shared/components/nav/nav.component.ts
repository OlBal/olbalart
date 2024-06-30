import { Component, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  navL = [
    { route: 'works', text: 'Works' },
    { route: 'prcss', text: 'Prcss' },
  ];
  navR = [
    { route: 'contact', text: 'Contact' },
    { route: 'info', text: 'Info' },
  ];

  displayMobileNav = false;

  isMobile = signal(false);

  handleNav() {
    this.displayMobileNav = !this.displayMobileNav;
  }
}
