import { Item } from './interfaces/Item'

export abstract class Factory {


    public abstract createAgedBrieItem(name: string, sellin: number, quality: number): Item
    public abstract createNormalItem(name: string, sellin: number, quality: number): Item
    public abstract createBackstagePassItem(name: string, sellin: number, quality: number): Item
    public abstract createSulfurasItem(name: string, sellin: number): Item
    public abstract createConjuredItem(name: string, sellin: number, quality: number): Item
    public abstract updateQuality(inventory: Array<Item>): void

}