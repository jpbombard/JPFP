import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = [];

export const fetchCampuses = createAsyncThunk('campuses', async ()=>{
    try {
        const {data} = await axios.get('/api/campuses');
        return data;
    } catch (error){
        console.log(error)
    }
})

export const createCampus = createAsyncThunk('createCampus', async (campus)=>{
    try {
        const {data} = await axios.post('/api/campuses', {campus})
        return data;
    } catch (error) {
        console.log(error)
    }
})

export const deleteCampus = createAsyncThunk('deleteCampus', async (id) =>{
    try {
        const {data} = await axios.delete(`/api/campuses/${id}`)
        return data;
    } catch (error) {
        console.log(error)
    }
})



const campusSlice = createSlice({
    name: 'campuses',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCampuses.fulfilled, (state, action)=>{
            return action.payload
        })
        builder.addCase(createCampus.fulfilled, (state, action)=>{
            state.push(action.payload)
        })
        builder.addCase(deleteCampus.fulfilled, (state,action)=>{
            return state.filter(campus => campus.id !== action.payload.id)
        })
    }
    
})




export default campusSlice.reducer;