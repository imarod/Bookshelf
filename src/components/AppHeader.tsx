import React from 'react'
import { BookOpen } from 'lucide-react'

const AppHeader = () => {
  return (
    <div >
      <header className="relative h-64 w-full bg-[url('../header.PNG')] flex items-center justify-center text-white bg-cover bg-center sm:h-70 md:h-80 lg:h-[250px] ">

        <div className="rounded-lg absolute -bottom-6 left-14 shadow sm:left-14 md:left-16 lg:left-20">
          <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-24 lg:w-24 bg-gray-500 rounded-lg flex items-center justify-center">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          
          </div>
        </div>

      </header>
    </div>
  )
}

export default AppHeader
