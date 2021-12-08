import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Equipments = () => {
    const [itemId, setItemId] = useState(Math.floor(Math.random() * 10000) + 1)
    const [name, setName] = useState('')
    const [purpose, setPurpose] = useState('')
    const [deskId, setDeskId] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!deskId){
            alert("Enter Desk Id")
        }
        setIsPending(true)
        const data = {itemId,name,purpose,deskId}
        fetch('http://localhost:8080/openofficeapi/rent',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)

        }).then(() => {
            console.log("Equipment request submitted")
            setMessage('Equipment request submitted succussfully!!!')
            setIsPending(false)
        })
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
                        <option value="dockstation">Dock Station</option>
                    </select>
                </div>
                <div>
                    <label>Equipment Purpose: </label>
                    <textarea type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Desk Id: </label>
                    <input type="text" value={deskId} onChange={(e) => setDeskId(e.target.value)}></input>
                </div>
                <div>
                    { !isPending && <button>Order Equipment</button>}
                    { isPending && <button disabled>Requesting Equipment</button>}
                </div>
            
            </form>
            {message}
        </div>
    )
}

export default Equipments
