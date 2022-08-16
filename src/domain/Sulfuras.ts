import { Item } from './Item';

export class Sulfuras extends Item {
  constructor(name: string, sellIn: number) {
    super(name, sellIn, 80);
  }

  updateQuality() {
    this.sellIn = this.sellIn;
    this.quality = this.quality;
  }
}
