import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  currencyList: [],
  selectedCurrency: null,
  filteredCurrencyLists: [],
  status: 'idle',
  error: null,
};

export const fetchCurrencyList = createAsyncThunk(
  'currencyList/fetchCurrencyList',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins');
    const data = await response.json();
    return data.coins;
  },
);

const currencyListsSlice = createSlice({
  name: 'currencyList',
  initialState,
  reducers: {
    selectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    filteredCurrencyLists: (state, action) => {
      const filterValue = action.payload.toLowerCase();
      state.filteredCurrencyLists = state.currencyList.filter((currency) => currency
        .name.toLowerCase().includes(filterValue));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrencyList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currencyList = action.payload;
        state.filteredCurrencyLists = action.payload;
      })
      .addCase(fetchCurrencyList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectedCurrency, filteredCurrencyLists } = currencyListsSlice.actions;
export default currencyListsSlice.reducer;
// https://api.coinstats.app/public/v1/coins
