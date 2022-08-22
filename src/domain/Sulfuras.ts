import { Item } from '../interfaces/Item';

export class Sulfuras implements Item {
  private name: string;
  private sellIn: number;
  private quality: number;

  constructor(_name: string, _sellIn: number) {
    this.name = _name;
    this.sellIn = _sellIn;
    this.quality = 80;
  }

  getName(): string {
    return this.name
  }
  getSellIn(): number {
    return this.sellIn
  }
  getQuality(): number {
    return this.quality
  }

  updateQuality() {
    this.sellIn = this.sellIn;
    this.quality = this.quality;
  }
}
