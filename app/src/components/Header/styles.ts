import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  margin: 24px 24px 0;
`;

export const Content = styled.View`
`;

export const OrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.View`
  border: 1px solid rgba(206, 206, 206, 0.3);
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  margin-top: 24px;
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.View`
`;

export const ButtonBell = styled.TouchableOpacity`
  background-color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;


export const NotificationLength = styled.View`
  background-color: #D72535;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -8px;
`;
