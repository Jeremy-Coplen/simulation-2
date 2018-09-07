import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import axios from "axios"

import { connect } from "react-redux"
import { updateMonthlyMortgage, updateDesiredRent, cancel } from "../../ducks/reducer"

class StepThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    createHouse(name, address, city, state, zipcode, image, monthlymortgage, desiredrent) {
        axios.post("/api/house", { name, address, city, state, zipcode, image, monthlymortgage, desiredrent })
            .then(() => {
                this.props.cancel()
                this.setState({
                    redirect: true
                })
            })

    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect push to="/" />
        }
    }

    render() {
        const { updateMonthlyMortgage, updateDesiredRent, name, address, city, state, zipcode, image,  monthlymortgage, desiredrent } = this.props
        return (
            <div>
                {this.renderRedirect()}
                <div>
                    <h3>Recommended Rent: {monthlymortgage * 1.25}</h3>
                    <h2>Monthly Mortgage Amount</h2>
                    <input type="text"
                        placeholder="Enter Monthly Mortgage Amount"
                        value={monthlymortgage}
                        onChange={(e) => updateMonthlyMortgage(e.target.value)} />
                    <h2>Desired Monthly Rent</h2>
                    <input type="text"
                        placeholder="Enter Desired Rent Amount"
                        value={desiredrent}
                        onChange={(e) => updateDesiredRent(e.target.value)} />
                    <Link to="/wizard/step2"><button>Previous Step</button></Link>
                    <button onClick={() => this.createHouse(name, address, city, state, zipcode, image, monthlymortgage, desiredrent)}>Complete</button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        name: appState.name,
        address: appState.address,
        city: appState.city,
        state: appState.state,
        zipcode: appState.zipcode,
        image: appState.image,
        monthlymortgage: appState.monthlymortgage,
        desiredrent: appState.desiredrent
    }
}

const actionOutputs = {
    updateMonthlyMortgage: updateMonthlyMortgage,
    updateDesiredRent: updateDesiredRent,
    cancel: cancel
}

const connected = connect(mapStateToProps, actionOutputs)

export default connected(StepThree)