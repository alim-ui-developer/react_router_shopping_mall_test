import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
  <>
    {item && 
      <div className='productCard' onClick={showDetail}>
        <p className='image'>
          <img src={item.img} alt={item.title} />
        </p>
        <h2 className='title'>{item.title}</h2>
        <p className='price'>₩{item.price.toLocaleString('ko-KR')}</p>
        <div className="icons">
          {item.new &&
            <i className='ico_new'>New</i>
          }
          {item.choice && 
            <i className='ico_choice'>Conscious Choice</i>
          }
        </div>
      </div>
    }
  </>
  )
}

export default ProductCard