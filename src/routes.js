import React from "react"
import {Route, Switch} from "react-router-dom"

import Dashboard from "./Component/Dashboard/Dashboard"
import Wizard from "./Component/Wizard/Wizard"

export default <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
</Switch>
