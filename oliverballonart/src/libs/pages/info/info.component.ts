import { NgFor } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  exhibitions: string[] = [];
}
