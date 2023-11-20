import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSingleStudent } from '../reducers/singleStudent'
import { useParams } from 'react-router-dom'
import { updateSingleCampus } from '../reducers/singleCampus'

const UpdateCampus = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const { id } = useParams()

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateCampus = {
            id,
            name,
            address, 
            description
        }
        
        dispatch(updateSingleCampus(updateCampus))

        setName('')
        setAddress('')
        setDescription('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>  Name
                    <input 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label> Address
                    <input 
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    />
                </label>
                <label> Description
                    <input 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
                <button type='submit'>Update Information</button>
            </form>
        </div>
    )
}

export default UpdateCampus;