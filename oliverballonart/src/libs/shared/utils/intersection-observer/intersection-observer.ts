import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-intersect-loading-component',
  standalone: true,
  imports: [NgIf],
  template: `<div #container>
    @if (intersecting || nativeLoading){
    <ng-content *ngIf="intersecting"></ng-content>
    }
  </div>`,
})
export class ImageIntersectLoadingComponent implements OnInit {
  once = false;
  top = 0;
  bottom = 0;
  left = 0;
  right = 0;

  nativeLoading = false;

  intersecting = false;
  @ViewChild('container') container: any;

  ngOnInit() {
    if ('loading' in HTMLImageElement.prototype) {
      this.nativeLoading = true;
    }
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${this.bottom}px ${this.left}px ${top}px ${this.right}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          this.intersecting = entries[0].isIntersecting;
          if (this.intersecting && this.once) {
            observer.unobserve(this.container);
          }
        },
        {
          rootMargin,
        }
      );

      observer.observe(this.container);
      return () => observer.unobserve(this.container);
    }

    // The following is a fallback for older browsers
    this.handler();
    window.addEventListener('scroll', this.handler);
    return () => window.removeEventListener('scroll', this.handler);
  }

  handler() {
    const bcr = this.container.getBoundingClientRect();

    this.intersecting =
      bcr.bottom + this.bottom > 0 &&
      bcr.right + this.right > 0 &&
      bcr.top - this.top < window.innerHeight &&
      bcr.left - this.left < window.innerWidth;

    if (this.intersecting && this.once) {
      window.removeEventListener('scroll', this.handler);
    }
  }
}
