import { useState } from 'react';
import Order from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

interface PropsOrdersBoard {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeStatusOrder: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeStatusOrder }: PropsOrdersBoard) {
  const [isModalViseble, setIsModalViseble] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalViseble((prevState) => !prevState);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalViseble(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);
    onChangeStatusOrder(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalViseble(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalViseble(false);
  }

  async function handleConcludedOrder() {
    setIsLoading(true);

    const status = 'CONCLUDED';

    if(selectedOrder?.status === 'DONE') {
      await api.patch(`/orders/${selectedOrder?._id}`, { status });
    }

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi concluído!`);
    onChangeStatusOrder(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalViseble(false);
  }

  return (
    <Board>
      <OrderModal
        order={selectedOrder}
        visible={isModalViseble}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
        onCloncluded={handleConcludedOrder}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
