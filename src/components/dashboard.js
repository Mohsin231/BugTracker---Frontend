import React from 'react';
import {useState, useEffect} from 'react'

function Dashboard() {

    const [bugs,setBugs] = useState([])
    
    useEffect(() => {
        const url = 'https://bug-tracker-apii.herokuapp.com/bugs/'
        fetch(url)
        .then(res => res.json())
        .then(res => setBugs(res))
        .catch(error => console.log("error"))

    }, [])

    return (
        
        <div>
            {bugs.map(bug => {
                return(
                    <div key = {bug.name}>
                    <h2>{bug.name}</h2>
                    </div>
                )
            })

            }
            
        </div>
    );
}

export default Dashboard;