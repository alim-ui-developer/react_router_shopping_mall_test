import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

let initialState = {
  productList:[],
  selectedItem: null,
  isLoading: false,
  error: null
}

// 기존 문법
// function productReducer(state = initialState, action){
//   let { type, payload } = action;
//   switch (type){
//     case "GET_PRODUCT_SECCESS":
//       return { ...state, productList:payload.data };
//       case "GET_PRODUCT_DETAIL":
//         return { ...state, selectedItem:payload.data };
//     default:
//       return { ...state }
//   }
// }

// export default productReducer;

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
  try{
    let url = `https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    return await response.json();
  }catch(error){
    thunkApi.rejectWithValue(error.message);
  }
});

export const fetchProductsDetail = createAsyncThunk('product/fetchDetail', async (id, thunkApi) => {
  try{
    let url = `https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall/products/${id}`;
    let response = await fetch(url);
    return await response.json();
    // dispatch(productActions.getSingleProducts({data}))
  }catch(error){
    thunkApi.rejectWithValue(error.message);
  }
});


const productSlice = createSlice({
  name:'product',
  initialState,
  // redux에 의해서 바로바로 호출이 되는 것들
  reducers:{
    // getAllProducts(state, action){
    //  state.productList = action.payload.data;
    // },
    getSingleProducts(state, action){
      state.selectedItem = action.payload.data;
    }
  },
  // dispatch를 이용해서 바로 호출하지는 않지만 thunk등 외부 라이브러리에 의해 호출되는 것들
  extraReducers: ( builder ) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled,(state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    })
    .addCase(fetchProducts.rejected,(state, action) => {
      this.isLoading = false;
      state.error = action.payload;
    })
  }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;