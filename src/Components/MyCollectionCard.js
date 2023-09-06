import React, { useState } from "react";
import {AiOutlineDelete} from 'react-icons/ai'

function MyCollectionCard ({product, onDelete, onSubmitUpdateExpiration}){
    const {id, name, image, product_type, brand, description, expiration } = product
    const [dateInput, setDateInput] = useState("");

    function handleDelete() {
        fetch(`http://localhost:6001/mycollection/${id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => onDelete(id))
    }

    function handleChange(e) {
        setDateInput(e.target.value);
    }
    // console.log(dateInput);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:6001/mycollection/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({expiration: dateInput})
        })
        .then(r => r.json())
        .then(updatedItem => onSubmitUpdateExpiration(updatedItem))
    }

    return (
        <div id="collection-item">
            <AiOutlineDelete className = 'delete-icon' onClick={handleDelete}/>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Expires: {expiration} </p>
            <form onSubmit={handleSubmit}>
                <label>Set Expiration: </label>
                <input type="date" value={dateInput} onChange={handleChange}/>
                <input type="submit" value="Set"/>
            </form>
        </div>
    )

}









export default MyCollectionCard