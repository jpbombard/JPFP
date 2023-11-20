import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCampus } from '../reducers/singleCampus';
import { useParams } from 'react-router-dom';
import UpdateCampus from './UpdateCampus';


const SingleCampus = () => {
    const campus = useSelector(state => state.singleCampus)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleCampus({ id }))
    }, [dispatch])
    
    return (
        <div>
            <h1>{campus.name}</h1>
            <img src= {campus.imageUrl} />
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <UpdateCampus />
        </div>
    )
}

export default SingleCampus;