import { Item } from '../interfaces/Item';

export class AgedBrie implements Item {
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

  updateQuality() {
    if (this.sellIn < 0) this.quality += 2;
    else this.quality += 1;

    this.sellIn -= 1;

    if (this.quality > 50) this.quality = 50;
  }
}
