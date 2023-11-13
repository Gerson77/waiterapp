import { Text } from '../Text';
import {
  Container,
  Notification,
  StatusNotification,
  InfoNotification,
  IconStatus,
  IconStatusColor,
  CenteredContainer,
  Ellipse,
  Content,
  ViewTitle,
} from './styles';

// import { products } from '../../mocks/products';
import { Empty } from '../Icons/Empty';
import { useEffect, useState } from 'react';
// import { Product } from '../../types/Product';
import { api } from '../../utils/api';
import Order from '../../types/Order';

import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';

import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale(ptBR);
dayjs.extend(relativeTime);

interface OrderProps extends Order {
  state: boolean;
}

export function Notifications() {
  async function handleSelectCategory() {
    const { data } = await api.get('/orders');

    const listFilters = data.filter((list: Order) => {
      if (list.status !== 'WAITING') {
        return list;
      }
    });

    const ordersUpdated = listFilters.map((objeto: OrderProps) => {
      return {
        ...objeto,
        state: false,
      };
    });

    setOrderList(ordersUpdated);
  }

  useEffect(() => {
    handleSelectCategory();
  }, []);

  const [orderList, setOrderList] = useState<OrderProps[]>([]);

  const updateElementState = (id: string, newState: boolean) => {
    const updatedListOrders = orderList.map((order) => {
      if (order._id === id) {
        return { ...order, state: newState };
      }
      return order;
    });

    setOrderList(updatedListOrders);
  };


  return (
    <Container>
      <ViewTitle>
        <Text weight="600" size={24}>
          Notificações
        </Text>
      </ViewTitle>
      {orderList.length > 0 ? (
        <Content>
          <>
            {orderList.map((order) => (
              <Notification
                key={order._id}
                onPress={() => updateElementState(order._id, true)}
                opacity={order.state ? '0.7' : '1'}
              >
                <IconStatus>
                  {order.status === 'IN_PRODUCTION' ? (
                    <Text>👩‍🍳</Text>
                  ) : (
                    <Text>✅</Text>
                  )}
                </IconStatus>
                <StatusNotification>
                  <Text weight="600">Mesa {order.table}</Text>
                  <InfoNotification>
                    {order.status === 'IN_PRODUCTION' && (
                      <Text>Entrou em produção</Text>
                    )}
                    {order.status === 'CONCLUDED' && <Text>Concluído</Text>}
                    <Text>{`${dayjs(order.updatedAt).fromNow()}`} </Text>
                  </InfoNotification>

                  {!order.state && <Ellipse />}
                </StatusNotification>
                <IconStatusColor />
              </Notification>
            ))}
          </>
        </Content>
      ) : (
        <CenteredContainer>
          <Empty />
          <Text style={{ marginTop: 24 }}>Você não possui nenhuma</Text>
          <Text>notificação no momento</Text>
        </CenteredContainer>
      )}
    </Container>
  );
}
