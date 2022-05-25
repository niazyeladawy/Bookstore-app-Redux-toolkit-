import React from 'react'

function BookInfo({ selectedBook }) {
    return (
        <div className='BookInfo'>
            <h2>Book Details</h2>
            {
                selectedBook ? (<div className='book__details border p-2 border-2 rounded-1 bg-light'>
                    <p>Title: {selectedBook?.title}</p>
                    <p>Price: {selectedBook?.price}</p>
                    <p>Description: {selectedBook?.description}</p>
                </div>) :<div className='book__details border p-2 border-2 rounded-1 bg-light'>
                    <p>no book selected</p>
                    
                </div>
            }

        </div>
    )
}

export default BookInfo