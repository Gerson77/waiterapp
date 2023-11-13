import {
  Actions,
  ModalBody,
  OrderDetails,
  OverLay,
  OverLayBackground,
} from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import Order from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
  onCloncluded: () => void;
}
export function OrderModal({
  visible,
  order,
  onClose,
  isLoading,
  onChangeOrderStatus,
  onCloncluded,
}: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <>
      <OverLayBackground onClick={onClose} />
      <OverLay>
        <ModalBody>
          <header>
            <strong>Mesa {order.table}</strong>
            <button type="button" onClick={onClose}>
              <img src={closeIcon} alt="icon-close" />
            </button>
          </header>

          <div className="statusContainer">
            <small>Status do pedido</small>
            <div>
              <span>
                {order.status === 'WAITING' && '⏰'}
                {order.status === 'IN_PRODUCTION' && '👨🏻‍🍳'}
                {order.status === 'DONE' && '✅'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Fila de espera'}
                {order.status === 'IN_PRODUCTION' && 'Em preparação'}
                {order.status === 'DONE' && 'Pronto'}
              </strong>
            </div>
          </div>

          <OrderDetails>
            <strong>Itens</strong>

            <div className="orderItens">
              {order.products.map(({ _id, product, quantity }) => (
                <div className="item" key={_id}>
                  <img
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt=""
                    width={56}
                    height={28.51}
                  />
                  <span className="quantity">{quantity}x</span>
                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="total">
              <span>Total</span>
              <strong>RS: {formatCurrency(total)}</strong>
            </div>
          </OrderDetails>

          <Actions>
            {order.status !== 'DONE' && (
              <button
                type="button"
                className="primary"
                disabled={isLoading}
                onClick={onChangeOrderStatus}
              >
                {order.status === 'WAITING' && (
                  <>
                    <span>👨🏻‍🍳 </span>
                    <strong>Iniciar Produção</strong>
                  </>
                )}
                {order.status === 'IN_PRODUCTION' && (
                  <>
                    <span>✅ </span>
                    <strong>Concluir pedido</strong>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              className="secondary"
              onClick={onCloncluded}
              disabled={isLoading}
            >
              <strong>Finalizar pedido!</strong>
            </button>
          </Actions>
        </ModalBody>
      </OverLay>
    </>
  );
}
