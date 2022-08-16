import { AgedBrie } from '../../src/AgedBrie';

test('one day passed', () => {
  const item = new AgedBrie('Aged Brie', 2, 0);
  item.updateQuality();
  expect(item.quality).toBe(1);
  expect(item.sellIn).toBe(1);
});

test('quality cant be more than 50', () => {
  const item = new AgedBrie('Aged Brie', -1, 50);
  item.updateQuality();
  expect(item.quality).toBe(50);
  expect(item.sellIn).toBe(-2);
});

test('sellin is over', () => {
  const item = new AgedBrie('Aged Brie', -3, 0);
  item.updateQuality();
  expect(item.quality).toBe(2);
  expect(item.sellIn).toBe(-4);
});
