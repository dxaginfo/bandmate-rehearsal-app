import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import bandsReducer from './features/bands/bandsSlice';
import rehearsalsReducer from './features/rehearsals/rehearsalsSlice';
import availabilityReducer from './features/availability/availabilitySlice';
import notificationsReducer from './features/notifications/notificationsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bands: bandsReducer,
    rehearsals: rehearsalsReducer,
    availability: availabilityReducer,
    notifications: notificationsReducer,
  },
});

export default store;
