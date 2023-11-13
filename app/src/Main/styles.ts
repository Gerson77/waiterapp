import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0' };
  flex: 1;
  background-color: #f7f7f7;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
`;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FooterButtons = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonFooter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid black;
`;

export const Path = styled.View`
  width: 12px;
  height: 2px;
  margin-top: 4px;
  background-color: #D73035;
`;

