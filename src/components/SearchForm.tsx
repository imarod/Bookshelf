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
      <h2>Cari Buku (Opsional)</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBookTitle">Judul</label>
        <input id="searchBookTitle" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Cari</button>
      </form>
    </section>
  )
}

export default SearchForm

