export const getProducts = async () => {
  // let url = 'http://localhost:5000/products';
  let url = 'https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall/products';
  let response = await fetch(url);
  let data = await response.json();
  return [...data];
};