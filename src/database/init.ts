import prisma from "./client";
import {Item} from "../types/Item";

type Inventory = {}

export async function addItem(item: Item): Promise<Inventory> {
    return await prisma.inventory.create({
        data: {
            name: item.name,
            sell_in: item.sell_in,
            quality: item.quality
        }
    })
}


export async function deleteItem(id: number): Promise<Inventory> {
    return await prisma.inventory.delete({
        where: {
            id: id
        }
    })
}

export async function getAll(): Promise<Inventory> {
    return await prisma.inventory.findMany()
}

export async function getOneItem(id: number): Promise<Inventory | null> {
    return await prisma.inventory.findUnique({
        where: {
            id: id
        }
    })
}
