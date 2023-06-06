import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MOCK_DATA } from '../../utils/mock';
import { isSubstringIgnoreCase } from '../../utils/utls';

const initialState = {
  originalData: MOCK_DATA,
  filteredData: MOCK_DATA,
  userInPage: 3,
  paginationPage: 1,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    searchForName: (state, action: PayloadAction<string>) => {
      state.filteredData = state.originalData.filter((item) =>
        isSubstringIgnoreCase(item.mainInfo.userName, action.payload)
      );
    },
    changeUserInPage: (state, action: PayloadAction<string>) => {
      state.userInPage = Number(action.payload);
    },
    changePaginationPage: (state, action: PayloadAction<number>) => {
      state.paginationPage = action.payload;
    },
  },
});

export const { searchForName, changeUserInPage, changePaginationPage } = userDataSlice.actions;

export default userDataSlice.reducer;
