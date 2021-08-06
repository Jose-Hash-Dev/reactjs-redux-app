import React from 'react'
import { ImageFit, Text } from '@fluentui/react'
import './ProductList.scss'
import {
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
  DocumentCardTitle
} from '@fluentui/react/lib/DocumentCard'
import { Link } from 'react-router-dom'
import Books from '../../assets/Data'

function ProductList () {
  return (
    <div>
      {Books.map(book => {
        return (
          <DocumentCard
            key={book.id}
            className="product-list">
            <Link to={`/products/${book.id}`}>
              <DocumentCardImage
                height={500}
                imagefit={ImageFit.cover}
                imageSrc={book.image}
                alt={book.alt}/>
            </Link>
            <DocumentCardDetails
              className="product-list-details">
              <DocumentCardTitle
                className="product-list-details__title"
                title={book.title}
                shouldTruncate/>
              <Text className="product-list-details__price">{book.price}$</Text>
            </DocumentCardDetails>
          </DocumentCard>
        )
      })}
    </div>
  )
}

export default ProductList
