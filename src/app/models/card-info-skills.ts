import { CardInfo } from "./card-info";

export class CardInfoSkills extends CardInfo {
  private iconsFamily: string;
  private cardImage: string;

  constructor(
    title: string,
    description: string,
    iconsFamily: string,
    cardImage: string
  ) {
    super(title, description);
    this.iconsFamily = iconsFamily;
    this.cardImage = cardImage;
  }

  public getIconsFamily(): string {
    return this.iconsFamily;
  }

  public setIconsFamily(value: string): void {
    this.iconsFamily = value;
  }

  public getCardImage(): string {
    return this.cardImage;
  }

  public setCardImage(value: string): void {
    this.cardImage = value;
  }
}
