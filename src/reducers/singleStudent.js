import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {};

export const fetchSingleStudent = createAsyncThunk('singleStudent', async ({ id })=>{
    try {
        const {data} = await axios.get(`/api/students/${id}`);
        return data;
    } catch (error){
        console.log(error)
    }
})

export const updateSingleStudent = createAsyncThunk('updateSingleStudent', async (student) =>{
    try {
        console.log(student)
        const {data} = await axios.put(`/api/students/${student.id}`, student)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

const singleStudentSlice = createSlice({
    name: 'singleStudent',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSingleStudent.fulfilled, (state, action)=>{
            return action.payload
        })
        builder.addCase(updateSingleStudent.fulfilled, (state, action) => {
            return action.payload
        })
    }
})



export default singleStudentSlice.reducer;