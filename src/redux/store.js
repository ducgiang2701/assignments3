import {configureStore} from '@reduxjs/toolkit';
import createButtonSlice from './slice /createButtonSlice';

const store = configureStore({
  reducer: {createButtonSlice: createButtonSlice.reducer},
});

export default store;
