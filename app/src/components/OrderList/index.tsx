import { Text } from '../Text';
import {
  Container,
  ListItemOrder,
  ListOrder,
  OrderCard,
  TableContainer,
  TableContent,
  Content
} from './styles';
import Order from '../../types/Order';

interface PropsOrdersBoard {
  orders: Order[];
}

export function OrderList({ orders }: PropsOrdersBoard) {
  const orderInLoad = orders.filter(
    (order) =>
      order.status === 'WAITING' ||
      order.status === 'IN_PRODUCTION' ||
      order.status === 'DONE'
  );
  const orderInDone = orders.filter((order) => order.status === 'CONCLUDED');

  return (
    <Container>
      <Text size={24} weight="700" style={{ marginTop: 24 }}>
        Pedidos
      </Text>
      <Content>
        <Text size={18} weight="600" color="#626262" style={{ marginTop: 8, marginBottom: 8 }}>
          Em andamento
        </Text>
        {orderInLoad.map((order) => (
          <ListOrder key={order._id}>
            <OrderCard>
              <TableContainer>
                <TableContent>
                  <Text weight="600">Mesa {order.table}</Text>
                  {order.status === 'WAITING' && (
                    <Text
                      color="#626262"
                      weight="600"
                      style={{
                        backgroundColor: '#ebf8f2',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Em espera!
                    </Text>
                  )}
                  {order.status === 'IN_PRODUCTION' && (
                    <Text
                      color="#D76C30"
                      weight="600"
                      style={{
                        backgroundColor: '#f2e5de',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Entrou em produção!
                    </Text>
                  )}
                  {order.status === 'DONE' && (
                    <Text
                      color="#30D787"
                      weight="600"
                      style={{
                        backgroundColor: '#f2f2f2',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Pronto
                    </Text>
                  )}
                </TableContent>
                <ListItemOrder>
                  {order.products.map(({ _id, product, quantity }) => (
                    <Text color="#626262" key={_id}>
                      {quantity}x <Text color="#333">{product.name}</Text>{' '}
                    </Text>
                  ))}
                </ListItemOrder>
              </TableContainer>
            </OrderCard>
          </ListOrder>
        ))}

        <Text size={18} weight="600" color="#626262" style={{ marginTop: 24, marginBottom: 8 }}>
          Anteriores
        </Text>
        {orderInDone.map((order) => (
          <ListOrder key={order._id}>
            <OrderCard>
              <TableContainer>
                <TableContent>
                  <Text weight="600">Mesa {order.table}</Text>
                  {order.status === 'CONCLUDED' && (
                    <Text
                      color="#626262"
                      style={{
                        backgroundColor: '#f2f2f2',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Finalizado em 17/10/2023
                    </Text>
                  )}
                </TableContent>
                <ListItemOrder>
                  {order.products.map(({ _id, product, quantity }) => (
                    <Text color="#626262" key={_id}>
                      {quantity}x <Text color="#333">{product.name}</Text>{' '}
                    </Text>
                  ))}
                </ListItemOrder>
              </TableContainer>
            </OrderCard>
          </ListOrder>
        ))}
      </Content>
    </Container>
  );
}
