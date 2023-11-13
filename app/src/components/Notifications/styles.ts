import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #FAFAFA;
  width: 100%;
`;

export const ViewTitle = styled.View`
  padding: 20px;
`;

export const Notification = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 14px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #fff;
  width: 100%;
  opacity: ${({ opacity }) => opacity};
`;

export const StatusNotification = styled.View`
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
`;

export const InfoNotification = styled.View`
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
  margin-top: 4px;
`;

export const IconStatus = styled.View`
  background-color: #fefefe;
  border-radius: 16px;
  min-width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const IconStatusColor = styled.View`
  background-color: ${({ color }) => color  } ;
  min-width: 12px;
  height: 12px;
  margin: 20px;
  border-radius: 6px;
  position: absolute;
  top: 0;
  right: -20px;
`;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Ellipse = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #D73035;

  position: absolute;
  top: 50%;
  right: 40px;
`;


export const Content = styled.ScrollView`
  padding: 0px 20px;
`;
