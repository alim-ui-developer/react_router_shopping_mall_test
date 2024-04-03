let initialState = {
  productList:[],
  selectedItem: null,
}

function productReducer(state = initialState, action){
  let { type, payload } = action;
  switch (type){
    case "GET_PRODUCT_SECCESS":
      return { ...state, productList:payload.data };
      case "GET_PRODUCT_DETAIL":
        return { ...state, selectedItem:payload.data };
    default:
      return { ...state }
  }
}

export default productReducer;