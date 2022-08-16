import { Item } from '../src/Item';

export class BackstagePass extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn < 10 && this.sellIn > 5) this.quality += 2;
    else if (this.sellIn <= 5) this.quality += 3;
    else if (this.sellIn < 0) this.quality = 0;
    else {
      this.quality += 1;
    }

    this.limitQualityByDays();

    this.sellIn -= 1;

    this.limitQuality();
  }
}
