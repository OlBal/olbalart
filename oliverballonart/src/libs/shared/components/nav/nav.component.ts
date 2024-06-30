import { Component, OnInit, inject, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreakpointObserverService } from '../../utils/breakpoint-observer.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, RouterLink],
  providers: [BreakpointObserverService],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  navL = [
    { route: 'works', text: 'Works' },
    { route: 'prcss', text: 'Prcss' },
  ];
  navR = [
    { route: 'contact', text: 'Contact' },
    { route: 'info', text: 'Info' },
  ];

  breakpointObserver = inject(BreakpointObserverService);

  displayMobileNav = false;

  isMobile = signal(false);

  ngOnInit(): void {
    this.isMobile.set(this.breakpointObserver.onWindowResize());
  }

  handleNav() {
    this.displayMobileNav = !this.displayMobileNav;
  }
}
