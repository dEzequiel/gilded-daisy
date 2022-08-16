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
            new BackstagePass('Backstage pass', 11, 1),
            new Conjured('Conjured', 1, 2),
            new Sulfuras('Sulfuras', 2)
        ]

        const shop = new GildedRose(items)

    })
})