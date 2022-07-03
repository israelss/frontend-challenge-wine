type RatingProps = {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div>
      { '★'.repeat(rating).padEnd(5, '☆') }
    </div>
  )
}

export default Rating
