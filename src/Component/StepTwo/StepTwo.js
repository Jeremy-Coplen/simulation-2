import React, { Component } from "react"
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { updateImage } from "../../ducks/reducer"

class StepTwo extends Component {
    
    render() {
        const { updateImage } = this.props
        return (
            <div>
                <input type="text"
                placeholder="Enter Image URL"
                value={this.props.image}
                onChange={(e) => updateImage(e.target.value)}/>
                <Link to="/wizard/step1"><button>Previous Step</button></Link>
                <Link to="/wizard/step3/"><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        image: appState.image
    }
}

const actionOutputs = {
    updateImage: updateImage
}

const connected = connect(mapStateToProps, actionOutputs)

export default connected(StepTwo)