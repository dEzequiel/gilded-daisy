import {Item} from "../../src/domain/Item";
import {AgedBrie} from "../../src/domain/AgedBrie";
import {BackstagePass} from "../../src/domain/BackstagePass";
import {Conjured} from "../../src/domain/Conjured";
import {Sulfuras} from "../../src/domain/Sulfuras";
import {GildedRose} from "../../src/Shop";

describe('shop inventory is updated', () => {
    test('should update all items', () => {
        const items: Array<Item> = [
            new AgedBrie('Aged Brie',1, 2),
            new BackstagePass('Backstage pass', 3, 1),
            new Conjured('Conjured', 1, 2),
            new Sulfuras('Sulfuras', 2)
        ]

        const shop = new GildedRose(items)
        shop.updateInventory()
        expect(shop.inventory[0].quality).toBe(3)
        expect(shop.inventory[0].sellIn).toBe(0)
        expect(shop.inventory[1].quality).toBe(4)
        expect(shop.inventory[1].sellIn).toBe(2)
        expect(shop.inventory[2].quality).toBe(0)
        expect(shop.inventory[2].sellIn).toBe(0)
        expect(shop.inventory[3].quality).toBe(80)
        expect(shop.inventory[3].sellIn).toBe(2)
    })
})