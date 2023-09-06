import React, {useState} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
// import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'

function SubmitMakeUp({newProduct}) {
        // const {id, brand, name, product_type, price, description, api_featured_image} = cosmetic
const [name, setName] = useState("")
//const [product_type, setProductType] = useState("")
const [brand, setBrand] = useState("")
const [image, setImage] = useState("")
const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:6001/MyCollection", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
               // product_type: product_type,
                brand: brand,
                image: image,
                description: description,
                expiration: ""
            })
        })
        .then(r => r.json())
        .then(mySavedProduct => newProduct(mySavedProduct))
    }



    return (
        <div className="Submit-Form">
            <p>Couldn't find your product on our list? Add it below!</p>
            <h2>Submit a Product</h2>
            <Form id="NewForm" onSubmit={handleSubmit}>
                <Form.Field className="form-input">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field className="form-input">
                    <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </Form.Field>
                <Form.Field className="form-input">
                    <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
                </Form.Field>
                <Form.Field className="form-input">
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Field>
                <Button id="Form-Button" type="submit">Add to My Collection</Button>
                {/* <input type="text" placeholder="Product Type" value={product_type} onChange={(e) => setProductType(e.target.value)} /> */}
            </Form>
        </div>
    )
}

export default SubmitMakeUp;