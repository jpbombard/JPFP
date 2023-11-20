import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCampus, fetchCampuses } from '../reducers/campuses'
import { Link } from 'react-router-dom';
import CreateCampus from './CreateCampus';

const Campus = () => {
    const campuses = useSelector(state => state.campuses)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCampuses())
    }, [dispatch])

    return (
        <div>
            <h1>Campuses</h1>
            <CreateCampus />
            <ul>
                {campuses.map((campus) => (
                    <div key={campus.id}>
                        <Link to={`./${campus.id}`}>
                            <li>{campus.name}</li>
                        </Link>
                        <img src={campus.imageUrl} className='pic'/>
                        <button onClick={()=> dispatch(deleteCampus(campus.id))}>
                            Delete Campus
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Campus;