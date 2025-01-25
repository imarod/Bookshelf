import type React from "react"
import { useState } from "react"

interface SearchFormProps {
  onSearch: (term: string) => void
}

function SearchForm({ onSearch }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <section className="search_section">
      <div className="flex justify-end flex-1 ml-4">
        <form onSubmit={handleSubmit} className="flex gap-2 w-[400px]">
          <input
            id="searchBookTitle"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Cari judul buku..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Cari
          </button>
        </form>
      </div>

    </section>
  )
}

export default SearchForm

