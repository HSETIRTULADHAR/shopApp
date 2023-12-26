import React from 'react'

const Ratings = ({ratingCount}) => {
  const starIcon = [];
  console.log("Rating count is ", ratingCount);
  const renderRating = () => {
    for (let i=1; i <= ratingCount; i ++){
        starIcon.push(<i className='icofont-star'></i>)
    }
    return starIcon;
  }

  return (
    <span className='rating'>
        {renderRating()}
    </span>
  )
}

export default Ratings
