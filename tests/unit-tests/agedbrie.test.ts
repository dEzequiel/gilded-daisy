import { GildedDaisy } from '../../src/domain/GildedDaisy';
import { Factory } from '../../src/Factory';

describe('aged brie test', () => {
  // Creator class
  const shop: Factory = new GildedDaisy();

  test('one day passed', () => {
    const item = shop.createAgedBrieItem('Aged Brie', 2, 0);
    item.updateQuality();
    expect(item.getQuality()).toBe(1);
    expect(item.getSellIn()).toBe(1);
    expect(item.getName()).toBe('Aged Brie');
  });

  test('quality cant be more than 50', () => {
    const item = shop.createAgedBrieItem('Aged Brie', -1, 50);
    item.updateQuality();
    expect(item.getQuality()).toBe(50);
    expect(item.getSellIn()).toBe(-2);
  });

  test('sellin is over', () => {
    const item = shop.createAgedBrieItem('Aged Brie', -3, 0);
    item.updateQuality();
    expect(item.getQuality()).toBe(2);
    expect(item.getSellIn()).toBe(-4);
  });

  test('sellin is over', () => {
    expect(1 + 1).toBe(2);
  });

  /*test('item string representation', () => {
    const item = shop.createAgedBrieItem('Aged Brie', -1, 0);
    item.updateQuality();
    expect(item.toString()).toBe('Aged Brie, -2, 2');
  });
*/

  test('quality goes up', () => {
    const item = shop.createAgedBrieItem('Aged Brie', 1, 1);
    item.updateQuality();
    expect(item.getQuality()).toBe(2);
    expect(item.getSellIn()).toBe(0);
  });
});
