import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, fetchStudents } from '../reducers/students';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';

const Student = () => {
    const students = useSelector(state => state.students)
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(fetchStudents())
    }, [dispatch])
    
    return (
        <div>
            <h1>Students</h1>
            <CreateStudent />
            <ul>
                {students.map((student) => (
                    <div key={student.id}>
                        <Link to={`./${student.id}`}>
                            <li>{`${student.firstName} ${student.lastName}`}</li>
                        </Link>
                        <img src={student.imageUrl} className = 'pic'/>
                        <button onClick={()=> dispatch(deleteStudent(student.id))}>
                            Delete Student
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Student;