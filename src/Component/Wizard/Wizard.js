import React from "react"
import { Link, Route, Switch } from "react-router-dom"

import { connect } from "react-redux"
import { cancel } from "../../ducks/reducer"

import StepOne from "../StepOne/StepOne"
import StepTwo from "../StepTwo/StepTwo"
import StepThree from "../StepThree/StepThree"

function Wizard(props) {

    const { cancel, history } = props
    function handleCancel() {
        cancel()
        history.push("/")
    }
    return (
        <div>
            <div>
                <h1>Add New Listing</h1>
                <Link to="/"><button onClick={() => handleCancel()}>Cancel</button></Link>
            </div>
            <Switch>
                <Route path="/wizard/step1" component={StepOne} />
                <Route path="/wizard/step2" component={StepTwo} />
                <Route path="/wizard/step3" component={StepThree} />
            </Switch>
        </div>
    )
}

const actionOutputs = {
    cancel: cancel
}

const connected = connect(null, actionOutputs)

export default connected(Wizard)