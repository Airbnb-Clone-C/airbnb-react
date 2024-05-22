import ReviewHeader from './ReviewHeader'
import ReviewContent from './ReviewContent'
import ReviewMoreButton from './ReviewMoreButton'

const commentData = [
  {
    image: './no',
    name: 'Aaron',
    nationality: 'Korean',
    rating: 4.5,
    timeStamp: '2 hours ago',
    message: '안녕하세요.',
  },
  {
    image: './no',
    name: 'Baron',
    nationality: 'American',
    rating: 4.7,
    timeStamp: '3 hours ago',
    message: '반갑습니다',
  },
  {
    image: './no',
    name: 'Caron',
    nationality: 'French',
    rating: 3.9,
    timeStamp: '4 hours ago',
    message: '이상합니다.',
  },
  {
    image: './no',
    name: 'Daron',
    nationality: 'Japanese',
    rating: 4.8,
    timeStamp: '5 hours ago',
    message: '잘가세요.',
  },
]

const Review = () => {
  return (
    <div>
      <hr className='my-4 border-gray-300' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {commentData.map((comment, index) => {
          return (
            <div key={index} className='bg-white p-4 rounded'>
              <ReviewHeader
                image={comment.image}
                name={comment.name}
                nationality={comment.nationality}
              />
              <ReviewContent
                rating={comment.rating}
                timeStamp={comment.timeStamp}
                message={comment.message}
              />
            </div>
          )
        })}
      </div>
      <div className='mt-4'>
        <ReviewMoreButton />
      </div>
    </div>
  )
}

export default Review
