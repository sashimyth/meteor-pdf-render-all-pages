/**
 * Created by User on 22/06/2017.
 */
import React from "react";
import { NavLink } from "react-router-dom"

export const Header = () => (
    <nav className="navbar navbar-inverse">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Digilib</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><NavLink
                            to="/"
                            activeClassName="active"
                        >Beranda</NavLink><span className="sr-only">(current)</span></li>
                    <li><NavLink
                        to="/pdf"
                        activeClassName="active"
                    >Pdf Reader</NavLink></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);