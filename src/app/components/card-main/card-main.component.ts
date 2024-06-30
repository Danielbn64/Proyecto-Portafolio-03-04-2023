import { Component, Input, OnInit } from '@angular/core';
import { CardInfoSkills } from '../../models/card-info-skills';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss'],
})
export class CardMainComponent implements OnInit {
  @Input() cardInfo!: CardInfoSkills;
  public iconsFamily!: string;
  public cardImage!: string;

  ngOnInit(): void {
    this.iconsFamily = this.cardInfo.getIconsFamily();
    this.cardImage = this.cardInfo.getCardImage();
  }
}
