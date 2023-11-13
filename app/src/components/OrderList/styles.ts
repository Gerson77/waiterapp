import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0' };
  flex: 1;
  background-color: #f7f7f7;
  padding: 0px 10px
`;

export const ListOrder = styled.View`
  line-height: 22px;
`;

export const OrderCard = styled.View`
  line-height: 22px;
  overflow-y: auto;
`;

export const TableContainer = styled.View`
  background-color: #fff;
  padding: 24px;
  margin-bottom: 8px;
  overflow-y: auto;
  height: auto;
`;

export const TableContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid red;
`;

export const ListItemOrder = styled.View`
  gap: 8px;
  margin: 8px 0px;
`;


export const ListProduct = styled.View`
  flex-direction: row;
  margin: 0px 12px;
`;

export const Content = styled.ScrollView`
  margin-top: 24px;
`;
