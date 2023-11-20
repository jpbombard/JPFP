import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent } from "../reducers/singleStudent";
import { useParams } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";



const SingleStudent = () => {
    const student = useSelector(state => state.singleStudent)
    const dispatch = useDispatch();
    const { id } = useParams()
    

    useEffect(() => {
        dispatch(fetchSingleStudent({ id }))
    }, [dispatch])
    
    return (
        <div>
            <h1>{`${student.firstName} ${student.lastName}`}</h1>
            <img src= {student.imageUrl} />
            <p>{student.email}</p>
            <p>{student.gpa}</p>
            <p></p>
            <UpdateStudent />
        </div>
    )
}

export default SingleStudent;

