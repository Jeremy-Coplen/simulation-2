import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import House from "../House/House"

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteHouse =this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get("/api/houses")
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/house/${id}`)
        .then(() => {
            this.componentDidMount()
        })
    } 

    render() {
        console.log(this.state.houses)
        let house = this.state.houses.map(house => {
            return (
                <House key={house.id} id={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zipcode={house.zipcode} image={house.image} monthlyMortgage={house.monthlymortgage} desiredRent={house.desiredrent} deleteHouseFn={this.deleteHouse}/>
            )
        })
        return (
            <div>
                <Link to="/wizard/step1"><button>Add New Property</button></Link>
                {house}
            </div>
        )
    }
}

export default Dashboard