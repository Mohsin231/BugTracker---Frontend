import React from 'react';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './dash.css'


function Dashboard() {

    const [bugs,setBugs] = useState([])
    
    useEffect(() => {
        const url = 'https://bug-tracker-apii.herokuapp.com/bugs/'
        fetch(url)
        .then(res => res.json())
        .then(res => setBugs(res))
        .catch(error => console.log("error"))

    }, [])

    let lowBugs = bugs.filter(bug => bug.priority==="low")
    let low = lowBugs.length

    let moderateBugs = bugs.filter(bug => bug.priority==="moderate")
    let moderate = moderateBugs.length

    let highBugs = bugs.filter(bug => bug.priority==="high")
    let high = highBugs.length





    return (
        <div className="cards">
        <div className="dashCard">
           <h1>High</h1> 
           <h1>{high}</h1> 
        </div>

        <div className="dashCard">
            <h1>Moderate</h1> 
            <h1>{moderate}</h1> 
        </div>

        <div className="dashCard">
            <h1>Low</h1> 
           <h1>{low}</h1> 
        </div>
           
           </div>

    );
}


export default Dashboard;