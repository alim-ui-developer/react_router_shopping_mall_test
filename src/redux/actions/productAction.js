import { productActions } from '../reducers/productSlice';

// function getProducts(searchQuery){
//   return async ( dispatch, getState ) => {
//     let url = `https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // dispatch({ type:'GET_PRODUCT_SECCESS', payload:{ data } })
//     dispatch(productActions.getAllProducts({data}))
//   }
// }

// function getProductDetail(id) {
//   return async ( dispatch, getState ) => {
//     let url = `https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall/products/${id}`
//     let response = await fetch(url);
//     let data = await response.json();
//     // dispatch({ type:'GET_PRODUCT_DETAIL', payload:{ data } })
//     dispatch(productActions.getSingleProducts({data}))
//   }
// }

// export const productAction={getProducts, getProductDetail}