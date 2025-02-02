import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Components 
import Rating from '../Rating/Rating'

const Product = ({ prod }) => {
  console.log(prod.image);
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${prod._id}`}>
        {/* Use the prod.image path directly without prepending "/images/" */}
        <Card.Img src={prod.image} alt={prod.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${prod._id}`}>
          <Card.Title as='div'>
            <strong>{prod.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            {prod.rating} from {prod.numReviews} reviews
            <Rating value={prod.rating} text={`${prod.numReviews} reviews`} color={'#f8e825'} />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${prod.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
