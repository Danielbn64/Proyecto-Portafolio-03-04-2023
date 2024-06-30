export abstract class CardInfo {
  private title: string;
  private description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(value: string): void {
    this.title = value;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(value: string): void {
    this.description = value;
  }
}
