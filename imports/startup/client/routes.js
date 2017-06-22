/**
 * Created by User on 21/06/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { Index } from '../../ui/pages/hello'

Meteor.startup(() => {
    render(
        <Router history={ browserHistory }>
            <Route path="/" component={ Index }>
                <IndexRoute name="index" component={ Index }/>
                <Route name="view" path="/view" component={ Index }/>
            </Route>
        </Router>,
        document.getElementById('app')
    )
});