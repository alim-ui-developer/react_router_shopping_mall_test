import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import ProductDetailImageBox from '../component/ProductDetailImageBox';
import ProductDetailTextBox from '../component/ProductDetailTextBox';
import ClipLoader from "react-spinners/ClipLoader";
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  let { id } = useParams(); // url에 담겨있는 파라미터값을 가져온다
  const product = useSelector((state) => state.product.selectedItem);
  // const [ product, setProduct ] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getProductDetail = async () => {
      setIsLoading(true);
      dispatch(productAction.getProductDetail(id));
      setIsLoading(false);
    }
    
    getProductDetail();
  },[dispatch, id])

  return (
    <>
      {product && 
        <Container className='procutDetailWrap'>
          {isLoading ? 
            <ClipLoader color="crimson" size={50} className='loadingSpinner' /> :
            <Row className='topBox'>
              <Col lg={5} className="imageBox">
                <ProductDetailImageBox product={product} />
              </Col>
              <Col lg={7} className='textBox'>
              <ProductDetailTextBox product={product} />
              </Col>
            </Row>
          }
          <div className="bottomBox">
            <h3>detail cut</h3>
            {isLoading ? 
              <ClipLoader color="crimson" size={50} className='loadingSpinner' /> :
              <p>
                <img src={product.img} alt={product.title} />
              </p>
            }
          </div>
        </Container>
      }
    </>
  )
}

export default ProductDetail