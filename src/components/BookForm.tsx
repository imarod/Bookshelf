import type React from "react"
import { useState } from "react"
import { Plus} from "lucide-react"

interface BookFormProps {
  onAddBook: (book: { bookTitle: string; author: string; year: number; isCompleted: boolean }) => void
}


function BookForm({ onAddBook }: BookFormProps) {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [date, setDate] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const year = new Date(date).getFullYear()
    onAddBook({ bookTitle, author, year, isCompleted })
    setBookTitle("")
    setAuthor("")
    setDate("")
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
          <label htmlFor="inputBookDate" className="whitespace-nowrap min-w-[60px]">Date</label>
          <input id="inputBookDate" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
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
        <button type="submit" className="flex items-center justify-center gap-2 px-4 py-3 md:py-4 lg:py-5 bg-[#6495ed] hover:bg-blue-600 text-white rounded-md w-full transition-colors">
          <>
          <Plus className="mr-2 h-6 w-auto"/>
          Add Book to  {isCompleted ? "Read Shelf" : "Unread Shelf"}
          </>        
        </button>
      </form>
    </section>
  )
}

export default BookForm

