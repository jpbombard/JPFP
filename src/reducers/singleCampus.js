import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleCampus = createAsyncThunk('singleCampus', async ({ id })=>{
    try {
        const {data} = await axios.get(`/api/campuses/${id}`);
        return data;
    } catch (error){
        console.log(error)
    }
})

export const updateSingleCampus = createAsyncThunk('updateSingleCampus', async (campus) =>{
    try {
        const {data} = await axios.put(`/api/campuses/${campus.id}`, campus)
        return data
    } catch (error) {
        console.log(error)
    }
})

const singleCampusSlice = createSlice({
    name: 'singleCampus',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampus.fulfilled, (state, action)=>{
            return action.payload
        })
        builder.addCase(updateSingleCampus.fulfilled, (state, action) => {
            return action.payload
        })
    }
})



export default singleCampusSlice.reducer;