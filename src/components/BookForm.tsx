import type React from "react"
import { useState } from "react"
import { Plus} from "lucide-react"

interface BookFormProps {
  onAddBook: (book: { bookTitle: string; author: string; year: number; isCompleted: boolean }) => void
}


function BookForm({ onAddBook }: BookFormProps) {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddBook({
      bookTitle,
      author,
      year: Number.parseInt(year),
      isCompleted,
    })
    setBookTitle("")
    setAuthor("")
    setYear("")
    setIsCompleted(false)
  }

  return (
    <section className="input_section grid gap-8">
      <div>
        <h1 className=" font-bold text-3xl">Add New Book</h1>
        <p className="text-[#76767f] mt-24 mb-24"> Enter the details of the book you want to add to your collection. </p>
      </div>
      <form onSubmit={handleSubmit} className="mb-24">
        <div className="input flex item-center">
          <label htmlFor="inputBookTitle" className="whitespace-nowrap min-w-[60px]">Title</label>
          <input
            id="inputBookTitle"
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
          />
        </div>
        <div className="input flex item-center space-x-4 space-y-6">
          <label htmlFor="inputBookAuthor" className="whitespace-nowrap min-w-[60px]">Author</label>
          <input id="inputBookAuthor" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="input flex item-center space-x-4 mb-4">
          <label htmlFor="inputBookYear" className="whitespace-nowrap min-w-[60px]">Year</label>
          <input id="inputBookYear" type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div className="input_inline ">
          <label htmlFor="inputBookIsComplete">Finished Reading</label>
          <input
            id="inputBookIsComplete"
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>        
        <button type="submit" className="flex items-center justify-center gap-2 px-4 py-9 bg-[#6495ed] hover:bg-blue-600 text-white rounded-md w-full transition-colors">
          <>
          <Plus className="mr-2 h-6 w-auto"/>
          Add Book to  {isCompleted ? "Unread Shelf" : "Read Shelf"}
          </>        
        </button>
      </form>
    </section>
  )
}

export default BookForm

