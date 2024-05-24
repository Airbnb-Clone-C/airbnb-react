function ReviewMetaContent({ category, value, icon }) {
  return (
    <div className=' px-4 pb-1 border-l-gray-300 border-l-2 w-80'>
      <div className='flex flex-col justify-between font-semibold bg-white text-gray-700 text-sm h-full'>
        <div className=' gap-1'>
          <div>{category}</div>
          <div>{value}</div>
        </div>
        <img src={icon} className='w-6 h-6' alt={category} />
      </div>
    </div>
  )
}

export default ReviewMetaContent