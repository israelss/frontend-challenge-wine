interface RatingProps {
  rating: number
}

const Rating = ({ rating }: RatingProps): JSX.Element => {
  return (
    <div>
      {'★'.repeat(rating).padEnd(5, '☆')}
    </div>
  )
}

export default Rating
