import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logInsert } from "./reportSlice";

export const getBooks = createAsyncThunk("book/getBooks", async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const { data } = await axios.get("http://localhost:3005/books");
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const insertBook = createAsyncThunk("book/insertBook", async (bookData, thunkApi) => {
    const { rejectWithValue, getState,dispatch } = thunkApi;
    try {
        bookData.userName = getState().auth.name;
        const { data } = await axios.post("http://localhost:3005/books", bookData);
        dispatch(logInsert({name:"insert book" , status:"successs"}));
        return data;

    } catch (error) {
        dispatch(logInsert({name:"insert book" , status:"failed"}));
        return rejectWithValue(error.message)
    }
})

export const deleteBook = createAsyncThunk("book/deleteBook", async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        await axios.delete(`http://localhost:3005/books/${id}`);
        return id;

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// export const getBook = createAsyncThunk("book/getBook", async (id, thunkApi) => {
//     const { rejectWithValue } = thunkApi;
//     try {
//         const{data}= await axios.get(`http://localhost:3005/books/${id}`);
//         return data;

//     } catch (error) {
//         return rejectWithValue(error.message)
//     }
// })

const bookSlice = createSlice({
    name: "book",
    initialState: { books: null, isLoading: false, error: null,bookInfo:null },
    extraReducers: {
        //get books
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;

        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        },
        //insert book
        [insertBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload)

        },
        [insertBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;

        },
        //delete book
        [deleteBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = state.books.filter((el) => el.id !== action.payload)
        },
        [deleteBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //get book
        // [getBook.pending]: (state, action) => {
        //     state.isLoading = true;
        //     state.error = null;
        // },
        // [getBook.fulfilled]: (state, action) => {
        //     state.isLoading = false;
        //     state.bookInfo = action.payload;
        // },
        // [getBook.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    }
});

export default bookSlice.reducer;