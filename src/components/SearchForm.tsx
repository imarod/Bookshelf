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
          <div className="search-container relative w-full lg:w-80">
            <div className="search-icon-wrapper">
              <Search className="search-icon" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookshelfWithSearch

