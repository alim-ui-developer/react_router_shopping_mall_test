import React from 'react'
import ProductDetail from '../page/ProductDetail';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate );
  return (
    authenticate ? <ProductDetail/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute