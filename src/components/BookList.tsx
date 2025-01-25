import React from "react"

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
    <section className="book_shelf flex-1 border-1 bg-[#E0D5FE]  ">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="book_list grid gap-4">
        {books.map((book) => (
          <article key={book.id} className="book_item rounded-lg ">
            <h3 className="font-medium text-lg mb-2">{book.bookTitle}</h3>
            <p className="text-gray-600">Penulis: {book.author}</p>
            <p className="text-gray-600 mb-4">Tahun: {book.year}</p>
            <div className="action flex gap-2">
              <button
                className="green px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
                onClick={() => onToggleCompletion(book.id)}
              >
                {book.isCompleted ? "Belum selesai di Baca" : "Selesai dibaca"}
              </button>
              <button
                className="red px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                onClick={() => onRemove(book.id)}
              >
                Hapus buku
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BookList

