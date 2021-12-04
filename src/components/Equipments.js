import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Equipments = () => {
    const [itemId, setItemId] = useState(Math.floor(Math.random() * 10000) + 1)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deskId, setDeskId] = useState('')
    const onClick = () => {
        console.log(this.name)
        console.log(this.description)
        console.log(this.deskId)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!deskId){
            alert("Enter Desk Id")
        }
        const data = {itemId,name,description,deskId}
        fetch('http://localhost:8080/openofficeapi/rent',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)

        }).then(() => {
            console.log("Equipment request submitted")
        })
        console.log(data)
    }

    const addEquipment = async() => {
        const res = await fetch('http://localhost:8080/openofficeapi/rent')
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className="create">
            <h2>Order Equipment Form</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Equipment Name: </label>
                    <select value={name} onChange={(e) => setName(e.target.value)}>
                        <option value="monitor">Monitor</option>
                        <option value="mouse">Mouse</option>
                        <option value="keyboard">Keyboard</option>
                    </select>
                </div>
                <div>
                    <label>Equipment Description: </label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Desk Id: </label>
                    <input type="text" value={deskId} onChange={(e) => setDeskId(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Order Equipment"></input>
                </div>
                <p>{name}</p>
            
            </form>
        </div>
    )
}

export default Equipments
