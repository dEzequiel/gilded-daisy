import { prismaMock } from '../../src/database/singleton';
import * as db_inventory from '../../src/database/init';

describe('testing sqlite database via prisma orm', () => {
  test('should create new item', async () => {
    const item = {
      id: 1,
      name: 'Aged Brie',
      sell_in: 1,
      quality: 1
    };

    prismaMock.inventory.create.mockResolvedValue(item);

    await expect(db_inventory.addItem(item)).resolves.toEqual({
      id: 1,
      name: 'Aged Brie',
      sell_in: 1,
      quality: 1
    });
  });

  test('should get all inventory', async () => {
    const item = [
      {
        id: 1,
        name: 'Aged Brie',
        sell_in: 1,
        quality: 1
      },
      {
        id: 2,
        name: 'Sulfuras',
        sell_in: 1,
        quality: 1
      }
    ];

    prismaMock.inventory.findMany.mockResolvedValue(item);

    await expect(db_inventory.getAll()).resolves.toEqual([
      {
        id: 1,
        name: 'Aged Brie',
        sell_in: 1,
        quality: 1
      },
      {
        id: 2,
        name: 'Sulfuras',
        sell_in: 1,
        quality: 1
      }
    ]);
  });

  test('should delete an item', async () => {
    const item = {
      id: 1,
      name: 'Aged Brie',
      sell_in: 1,
      quality: 1
    };

    prismaMock.inventory.delete.mockResolvedValue(item);

    await expect(db_inventory.deleteItem(1)).resolves.toEqual({
      id: 1,
      name: 'Aged Brie',
      sell_in: 1,
      quality: 1
    });
  });
});
