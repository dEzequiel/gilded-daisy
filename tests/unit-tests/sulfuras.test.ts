import { Sulfuras } from '../../src/domain/Sulfuras';
import {Factory} from "../../src/Factory";
import {GildedDaisy} from "../../src/domain/GildedDaisy";

const shop: Factory = new GildedDaisy()

test('one day passed and nothing happen', () => {
  const item = shop.createSulfurasItem('Sulfuras', 2)
  item.updateQuality();
  expect(item.getQuality()).toBe(80);
  expect(item.getSellIn()).toBe(2);
});
