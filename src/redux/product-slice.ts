import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductType } from '@/lib/definitions';

type SortType = string | null;

interface ProductState {
  items: Record<ProductType, Product[]>;
  searchQuery: string;
  filterCriteria: {sort:SortType; filter:Array<string>};
  pagination: Record<ProductType, { page: number; total: number }>;
}

const initialState: ProductState = {
  items: { plant: [], pot: [], gift: [] },
  searchQuery: '',
  filterCriteria: { sort: null, filter:[]},
  pagination: { plant: { page: 1, total: 0 }, pot: { page: 1, total: 0 }, gift: { page: 1, total: 0 } },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<{ type: ProductType; items: Product[]; total: number }>) => {
      const { type, items, total } = action.payload;
      state.items[type] = items;
      state.pagination[type].total = total;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilterCriteria: (state, action: PayloadAction<{ sort: SortType; filter: Array<string> }>) => {
      const { sort, filter } = action.payload;
      state.filterCriteria = { sort, filter};
    },
    setPage: (state, action: PayloadAction<{ type: ProductType; page: number }>) => {
      const { type, page } = action.payload;
      state.pagination[type].page = page;
    }
  },
});

export const { setItems, setSearchQuery, setFilterCriteria, setPage } = productSlice.actions;
export default productSlice.reducer;
