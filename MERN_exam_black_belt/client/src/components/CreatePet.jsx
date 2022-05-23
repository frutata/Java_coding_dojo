import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const CreatePet = () => {

    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    //state variable to store validation errors inside of
    let [ourErrors, setOurErros] = useState({});

    //initialize history so we can redirect using history.push
    const history = useHistory();

    const submitForm = (e)=>{
        //prevents page from refreshing everytime we submit
        e.preventDefault();

        let formInfo = {name, type, description, skill1, skill2, skill3};
        console.log("Form info -------------", formInfo);

        axios.post("http://localhost:8000/api/pet", formInfo)
            .then(res=>{
                console.log("Result:",  res);
                
                if(res.data.error){
                    //if there are validation errors we need to save them
                    setOurErros(res.data.error.errors);
                }
                else{
                    history.push("/");
                }
            })
            .catch(err=>{
                console.log("Error:", err);
            })
    }

    return (
        <>
            <Link to={"/"}>Home</Link>
            <h1>Add a Pet</h1>
            <div className="formOutline mt">
                <form onSubmit={submitForm}>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <p>{ourErrors.name?.message}</p>
                        <div className="left">
                            <input type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="type">Type:</label>
                        </div>
                        <p>{ourErrors.type?.message}</p>
                        <div className="left">
                            <input type="text" id='type' value={type} onChange={(e)=> setType(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="description">Description:</label>
                        </div>
                        <p>{ourErrors.description?.message}</p>
                        <div className="left">
                            <input type="text" id='description' value={description} onChange={(e)=> setDescription(e.target.value)}/>
                        </div>
                    </div>
                    <h2>Skills (Optional):</h2>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="skill1">Skill 1:</label>
                        </div>
                        <p>{ourErrors.skill1?.message}</p>
                        <div className="left">
                            <input type="text" id='skill1' value={skill1} onChange={(e)=> setSkill1(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="skill2">Skill 2:</label>
                        </div>
                        <p>{ourErrors.skill2?.message}</p>
                        <div className="left">
                            <input type="text" id='skill2' value={skill2} onChange={(e)=> setSkill2(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="skill3">Skill 3:</label>
                        </div>
                        <p>{ourErrors.skill3?.message}</p>
                        <div className="left">
                            <input type="text" id='skill3' value={skill3} onChange={(e)=> setSkill3(e.target.value)}/>
                        </div>
                    </div>
                    <button className='mb'>Add Pet</button>
                </form>
            </div>
        </>
    )
}

export default CreatePet;