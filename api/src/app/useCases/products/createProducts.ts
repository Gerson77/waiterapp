import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { category, ingredients, price, description, name } =
    req.body;

    const products = await Product.create({
      name,
      description,
      category,
      price: Number(price),
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    res.status(201).json(products);
  }catch {
    res.sendStatus(500);
  }
}
