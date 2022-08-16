import { Conjured } from '../../src/Conjured';

describe('conjured item test', () => {
  test('should update quality for conjured sellin 1 day', () => {
    const item = new Conjured('Conjured', 1, 2);
    item.updateQuality();
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(0);
  });

  test('should update conjured quality 4x as fast for sellin 0 days', () => {
    const item = new Conjured('Conjured', 0, 4);
    item.updateQuality();
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(-1);
  });

  test('conjured item quality should never go below 0', () => {
    const item = new Conjured('Conjured', 0, 1);
    item.updateQuality();
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(-1);
  });

  test('should lower quality by 3 if exactly 5 days left', () => {
    const item = new Conjured('Conjured', 5, 6);
    item.updateQuality();
    expect(item.quality).toBe(3);
    expect(item.sellIn).toBe(4);
  });
});
