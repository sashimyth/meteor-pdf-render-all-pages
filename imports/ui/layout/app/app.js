import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

export const App = () =>({
    render() {
        return <Navbar>
            <Navbar.Header xs={ 12 }>
                <Navbar.Brand>
                    <Link to="/">Beranda</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Link to="/">Lihat PDF</Link>
            </Navbar.Collapse>
        </Navbar>
    }
});
