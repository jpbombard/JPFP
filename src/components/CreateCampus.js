import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCampus } from '../reducers/campuses';

const CreateCampus = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCampus = {
            name,
            address,
        }
        
        dispatch(createCampus(newCampus));

        setName('');
        setAddress('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Campus name
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
                <button disabled = {name === '' || address === '' }type='submit'>Add New Campus</button>

            </form>
        </div>
    )
}

export default CreateCampus;