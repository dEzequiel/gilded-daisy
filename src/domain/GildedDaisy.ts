import {Factory} from "../Factory";
import { Item } from "../interfaces/Item";
import { AgedBrie } from "../domain/AgedBrie";
import { Sulfuras } from "../domain/Sulfuras";
import { Conjured } from "../domain/Conjured";
import { BackstagePass } from "../domain/BackstagePass";
import { NormalItem } from "../domain/NormalItem";

export class GildedDaisy extends Factory {

    private inventory: Array<Item> | undefined = []

    constructor(inventory?: Array<Item> ) {
        super()
       this.inventory = inventory
    }

    public createAgedBrieItem(name: string, sellIn: number, quality: number): Item {
        return new AgedBrie(name, sellIn, quality)
    }

    public createSulfurasItem(name: string, sellin: number): Item {
        return new Sulfuras(name, sellin)
    }

    public createConjuredItem(name: string, sellin: number, quality: number): Item {
        return new Conjured(name, sellin, quality)
    }

    public createBackstagePassItem(name: string, sellin: number, quality: number): Item {
        return new BackstagePass(name, sellin, quality)
    }

    public createNormalItem(name: string, sellin: number, quality: number): Item {
        return new NormalItem(name, sellin, quality)
    }

    public updateQuality(): void {
        this.inventory?.forEach((i) => i.updateQuality())
    }

    public getInventory(): Array<Item> {
        return this.inventory!
    }

    public setInventory(_inventory: Array<Item>): void {
        this.inventory = _inventory
    }

}