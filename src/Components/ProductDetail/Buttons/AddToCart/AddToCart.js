import React from 'react'
import {
  PrimaryButton
} from '@fluentui/react'
import './AddToCart.scss'

export const AddToCart = () => {
  return (
    <div>
      <PrimaryButton className="add-cart-button" text="Add To Cart" />
    </div>
  )
}

export default AddToCart
