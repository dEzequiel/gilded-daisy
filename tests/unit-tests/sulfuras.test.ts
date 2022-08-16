import { Sulfuras } from '../../src/domain/Sulfuras';

test('one day passed and nothing happen', () => {
  const item = new Sulfuras('Sulfuras', 2);
  item.updateQuality();
  expect(item.quality).toBe(80);
  expect(item.sellIn).toBe(2);
});
