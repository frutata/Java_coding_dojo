import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllPets = (props) => {

    const [petList, setPetList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                console.log("Response:", res);
                setPetList(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [])

    return (
        <>
            <div className="mb">
                <Link to={"/new"}>Add a Pet</Link>
            </div>
            {
                petList.map((petObj, idx) => {
                    return (
                        <div className='outline padding' key={idx}>
                            <h3><Link to={`/pet/${petObj._id}`}>{petObj.name}</Link></h3>
                            <p>Type: {petObj.type}</p>
                            <p><Link to={`/pet/edit/${petObj._id}`}>Edit</Link></p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllPets;