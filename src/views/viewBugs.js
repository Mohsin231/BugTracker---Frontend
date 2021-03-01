import React from 'react';
import {useState, useEffect} from 'react'
import './viewBugs.css'


function ViewBugs(props) {
    const [bugs,setBugs] = useState([])
    
    useEffect(() => {
        const url = 'https://bug-tracker-apii.herokuapp.com/bugs/'
        fetch(url)
        .then(res => res.json())
        .then(res => setBugs(res))
        .catch(error => console.log("error"))

    }, [])

    return (
        
        <div className = 'container'>
            {bugs.map(bug => {
                return(
                    <div key = {bug.name} className="card">
                    <h2 className='name'>{bug.name}</h2>
                    <h2 className='priority'>{bug.priority}</h2>
                    <h2 className='details'>{bug.details}</h2>
                    <h2 className='steps'>{bug.steps}</h2>
                    <h2 className='system'>{bug.operating_system}</h2>
                    <h2 className='asignee'>{bug.assignee}</h2>
                    <h2 className='resolved'>{bug.resolved}</h2>
                    </div>
                )
            })

            }
            
        </div>
    );
}

export default ViewBugs;    