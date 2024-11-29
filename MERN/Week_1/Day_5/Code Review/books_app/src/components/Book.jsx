import React from 'react'

const Book = ({book}) => {
  return (
    <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td style={{textDecoration : book.read ? "line-through" : "None"}}>{book.read ? "Read" : "Unread"}</td>
    </tr>
  )
}

export default Book