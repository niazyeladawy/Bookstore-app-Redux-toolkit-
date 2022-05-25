import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertBook } from '../store/bookSilce'

function AddForm() {
    
    const {isLoggedIn} = useSelector(state => state.auth);

    const title = useRef(null);
    const price = useRef(null);
    const description = useRef(null);

    const dispatch  = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            title:title.current.value,
            price:price.current.value,
            description:description.current.value
        }
        dispatch(insertBook(data));
        clearInputs();
    }

    const clearInputs = ()=>{
        title.current.value = null;
        price.current.value = null;
        description.current.value = null;
    }

    return (
        <div className='add__form w-50 m-auto mt-3'>
            <h2>Insert book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="inputTitle" aria-describedby="emailHelp" ref={title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputPrice" ref={price} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="inputDescription" rows="3" ref={description} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={!isLoggedIn}>Submit</button>
            </form>

        </div>
    )
}

export default AddForm