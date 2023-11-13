// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';

const store = configureStore({
  reducer: rootReducer,
  // outras configurações do middleware, devTools, etc.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
