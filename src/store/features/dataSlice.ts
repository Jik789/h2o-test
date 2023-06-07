import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MOCK_DATA } from '../../utils/mock';
import { isSubstringIgnoreCase } from '../../utils/utls';

const initialState = {
  originalData: MOCK_DATA,
  filteredData: MOCK_DATA,
  userInPage: 3,
  paginationPage: 1,
  currentSortByName: 'asc',
  currentSortById: 'asc',
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
    sortUserDataByName: (state) => {
      const sortOrder = state.currentSortByName === 'asc' ? 1 : -1;

      state.currentSortByName = state.currentSortByName === 'asc' ? 'desc' : 'asc';
      state.filteredData = state.filteredData.sort((a, b) => {
        const nameA = a.mainInfo.userName.toUpperCase();
        const nameB = b.mainInfo.userName.toUpperCase();

        if (nameA < nameB) return -1 * sortOrder;
        if (nameA > nameB) return 1 * sortOrder;
        return 0;
      });
    },
    sortUserDataById: (state) => {
      const sortOrder = state.currentSortById === 'asc' ? 1 : -1;
      state.currentSortById = state.currentSortById === 'asc' ? 'desc' : 'asc';
      state.filteredData = state.filteredData.sort(
        (a, b) => sortOrder * (a.mainInfo.userID - b.mainInfo.userID)
      );
    },
  },
});

export const {
  searchForName,
  changeUserInPage,
  changePaginationPage,
  sortUserDataByName,
  sortUserDataById,
} = userDataSlice.actions;

export default userDataSlice.reducer;
