import { BackstagePass } from '../../src/BackstagePass';

describe('backstage pass test', () => {
  test('should increase quality of backstage passes by 1 when more than 10 days remaining', () => {
    const item = new BackstagePass('Backstage pass', 11, 1);
    item.updateQuality();
    expect(item.quality).toBe(2);
    expect(item.sellIn).toBe(10);
  });

  test('should increase quality of backstage passes by 2 when more than 5 days remaining', () => {
    const item = new BackstagePass('Backstage pass', 3, 1);
    item.updateQuality();
    expect(item.quality).toBe(4);
    expect(item.sellIn).toBe(2);
  });

  test('should set quality of backstage passes to 0 after concert', () => {
    const item = new BackstagePass('Backstage pass', 0, 10);
    item.updateQuality();

    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(-1);
  });
});
