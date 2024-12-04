import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Display = () => {
    const { cat , id } = useParams();
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${cat}/${id}/`)
            .then(response => {
                console.log(response.data)
                setSelected(response.data)
            })
            .catch(error => {
                navigate('/error')
            });
        }, [cat,id]);

    return (
    <div>

        {(selected)&& <div>
        <h1>{selected.name}</h1>
        {(cat==="people")&&<div><h5>Height : {selected.height}</h5><h5>Mass : {selected.mass}</h5><h5>Eyes Color : {selected.eye_color}</h5><h5>Hair Color : {selected.hair_color}</h5></div>}
        {(cat==="planets")&&<div><h5>Climate : {selected.climate}</h5><h5>Terrain : {selected.terrain}</h5><h5>Surface Water : {selected.surface_water}</h5><h5>Population : {selected.population}</h5></div>} </div>}

    </div>
    )
}

export default Display