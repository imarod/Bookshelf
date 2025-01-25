import React from 'react'

const AppHeader = () => {
  return (
    <div >
      <header className="relative h-64 w-full bg-[url('../header.PNG')] flex items-center justify-center text-white bg-cover bg-center sm:h-70 md:h-80 lg:h-[250px] ">

        <div className="rounded-lg absolute -bottom-6 left-14 shadow sm:left-14 md:left-16 lg:left-20">
          <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-24 lg:w-24 bg-gray-500 rounded-lg flex items-center justify-center">
            <svg className="h-10 w-10 sm:h-11 sm:w-11 md:h-14 md:w-14 lg:h-14 lg:w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

      </header>
    </div>
  )
}

export default AppHeader
