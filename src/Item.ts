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
    if (this._sellIn < 0) {
      this._quality -= 2;
    }

    this._sellIn -= 1;
    this._quality -= 1;
    this.limitQuality();
  }

  public limitQuality(): void {
    if (this._quality > 50) this._quality = 50;
  }

  public limitQualityByDays(): void {
    if (this._sellIn <= 0) this._quality = 0;
  }

  public toString(): string {
    return `${this._name}, ${this._sellIn}, ${this._quality}`;
  }
}
