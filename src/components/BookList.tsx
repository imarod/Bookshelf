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
    <section className="book_shelf">
      <h2>{title}</h2>
      <div className="book_list">
        {books.map((book) => (
          <article key={book.id} className="book_item">
            <h3>{book.bookTitle}</h3>
            <p>Penulis: {book.author}</p>
            <p>Tahun: {book.year}</p>
            <div className="action">
              <button className="green" onClick={() => onToggleCompletion(book.id)}>
                {book.isCompleted ? "Belum selesai di Baca" : "Selesai dibaca"}
              </button>
              <button className="red" onClick={() => onRemove(book.id)}>
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

