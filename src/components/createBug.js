import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './createBug.css'

function CreateBug(props) {

    const [bugs,setBugs] = useState([])
    
    useEffect(() => {
        const url = 'https://bug-tracker-apii.herokuapp.com/bugs/'
        fetch(url)
        .then(res => res.json())
        .then(res => setBugs(res))
        .catch(error => console.log("error"))

}, [])

    const [bug, setBug] = useState({
        name : "",
        priority : "",
        details : "",
        steps : "",
        system : "",
        assignee : "",
        resolved : false,
    
    })

    function insertBugAPI(body){
        
        const url = 'https://bug-tracker-apii.herokuapp.com/bugs/'
        let headers = {
            'Content-Type': 'Application/JSON'
        }
        try {
            let test = axios.post(url, bug, {headers:headers})
            console.log(test)
            return test
        }
        catch (error){
            console.log(error)
        }
        

       


        

    }

    const insertBug = (event) => {
        setBug({...bug, [event.target.id]: event.target.value})
        
    }



    return (
    <div>
    <form>
    <ul>
    <li>
        <label>Name:</label>
        <input id="name" onChange={insertBug}/>
    </li>
    <li>
        <label>Priority:</label>
        <input id="priority" onChange={insertBug}/>
    </li>
    <li>
        <label>Details:</label>
        <textarea id="details" onChange={insertBug}></textarea>
    </li>
    <li>
        <label>Steps:</label>
        <textarea id="steps" onChange={insertBug}></textarea>
    </li>
    <li>
        <label>System:</label>
        <input id="system" onChange={insertBug}></input>
    </li>
    <li>
        <label>Assignee:</label>
        <input id="assignee" onChange={insertBug}></input>
    </li>
    <li>
        <label>Status:</label>
        <input id="resolved" onChange={insertBug}></input>
    </li>
    </ul>

    <button onClick={insertBugAPI}> Post </button>
    </form>
        </div>
    );
}

export default CreateBug;