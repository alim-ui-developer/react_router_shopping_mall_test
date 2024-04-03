import React from 'react'

const ProductDetailImageBox = ({product}) => {
  return (
    <>
      <div className='image'>
        <div className="icons">
          {product.new &&
            <i className='ico_new'>New</i>
          }
          {product.choice && 
            <i className='ico_choice'>Conscious Choice</i>
          }
        </div>
        <img src={product.img} alt={product.title} />
      </div>
    </>
  )
}

export default ProductDetailImageBox