import React, { useState, useEffect } from "react"
import BookForm from "./components/BookForm"
import BookList from "./components/BookList"
import SearchForm from "./components/SearchForm"
import SearchFeedback from "./components/SearchFeedback"
import { Bookmark, BookOpen } from "lucide-react"

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

  const filteredBooks = books.filter((book) => {
    if (searchTerm === "") return true
    const searchTermLower = searchTerm.toLowerCase()
    return (
      book.bookTitle.toLowerCase().includes(searchTermLower) ||
      book.author.toLowerCase().includes(searchTermLower) ||
      book.year.toString().includes(searchTermLower)
    )
  })

  const totalRead = filteredBooks.filter((book) => book.isCompleted).length
  const totalUnread = filteredBooks.filter((book) => !book.isCompleted).length

  return (
    <div className="app">
      <main className="grid gap-8">      
        <SearchForm onSearch={setSearchTerm} />  
        <SearchFeedback searchTerm={searchTerm} resultCount={filteredBooks.length} />     
        <hr className="border-gray-300" />
        <BookForm onAddBook={addBook} />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <BookList
            title={
              <div className="flex items-center justify-center gap-4">
                <Bookmark className="h-8 w-auto " />
                <span>Unread ({totalUnread})</span>
              </div>
            }
            books={filteredBooks.filter((book) => !book.isCompleted)}
            onToggleCompletion={toggleBookCompletion}
            onRemove={removeBook}
          />
          <BookList
            title={
              <div className="flex items-center justify-center gap-4">
                <BookOpen className="h-8 w-auto inline text-blue-500" />
                <span className="text-blue-500">Read ({totalRead})</span>
              </div>
            }
            books={filteredBooks.filter((book) => book.isCompleted)}
            onToggleCompletion={toggleBookCompletion}
            onRemove={removeBook}
          />
        </div>
        <br />
      </main>
    </div>
  )
}

export default App

