import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const OnePet = () => {

    const { _id } = useParams();

    const history = useHistory();

    //state variable to store the one user we get back from the api call
    const [petInfo, setPetInfo] = useState({});

    let [count, setCount] = useState(0);

    const likePet =()=>{
        setCount(+1);
        console.log(count);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log("Response:", res);
                setPetInfo(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [])

    //this function will allow the button to request to delete the user from the backend based on the id
    const deletePet = ()=>{
        
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res=>{
                console.log("Response:", res);
                history.push("/");
            })
            .catch(err=>{
                console.log("Error:", err);
            })
    }

    return (
        <>
            <div className="outline">
                <Link to={"/"}>Home</Link>
                <h1>Details about: {petInfo.name}</h1>
                <p>Type: {petInfo.type}</p>
                <p>Description: {petInfo.description}</p>
                <hr/>
                <p>Skills (Optional):</p>
                <p>{petInfo.skill1}</p>
                <p>{petInfo.skill2}</p>
                <p>{petInfo.skill3}</p>
                <hr/>
                <button onClick={likePet}>Like {petInfo.name}</button>
                <p>{count} like(s)</p>
                <hr/>
                <button className='mb' onClick={deletePet}>Adopt {petInfo.name}</button>
            </div>
        </>
    )
}

export default OnePet;