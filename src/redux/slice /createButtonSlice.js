import {createSlice} from '@reduxjs/toolkit';

const listButton = [
  {
    id: '1',
    text: 'I am button',
    color: '#FFF',
    backgroudColor: '#CB2E2E',
    valueWidth: 'dynamic',
    valueHeight: 'dynamic',
    width: '90%',
    height: 56,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
  },
];

export default createSlice({
  name: 'createButton',
  initialState: listButton,
  reducers: {
    addButton: (state, action) => {
      state.push(action.payload);
    },
  },
});
