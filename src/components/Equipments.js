import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Equipments = () => {
    const [id, setId] = useState(Math.floor(Math.random() * 10000) + 1)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deskId, setDeskId] = useState('')
    const onClick = () => {
        console.log(this.name)
        console.log(this.description)
        console.log(this.deskId)
    }

    const onSubmit = (e) => {
        if(!deskId){
            alert("Enter Desk Id")
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Equipment Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Equipment Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div>
                    <label>Desk Id</label>
                    <input type="text" value={deskId} onChange={(e) => setDeskId(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Order Equipment"></input>
                </div>
            
            </form>
        </div>
    )
}

export default Equipments
