import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"

const BookshelfWithSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="search_section p-4">
      <div className="top-app w-full flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gray-200 pb-4 mb-4 gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Bookshelf</h1>
        <form onSubmit={handleSearch} className="search-form w-full lg:w-auto">
          <div className="relative flex items-center w-full lg:w-80">
            <Search className="absolute left-3 text-gray-400 pointer-events-none" size={20} />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookshelfWithSearch

