import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = [];

export const fetchStudents = createAsyncThunk('students', async ()=>{
    try {
        const {data} = await axios.get('/api/students');
        return data;
    } catch (error){
        console.log(error)
    }
})

export const createStudent = createAsyncThunk('createStudent', async (student)=>{
    try {
        const {data} = await axios.post('/api/students', {student});
        return data;
    } catch (error){
        console.log(error)
    }
})


export const deleteStudent = createAsyncThunk('deleteStudent', async (id) =>{
    try {
        const {data} = await axios.delete(`/api/students/${id}`)
        return data;
    } catch (error) {
        console.log(error)
    }
})


const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchStudents.fulfilled, (state, action)=>{
            return action.payload
        })
        builder.addCase(createStudent.fulfilled, (state, action)=>{
            state.push(action.payload)
        })
        builder.addCase(deleteStudent.fulfilled, (state,action)=>{
            return state.filter(student => student.id !== action.payload.id)
        })
    }
})



export default studentSlice.reducer;