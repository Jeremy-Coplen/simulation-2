import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { updateName, updateAddress, updateCity, updateState, updateZipcode } from "../../ducks/reducer"

class StepOne extends Component {

    render() {
        const { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props
        return (
            <div>
                <input type="text"
                    placeholder="Enter name"
                    value={this.props.name}
                    onChange={(e) => updateName(e.target.value)} />
                <input type="text"
                    placeholder="Enter address"
                    value={this.props.address}
                    onChange={(e) => updateAddress(e.target.value)} />
                <input type="text"
                    placeholder="Enter city"
                    value={this.props.city}
                    onChange={(e) => updateCity(e.target.value)} />
                <input type="text"
                    placeholder="Enter state"
                    value={this.props.state}
                    onChange={(e) => updateState(e.target.value)} />
                <input type="text"
                    placeholder="Enter zipcode"
                    value={this.props.zipcode}
                    onChange={(e) => updateZipcode(e.target.value)} />
                <Link to="/wizard/step2"><button>Next Step</button></Link>
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
        zipcode: appState.zipcode
    }
}

const actionOutputs = {
    updateName: updateName,
    updateAddress: updateAddress,
    updateCity: updateCity,
    updateState: updateState,
    updateZipcode: updateZipcode
}

const connected = connect(mapStateToProps, actionOutputs)

export default connected(StepOne)