/**
 * Created by User on 21/06/2017.
 */
import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Hello } from '../../ui/components/Hello'
import { Halo } from '../../ui/components/Halo'
import PdfRead from '../../ui/components/PdfRead'
import { Header } from '../../ui/components/Header'

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route exact path='/' component={Halo}/>
                <Route path='/hi' component={Hello}/>
                <Route path='/pdf' component={PdfRead}/>
            </div>
        </BrowserRouter>,
        document.getElementById('app')
    );
});