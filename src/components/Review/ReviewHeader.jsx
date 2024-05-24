const ReviewHeader = ({ image, name, nationality }) => (
  <div className='flex items-center'>
    <img src={image} alt={name} className='w-10 h-10 bg-neutral-200 rounded-full mr-4' />
    <div>
      <p className='font-bold'>{name}</p>
      <p className='text-sm font-normal text-neutral-800'>{nationality}</p>
    </div>
  </div>
)

export default ReviewHeader