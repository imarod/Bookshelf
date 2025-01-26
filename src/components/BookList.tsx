import React from "react"
import { BookOpen, Trash2, Bookmark } from "lucide-react"

interface Book {
  id: number
  bookTitle: string
  author: string
  year: number
  isCompleted: boolean
}

interface BookListProps {
  title: string
  books: Book[]
  onToggleCompletion: (id: number) => void
  onRemove: (id: number) => void
}

function BookList({ title, books, onToggleCompletion, onRemove }: BookListProps) {
  return (


    <section className="book_shelf rounded-lg border-1 border-[#d5cfcf] bg-gray-200 ">
      <h1 className="text-xl font-bold ">{title}</h1>
      <div className="book_list grid gap-4 ">
        {books.map((book) => (
          <article key={book.id} className="book_item rounded-lg overflow-hidden" >
            <h3 className="font-bold text-lg mb-2  break-words">{book.bookTitle}</h3>
            <p className="text-gray-600  break-words">Author: {book.author}</p>
            <p className="text-gray-600 mb-4  break-words">Year: {book.year}</p>
            <div className="action flex gap-2">
              <button
                className="green px-3 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 text-base "
                onClick={() => onToggleCompletion(book.id)}
              >
                {book.isCompleted ? (
                  <>
                    <Bookmark className="mr-2 h-6 w-auto " />
                    <span className="hidden md:inline md:text-sm">Mark as Read</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="mr-2 h-6 w-auto " />
                    <span className="hidden md:inline md:text-sm">Mark as Unread</span>
                  </>
                )}
              </button>
              <button
                className="red px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 text-base"
                onClick={() => onRemove(book.id)}
              >
                <Trash2 className="mr-2 h-4 w-4 " />
                <span className="hidden md:inline md:text-sm">Delete</span>
              </button>

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BookList

