import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'

export default class componentName extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <div className="container-fluid">
                    <div className="row">
                        Hello World
                    </div>
                </div>
            </React.Fragment>
        )
    }
}