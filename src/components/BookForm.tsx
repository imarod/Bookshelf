import type React from "react"
import { useState } from "react"

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
    <section className="input_section">
      <h2>Masukkan Buku Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="inputBookTitle">Judul</label>
          <input
            id="inputBookTitle"
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="inputBookAuthor">Penulis</label>
          <input id="inputBookAuthor" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="input">
          <label htmlFor="inputBookYear">Tahun</label>
          <input id="inputBookYear" type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div className="input_inline">
          <label htmlFor="inputBookIsComplete">Selesai dibaca</label>
          <input
            id="inputBookIsComplete"
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>
        <button type="submit">
          Masukkan Buku ke rak <span>{isCompleted ? "Selesai" : "Belum selesai"} dibaca</span>
        </button>
      </form>
    </section>
  )
}

export default BookForm

