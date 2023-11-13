import { useFonts } from 'expo-font';
import { Main } from './src/Main';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

// redux
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './state/store';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './state';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // outras configurações do Redux Persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedStore = configureStore({ reducer: persistedReducer });

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontsLoaded) {
    return null;
  }

  const persistor = persistStore(persistedStore);

  return (
    <Provider store={persistedStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
