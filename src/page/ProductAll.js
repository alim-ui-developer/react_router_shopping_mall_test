/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import ProductCard from '../component/ProductCard';
import { Link, useSearchParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = (authenticate) => {  
  const [ isLoading, setIsLoading ] = useState(false);
  const productList = useSelector((state) => state.product.productList);
  const [ query, setQuery ] = useSearchParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getProducts = () => {
      let searchQuery = query.get('q');
      if(searchQuery === null){
        searchQuery = '';
      }
      setIsLoading(true);
      dispatch(productAction.getProducts(searchQuery))
      setIsLoading(false);
    };
    
    getProducts();
  },[dispatch, query]);

  return (
    <Container className='procutAllWrap'>
      {isLoading ? 
        <ClipLoader color="crimson" size={50} className='loadingSpinner' /> :
        <>
          <Row>
            {/* 상품 목록 보여주기 */}
            {productList && productList.map((item) => 
              <Col key={item.id} lg={3} md={6}>
                <ProductCard item={item} />
              </Col>
            )}
            {/* 검색한 상품이 없을 때 */}
            {productList.length <= 0 && authenticate === false && 
            <article className='searchProductEmptyBox'>
              <div>
                <i><FontAwesomeIcon icon={ faFaceSadTear } /></i>
                <p>검색하신 상품이 없습니다</p>
                <Link to='/' className='btn_allProductList'>전체 상품 보러가기 &gt;</Link>
              </div>
            </article>
            }
          </Row>
        </>
      }
    </Container>
  )
}

export default ProductAll