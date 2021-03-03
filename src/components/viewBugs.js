import React from 'react';
import {useState, useEffect} from 'react'
import Modal from 'react-modal'
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


const [modalIsOpen, setModalIsOpen] = useState(false)

return (//function return 
    <>
    {/* {bugs.map(bug => {
        if(bug.resolved===true){
            bug.resolved = "Solved!"
        } else {bug.resolved = "Pending"}

        return(
            <div className="card1" onClick = {() => setModalIsOpen(true)}>
            <h2 className='name'>Name: {bug.name}</h2>
            <h2 className='priority'>Priority: {bug.priority}</h2>
            <h2 className='resolved'>Status: {bug.resolved}</h2>
            </div>
        )
    })} */}
    
    
    <div className = 'container'>

        {bugs.map(bug => {
            if(bug.resolved===true){
                bug.resolved = "Solved!"
            } else {bug.resolved = "Pending"}

            return(
                
                <div className="card">
                <h2 className='name'>Name: {bug.name}</h2>
                <h2 className='priority'>Priority: {bug.priority}</h2>
                <h2 className='details'>Details: {bug.details}</h2>
                <h2 className='steps'>Steps: {bug.steps}</h2>
                <h2 className='system'>System: {bug.operating_system}</h2>
                <h2 className='asignee'>Assignee: {bug.assignee}</h2>
                <h2 className='resolved'>Status: {bug.resolved}</h2>
                </div>
            )
        })

        }
       
        
    </div>

    </>
)

}

export default ViewBugs;    




