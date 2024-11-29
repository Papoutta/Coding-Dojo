import React from 'react'
import Book from './Book'

const BookList = ({books}) => {
  return (
    <div>
        <h1>Book List :</h1>
        
        <table className='table'>
            <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {books.map((b,index)=><Book key={index} book={b}/>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default BookList