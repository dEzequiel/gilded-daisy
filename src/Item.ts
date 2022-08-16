export class Item {
  private _name: string;
  private _sellIn: number;
  private _quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this._name = name;
    this._sellIn = sellIn;
    this._quality = quality;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get sellIn(): number {
    return this._sellIn;
  }

  set sellIn(sellIn: number) {
    this._sellIn = sellIn;
  }

  get quality(): number {
    return this._quality;
  }

  set quality(quality: number) {
    this._quality = quality;
  }

  public updateQuality(): void {
    this._sellIn -= 1;
    this.quality -= 1;
  }

  public limitQuality(): void {
    if (this._quality > 50) {
      this._quality = 50;
    }
  }
}
