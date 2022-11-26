import {createSlice} from '@reduxjs/toolkit';

const listButton = [];

export default createSlice({
  name: 'createButton',
  initialState: listButton,
  reducers: {
    addButton: (state, action) => {
      state.push(action.payload);
    },
  },
});
