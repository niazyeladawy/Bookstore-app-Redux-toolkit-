const { createSlice } = require("@reduxjs/toolkit");

const reportSlice = createSlice({
    name:'report',
    initialState:{logs :[]},
    reducers:{
        logInsert:(state,action)=>{
            state.logs.push(action.payload)
        }
    }
});

export default reportSlice.reducer;

export const {logInsert} = reportSlice.actions