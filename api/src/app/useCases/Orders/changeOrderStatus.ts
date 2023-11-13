import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { io } from '../../..';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE', 'CONCLUDED'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE',
      });
    }

    const order = await Order.findById(orderId);

    if(order?.status === status) {
      return res.json(order);
    }

    const updatedOrder = await Order.findByIdAndUpdate(orderId, {
      status: status,
      updatedAt: Date.now()
    });

    io.emit('order@updated', updatedOrder?._id);
    return res.json(updatedOrder);
  }catch {
    res.sendStatus(500);
  }
}
