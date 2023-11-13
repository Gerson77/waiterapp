import { combineReducers } from '@reduxjs/toolkit';

import notificationReducer from './slices/notificationsSlice';

const rootReducer = combineReducers({
  notification: notificationReducer,
});

export default rootReducer;
