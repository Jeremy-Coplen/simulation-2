import React from "react"
import "./House.css"

function House(props) {
    return (
        <div>
            <img className="house_img" src={props.image} alt="house img"/>
            <h3>Property Name: {props.name}</h3>
            <h3>Address: {props.address}</h3>
            <h3>City: {props.city}</h3>
            <h3>State: {props.state}</h3>
            <h3>Zip: {props.zipcode}</h3>
            <h3>Monthly Mortgage: {props.monthlyMortgage}</h3>
            <h3>Desired Rent: {props.desiredRent}</h3>
            <button onClick={() => props.deleteHouseFn(props.id)}>X</button>
        </div>
    )
}

export default House