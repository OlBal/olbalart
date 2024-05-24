import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<footer></footer>`,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
