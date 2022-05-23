import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const EditPet = () => {

    const { _id } = useParams();

    //state variable to store the one author we get back from the api call
    const [petInfo, setPetInfo] = useState({});

    //initialize history so we can redirect using history.push
    const history = useHistory();

    //state variable to store validation errors inside of
    let [ourErrors, setOurErros] = useState({});

    //this axios call helps us prepopulate the form in addition to editing information
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

    const changeHandler = (e) => {
        // console.log(petInfo);
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pet/${_id}`, petInfo)
            .then(res => {
                console.log("Response:", res);

                if (res.data.error) {
                    //if there are validation errors we need to save them
                    setOurErros(res.data.error.errors);
                }
                else {
                    history.push("/");
                }
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    return (
        <>

            <div className='formOutline'>
            <Link to={"/"}>Home</Link>
            <form onSubmit={submitHandler}>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <p>{ourErrors.name?.message}</p>
                        <div className="left">
                            <input type="text" id='name' value={petInfo.name} name='name' onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="type">Type:</label>
                        </div>
                        <p>{ourErrors.type?.message}</p>
                        <div className="left">
                            <input type="text" id='type' value={petInfo.type} name='type' onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="description">Description:</label>
                        </div>
                        <p>{ourErrors.description?.message}</p>
                        <div className="left">
                            <input type="text" id='description' value={petInfo.description} name='description' onChange={changeHandler}/>
                        </div>
                    </div>
                    <h2>Skills (Optional):</h2>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="skill1">Skill 1:</label>
                        </div>
                        <p>{ourErrors.skill1?.message}</p>
                        <div className="left">
                            <input type="text" id='skill1' value={petInfo.skill1} name='skill1' onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="skill2">Skill 2:</label>
                        </div>
                        <p>{ourErrors.skill2?.message}</p>
                        <div className="left">
                            <input type="text" id='skill2' value={petInfo.skill2} name='skill2' onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="skill3">Skill 3:</label>
                        </div>
                        <p>{ourErrors.skill3?.message}</p>
                        <div className="left">
                            <input type="text" id='skill3' value={petInfo.skill3} name='skill3' onChange={changeHandler}/>
                        </div>
                    </div>
                    <button className='mb'>Update Pet</button>
                </form>
            </div>

        </>
    )
}

export default EditPet;