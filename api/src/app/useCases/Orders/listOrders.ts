import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    const ordersFilter = orders.filter((order) => {
      if (order.status !== 'CONCLUDED') {
        return order;
      }
    });

    res.status(201).json(ordersFilter);
  } catch {
    return res.sendStatus(500);
  }
}
