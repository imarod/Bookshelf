import React, { useState, useEffect } from "react"
import BookForm from "./components/BookForm"
import BookList from "./components/BookList"
import SearchForm from "./components/SearchForm"

import "./style.css"

interface Book {
  id: number
  bookTitle: string
  author: string
  year: number
  isCompleted: boolean
}

const STORAGE_KEY = "BOOKSHELF_APPS"

function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    loadDataFromStorage()
  }, [])

  useEffect(() => {
    saveData()
  }, [books])

  const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY)
    if (serializedData) {
      const data = JSON.parse(serializedData)
      setBooks(data)
    }
  }

  const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  }

  const addBook = (newBook: Omit<Book, "id">) => {
    const book: Book = {
      ...newBook,
      id: +new Date(),
    }
    setBooks([...books, book])
  }

  const toggleBookCompletion = (id: number) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, isCompleted: !book.isCompleted } : book)))
  }

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const filteredBooks = books.filter((book) => book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">

      <main>

        <div className="top-app flex border-1 border-black-500 ">
          <h1 className="flex text-3xl font-bold text-red-900" >Bookshelf</h1>
          <SearchForm onSearch={setSearchTerm} />
        </div>

        <BookForm onAddBook={addBook} />

        <div className="flex gap-8">
          <BookList
            title="Belum selesai dibaca"
            books={filteredBooks.filter((book) => !book.isCompleted)}
            onToggleCompletion={toggleBookCompletion}
            onRemove={removeBook}
          />
          <BookList
            title="Selesai dibaca"
            books={filteredBooks.filter((book) => book.isCompleted)}
            onToggleCompletion={toggleBookCompletion}
            onRemove={removeBook}
          />
        </div>


      </main>
    </div>
  )
}

export default App

