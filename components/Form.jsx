import {React,useState} from 'react';
import axios from 'axios';


function Form(){

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        //api post call
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="First Name" value={firstName} onChange={handleFirstName} placeholder="Enter The First Name" />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="Last Name" value={lastName} onChange={handleLastName} placeholder="Enter The Last Name" />
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form