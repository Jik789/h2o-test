import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MOCK_DATA } from '../../utils/mock';
import { isSubstringIgnoreCase } from '../../utils/utls';

const initialState = {
  originalData: MOCK_DATA,
  filteredData: MOCK_DATA,
};
console.log(initialState);

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    searchForName: (state, action: PayloadAction<string>) => {
      state.filteredData = state.originalData.filter((item) =>
        isSubstringIgnoreCase(item.mainInfo.userName, action.payload)
      );
    },
    inputPage: () => {
      // state.mainInfo.userName = action.payload;
    },
  },
});

export const { searchForName, inputPage } = userDataSlice.actions;

export default userDataSlice.reducer;
