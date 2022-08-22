export interface Item {
  getName(): string;
  getSellIn(): number;
  getQuality(): number;
  updateQuality(): void;
}
