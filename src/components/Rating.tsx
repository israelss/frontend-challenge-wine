interface RatingProps {
  rating: number
}

const Rating = ({ rating }: RatingProps): JSX.Element => {
  return (
    <div className='rating'>
      {'★'.repeat(rating).padEnd(5, '☆')}
    </div>
  )
}

export default Rating
