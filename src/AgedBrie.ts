import { Item } from '../src/Item';

export class AgedBrie extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn < 0) this.quality += 2;
    else this.quality += 1;

    this.sellIn -= 1;

    this.limitQuality();
  }
}
