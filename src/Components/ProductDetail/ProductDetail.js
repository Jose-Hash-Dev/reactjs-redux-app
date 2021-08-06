import React from 'react'
import { Text, ImageFit, SpinButton, Position, Rating, Image } from '@fluentui/react'
import { useParams } from 'react-router-dom'
import Book from '../../assets/Data'
import './ProductDetail.scss'
import {
  DocumentCard,
  DocumentCardTitle
} from '@fluentui/react/lib/DocumentCard'
import AddToCart from './Buttons/AddToCart/AddToCart'

function ProductDetail () {
  let { bookId } = useParams()
  bookId = parseInt(bookId)
  const thisBook = Book.find(book => book.id === bookId)

  return (
    <DocumentCard className="product-detail">
      <DocumentCardTitle className="product-detail__title" title={thisBook.title} shouldTruncate />
      <Image
        className="product-detail__image"
        imageFit={ImageFit.cover}
        src={thisBook.image}
        alt={thisBook.alt}/>
      <Text className="product-detail__description">{thisBook.description}</Text>
      <div className="product-detail-price-amount-container">
        <SpinButton
          label="Amount:"
          labelPosition={Position.top}
          defaultValue="0"
          min={0}
          max={20}
          step={1}
          incrementButtonAriaLabel="Increase value by 1"
          decrementButtonAriaLabel="Decrease value by 1"
          className="product-detail__spinner"
        />
        <div className="">
          <Text className="product-detail-price-amount-container__price">{thisBook.price}$</Text>
          <Rating
            defaultRating={0}
            allowZeroStars
            size={1}
            max={5}
            ariaLabel="Small stars with 0 stars allowed"
            ariaLabelFormat="{0} of {1} stars"
            className="product-detail-price-amount-container__rating"
          />
        </div>
      </div>
      <AddToCart />
    </DocumentCard>
  )
}

export default ProductDetail
