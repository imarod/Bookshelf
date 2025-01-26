import type React from "react"
import { Search } from "lucide-react"

interface SearchFormProps {
  onSearch: (query: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <section className="search_section ">
      <div className="top-app w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Bookshelf</h1>
        <div className="search-form w-full lg:w-auto">
          <div className="search-container relative w-full lg:w-80">
            <div className="search-icon-wrapper">
              <Search className="search-icon" size={20} />
            </div>
            <input type="text" placeholder="Search books..." onChange={handleSearch} className="search-input" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchForm

