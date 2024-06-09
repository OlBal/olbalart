import { Injectable, signal } from '@angular/core';

import { Info } from '../models/info-response';

@Injectable()
export class InfoStore {
  exhibitions = signal<Info | null>(null);
  education = signal<Info | null>(null);
  contact = signal<Info | null>(null);

  setContact(information: Info) {
    this.contact.set(information);
  }

  setExhibitions(information: Info) {
    this.exhibitions.set(information);
  }

  setEducation(information: Info) {
    this.education.set(information);
  }
}
