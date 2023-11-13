import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import {
  Container,
  Content,
  OrderHeader,
  Table,
  HeaderContent,
  ButtonBell,
  HeaderText,
  NotificationLength,
} from './styles';
import { NotificationBell } from '../Icons/NotificationBell';
import { useEffect } from 'react';

import socketIo from 'socket.io-client';

import { getNotificationSuccess } from '../../../state/slices/notificationsSlice';
import { useDispatch, useSelector } from 'react-redux';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
  onWidgetNotifications: () => void;
}

export function Header({
  selectedTable,
  onCancelOrder,
  onWidgetNotifications,
}: HeaderProps) {

  const { notification } = useSelector((state: any) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const io = socketIo('http://192.168.0.10:3001', {
      transports: ['websocket']
    });

    io.on('order@updated', (order) => {
      dispatch(getNotificationSuccess(order));
      console.log('socket: ', order);
    });
  }, []);

  function handleRemoveNotifications() {
    onWidgetNotifications();
    dispatch(getNotificationSuccess([]));
  }

  // console.log(JSON.stringify(notification, null, 2));

  return (
    <Container>
      {!selectedTable && (
        <HeaderContent>
          <HeaderText>
            <Text size={14} opacity={0.9}>
              Bem vindo(a) ao
            </Text>
            <Text size={24} weight="700">
              WAITER<Text size={24}>APP</Text>
            </Text>
          </HeaderText>
          <ButtonBell onPress={handleRemoveNotifications}>
            {notification.length > 0 && (
              <NotificationLength>
                <Text color="white" weight="600">
                  {notification.length}
                </Text>
              </NotificationLength>
            )}
            <NotificationBell color="#626262" />
          </ButtonBell>
        </HeaderContent>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text color="#D73035" weight="600" size={14}>
                Cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <Text color="#626262">Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  );
}
