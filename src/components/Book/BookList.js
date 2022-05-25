import React from 'react'

function BookList({ isLoading, books,isLoggedIn, dispatch, deleteBook,getBookId }) {
    
    
    const bookList = books?.map((item) => (
        <li className="item d-flex justify-content-between border p-2 border-2 rounded-1" key={item.id}>
            <h4>{item.title}</h4>
            <div>
                <button className='btn btn-primary' onClick={()=> getBookId(item.id)} >Read</button>
                <button className='btn btn-danger ms-2' disabled={!isLoggedIn} onClick={()=> dispatch(deleteBook(item.id))}>Delete</button>
            </div>
        </li>
    ))

    return (
        <div className='BookList'>
            <h2>BookList</h2>
            {
                isLoading ? (
                    "Loading ..."
                ) : (
                    <ul className="books list-unstyled">
                        {bookList}
                    </ul>
                )
            }

        </div>
    )
}

export default BookList