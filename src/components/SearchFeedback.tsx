import React from 'react'

interface SearchFeedbackProps {
    searchTerm: string
    resultCount: number
}

const SearchFeedback: React.FC<SearchFeedbackProps> = ({
    searchTerm, resultCount }) => {
    if (!searchTerm) return null
    return (
        <div className="my-4 p-4 bg-gray-100 rounded-md">
            {resultCount > 0 ? (
                <h4 className="text-green-600">
                    Found {resultCount} book{resultCount !== 1 ? "s" : ""} matching "{searchTerm}"
                </h4>
            ) : (
                <h4 className="text-red-600">No books found matching "{searchTerm}"</h4>
            )}
        </div>
    )
}



export default SearchFeedback
