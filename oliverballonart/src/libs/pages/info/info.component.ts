import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { InfoService } from './info-service.service';
import { InfoStore } from 'src/libs/shared/+data/stores/info.store';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  providers: [InfoService, InfoStore],
})
export class InfoComponent implements OnInit {
  infoService = inject(InfoService);
  store = inject(InfoStore);
  exhibitions = [];

  ngOnInit(): void {
    this.infoService.getInfo();
  }
}
