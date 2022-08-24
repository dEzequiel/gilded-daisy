export class NormalItem {
  private name: string;
  private sellIn: number;
  private quality: number;

  constructor(_name: string, _sellIn: number, _quality: number) {
    this.name = _name;
    this.sellIn = _sellIn;
    this.quality = _quality;
  }

  getName(): string {
    return this.name;
  }
  getSellIn(): number {
    return this.sellIn;
  }
  getQuality(): number {
    return this.quality;
  }

  public updateQuality(): void {
    if (this.sellIn < 0) {
      this.quality -= 2;
    }

    this.sellIn -= 1;
    this.quality -= 1;
    if (this.quality > 50) this.quality = 50;
  }

  public toString(): string {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
