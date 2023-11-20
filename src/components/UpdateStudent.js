import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSingleStudent } from '../reducers/singleStudent'
import { useParams } from 'react-router-dom'

const UpdateStudent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gpa, setGpa] = useState()
    const [imageUrl, setImageUrl] = useState('')
    const dispatch = useDispatch()
    const { id } = useParams()

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateStudent = {
            id,
            firstName,
            lastName, 
            email,
            gpa,
            imageUrl
        }
        
        dispatch(updateSingleStudent(updateStudent))

        setFirstName('')
        setLastName('')
        setEmail('')
        setGpa('')
        setImageUrl('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> First Name
                    <input 
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
                <label> Last Name
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
                <label> Grade Point Average
                    <input 
                    value={gpa}
                    onChange={(event) => setGpa(event.target.value)}
                    />
                </label>
                <label> Profile Picture
                    <input 
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                    />
                </label>
                <button type='submit'>Update Information</button>
            </form>
        </div>
    )
}

export default UpdateStudent;