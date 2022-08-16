import {Item} from "@/domain/Item";

export class GildedRose {
    private inventory: Array<Item> = []

    constructor(items: Array<Item>) {
        this.inventory = items
    }

    public updateInventory(days: number): void {
        for(let i = 0; i < days; i++) {
            this.inventory[i].updateQuality()
            this.inventory[i].toString()
        }
    }
}