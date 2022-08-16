import {Item} from "../src/Item";

export class Conjured extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality() {

        if(this.sellIn == 5)
            this.quality -= 3
        else
            this.quality -= 1


        this.sellIn -= 1
        this.limitQualityByDays()

    }
}