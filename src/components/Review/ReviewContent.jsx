const ReviewContent = ({ rating, timeStamp, message }) => {
  const totalStars = 5
  return (
    <div className='mt-2'>
      <div className='flex items-center'>
        {/* <span className='text-black-500'>{'★'.repeat(rating)}</span> */}
        <div className='flex'>
          {[...Array(totalStars)].map((_, index) => (
            <span key={index} className={index < rating ? 'text-black' : 'text-gray-400'}>
              ★
            </span>
          ))}
        </div>
        <span className='ml-2 text-gray-600 text-sm'>{timeStamp}</span>
      </div>
      <p className='mt-2 text-gray-800'>{message}</p>
    </div>
  )
}
export default ReviewContent
