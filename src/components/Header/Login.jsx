const Login = ({ children, setAccountActive }) => {
  return (
    <>
      <div className='relative flex items-center justify-center h-full gap-4'>
        {/* MakeHost*/}
        <div className='flex items-center justify-center'>
          <a
            href='#'
            className="px-4 py-2 transition-all duration-100 ease-in cursor-pointer hover:bg-gray-200 rounded-2xl text-neutral-800 text-sm font-['SF Pro']"
          >
            당신의 공간을 에어비엔비하세요
          </a>

          {/* LanguageBtn*/}
          <div className='px-3 py-2 transition-all duration-100 ease-in cursor-pointer hover:bg-gray-200 rounded-2xl'>
            <a href='#'>
              <img src='/src/assets/globe.svg' alt='globe' />
            </a>
          </div>
        </div>

        <>
          {/* AccountBtn */}
          <button
            onClick={() => {
              setAccountActive(prev => !prev)
            }}
            className='flex items-center justify-center gap-2 px-4 py-1 transition-all duration-200 ease-in border border-gray-300 rounded-3xl hover:shadow-md'
          >
            <div className='flex items-center justify-center w-10'>
              <img className='w-2/3' src='/src/assets/menu.svg' alt='menu' />
              <img src='/src/assets/myAccountImg.svg' alt='account' />
            </div>
            <div className='relative'>{children}</div>
          </button>
        </>
      </div>
    </>
  )
}

export default Login