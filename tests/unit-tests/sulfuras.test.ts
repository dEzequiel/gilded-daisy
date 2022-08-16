import {Sulfuras} from "../../src/Sulfuras";

test('one day passed and nothing happen', () => {
    const item = new Sulfuras('Aged Brie', 2);
    item.updateQuality();
    expect(item.quality).toBe(80);
    expect(item.sellIn).toBe(2);
});