import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0' };
  flex: 1;
  background-color: #f7f7f7;
  padding: 20px
`;


export const ContentProfile = styled.View`
  margin-top: 24px;
  line-height: 22px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin: 24px 0px;
`;


export const ButtonSave = styled.TouchableOpacity`
  background-color: red;
  padding: 16px 0px;
  border-radius: 44px;
  align-items: center;
  background-color: ${({ colorBtn }) => colorBtn};
`;
