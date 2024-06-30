import { Injectable } from '@angular/core';
import { CardInfoSkills } from '../models/card-info-skills';

@Injectable({
  providedIn: 'root',
})
export class CardInfoService {
  constructor() {}

  getInfo(
    title: string,
    description: string,
    iconsFamily: string,
    cardImage: string
  ) {
    const cardInfoSkills = new CardInfoSkills(
      title,
      description,
      iconsFamily,
      cardImage
    );
    return cardInfoSkills;
  }
}
