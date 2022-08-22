import { Conjured } from '../../src/domain/Conjured';
import {Factory} from "../../src/Factory";
import {GildedDaisy} from "../../src/domain/GildedDaisy";

describe('conjured item test', () => {
  const shop: Factory = new GildedDaisy()
  test('should update quality for conjured sellin 1 day', () => {
    const item = shop.createConjuredItem('Conjured', 1, 2);
    item.updateQuality();
    expect(item.getQuality()).toBe(0);
    expect(item.getSellIn()).toBe(0);
  });

  test('should update conjured quality 4x as fast for sellin 0 days', () => {
    const item = shop.createConjuredItem('Conjured', 0, 4)
    item.updateQuality();
    expect(item.getQuality()).toBe(0);
    expect(item.getSellIn()).toBe(-1);
  });

  test('conjured item quality should never go below 0', () => {
    const item = shop.createConjuredItem('Conjured', 0, 1)
    item.updateQuality();
    expect(item.getQuality()).toBe(0);
    expect(item.getSellIn()).toBe(-1);
  });

  test('should lower quality by 3 if exactly 5 days left', () => {
    const item = shop.createConjuredItem('Conjured', 5, 6)
    item.updateQuality();
    expect(item.getQuality()).toBe(3);
    expect(item.getSellIn()).toBe(4);
  });
});
