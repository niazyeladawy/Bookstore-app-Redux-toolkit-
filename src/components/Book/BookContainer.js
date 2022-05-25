import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getBooks } from '../../store/bookSilce';
import './Book.css'
import BookInfo from './BookInfo'
import BookList from './BookList';


function BookContainer() {
    const [selectedBook, setSelectedBook] = useState(null);
    const { isLoading, books } = useSelector(state => state.books);
    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch])

    const getBookId = (id) => {
        const selectedBook = books.find((item) => item.id === id);
        setSelectedBook((prev)=> {return {...prev,...selectedBook}});
    }

    return (
        <>
            <hr className='my-5' />
            <div className="row">
                <div className="col">
                    <BookList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} deleteBook={deleteBook} dispatch={dispatch} getBookId={getBookId} />
                </div>
                <div className="col side-line">
                    <BookInfo selectedBook={selectedBook} />
                </div>
            </div>
        </>
    )
}

export default BookContainer