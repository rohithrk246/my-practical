// import { Dashboard } from '@material-ui/icons';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Addcontracts from '../Components/Addcontracts';
import Contracts from '../Components/Contracts';
import Dashboard from '../Components/Dashboard';

const Router = () => {
    return(
        <Switch>
            <Route path="/dashboard"  component={Dashboard} />
            <Route path="/Contracts"  component={Contracts}/>
            <Route path="/Addcontracts" component={Addcontracts}/>
        </Switch>
    )
}

export default Router;