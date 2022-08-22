import { Item } from '../../src/interfaces/Item'
import {Factory} from "../../src/Factory";
import {GildedDaisy} from "../../src/domain/GildedDaisy";

describe('shop inventory is updated', () => {

    test('should update all items', () => {
        const shop = new GildedDaisy()

        const items: Array<Item> = [
            shop.createAgedBrieItem('Aged Brie',1, 2),
            shop.createBackstagePassItem('Backstage pass', 3, 1),
            shop.createConjuredItem('Conjured', 1, 2),
            shop.createSulfurasItem('Sulfuras', 2)
        ]


        shop.setInventory(items)
        shop.updateQuality()
        expect(shop.getInventory()[0].getQuality()).toBe(3)
        expect(shop.getInventory()[0].getSellIn()).toBe(0)
        expect(shop.getInventory()[1].getQuality()).toBe(4)
        expect(shop.getInventory()[1].getSellIn()).toBe(2)
        expect(shop.getInventory()[2].getQuality()).toBe(0)
        expect(shop.getInventory()[2].getSellIn()).toBe(0)
        expect(shop.getInventory()[3].getQuality()).toBe(80)
        expect(shop.getInventory()[3].getSellIn()).toBe(2)

    })
})