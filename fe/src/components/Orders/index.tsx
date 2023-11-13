import { useEffect, useState } from 'react';
import Order from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';
import socketIo from 'socket.io-client';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const io = socketIo(import.meta.env.VITE_NODE_API_URL, {
      transports: ['websocket']
    });

    io.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });

  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter(
    (order) => order.status === 'IN_PRODUCTION'
  );
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? { ...order, status}
        : order
    )));
  }

  return (
    <Container>
      <OrdersBoard
        icon="⏰"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeStatusOrder={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="👨🏻‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeStatusOrder={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeStatusOrder={handleOrderStatusChange}
      />
    </Container>
  );
}
