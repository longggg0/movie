import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieAction";
// import { counterSlice } from "../counter/counterSlice";

const initialState = {
    data: {},
    status:"",
    error:{},
}

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers:{},
    extraReducers(builder){
        builder 
            .addCase(
                fetchMovies.pending, (state, action) => {
                 //TODO   
                 state.status = 'LOADING....'
                }
            )
            .addCase(
                fetchMovies.fulfilled, (state, action) => {
                 //TODO   
                 state.status = 'SUCCESS.'
                 state.data = action.payload    //PAYLOAD FROM API
                }
            )
            .addCase(
                fetchMovies.rejected, (state, action) => {
                 //TODO   
                 state.status = 'FAILED...'
                 console.log(action.error)
                 state.error = action.error
                }
            )
    }
})
export default movieSlice.reducer