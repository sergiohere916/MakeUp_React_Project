import React, { useState } from "react";
import {AiOutlineDelete} from 'react-icons/ai'

function MyCollectionCard ({product, onDelete, onSubmitUpdateExpiration}){
    const {id, name, image, product_type, brand, description, expiration } = product
    const [dateInput, setDateInput] = useState("");
    
    const currentDate = new Date();

    const inputYear = expiration.slice(0,4);
    
    const inputMonth = expiration.slice(5,7);
    
    const inputDay = expiration.slice(8,10)
    
    const formattedInputDate = `${inputMonth}/${inputDay}/${inputYear}`;
 
    
    const endDate = new Date(formattedInputDate);
    
    let daysBeforeExp = (Math.ceil((endDate - currentDate)/1000/60/60/24)); 
    console.log(daysBeforeExp);
    if (daysBeforeExp === -0) {
        daysBeforeExp = 0;
        console.log(daysBeforeExp); 
    }

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

    const itemType = ((daysBeforeExp !== 0) ? "collection-item" : "expired-item" );
    return (
        <div className={itemType}>
            <AiOutlineDelete className = 'delete-icon' onClick={handleDelete}/>
            <img src={image} alt={name}/>
            {/* {daysBeforeExp === 0 ? (<h4>EXPIRED</h4>) : (null)} */}
            <div className="collection-content">
                <h3>{name}</h3>
                {/* {daysBeforeExp === 0 ? <h3>EXPIRED</h3> : null} */}
                {daysBeforeExp || daysBeforeExp === 0 ? (<p>Expiring in: {daysBeforeExp} day/s</p>) : (<p>Expiring in: </p>)}
                <form onSubmit={handleSubmit}>
                    <label>Set Expiration: </label>
                    <input type="date" value={dateInput} onChange={handleChange}/>
                    <input type="submit" value="Set"/>
                </form>
            </div>
        </div>
    )

}









export default MyCollectionCard