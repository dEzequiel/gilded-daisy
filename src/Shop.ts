import {Item} from "@/domain/Item";

export class GildedRose {
    private _inventory: Array<Item> = []

    constructor(items: Array<Item>) {
        this._inventory = items
    }

    get inventory() {
        return this._inventory
    }

    public updateInventory(): void {
        this._inventory.forEach(function(item) {
            item.updateQuality()
        })
    }
}