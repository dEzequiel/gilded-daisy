import {Factory} from "../../src/Factory";
import {GildedDaisy} from "../../src/domain/GildedDaisy";

describe('backstage pass test', () => {
  const shop: Factory = new GildedDaisy()
  test('should increase quality of backstage passes by 1 when more than 10 days remaining', () => {
    const item = shop.createBackstagePassItem('Backstage pass', 11, 1);
    item.updateQuality();
    expect(item.getQuality()).toBe(2);
    expect(item.getSellIn()).toBe(10);
  });

  test('should increase quality of backstage passes by 2 when more than 5 days remaining', () => {
    const item = shop.createBackstagePassItem('Backstage pass', 3, 1);
    item.updateQuality();
    expect(item.getQuality()).toBe(4);
    expect(item.getSellIn()).toBe(2);
  });

  test('should set quality of backstage passes to 0 after concert', () => {
    const item = shop.createBackstagePassItem('Backstage pass', 0, 10)
    item.updateQuality();

    expect(item.getQuality()).toBe(0);
    expect(item.getSellIn()).toBe(-1);
  });
});
