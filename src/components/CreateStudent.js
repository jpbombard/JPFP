import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createStudent } from '../reducers/students';

const CreateStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            firstName,
            lastName,
            email
        }
        
        dispatch(createStudent(newStudent));

        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> First name
                    <input 
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
                <label> Last name
                    <input 
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
                <label> E-Mail
                    <input 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <button disabled = {firstName === '' || lastName === '' || email === ''}type='submit'>Add New Student</button>

            </form>
        </div>
    )
}

export default CreateStudent;