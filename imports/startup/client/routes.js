/**
 * Created by User on 21/06/2017.
 */
import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import App from '../../ui/layouts/App'
import { Hello } from '../../ui/components/Hello'
import { Halo } from '../../ui/components/Halo'
import { PdfRead } from '../../ui/components/PdfRead'


Meteor.startup(() => {
    render(
        <App>
            <Router>
                <Switch>
                    <Route exact path='/' component={Halo}/>
                    <Route path='/hi' component={Hello}/>
                    <Route path='/pdf' component={PdfRead}/>
                </Switch>
            </Router>
        </App>,
        document.getElementById('app')
    );
});