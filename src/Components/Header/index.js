import React, { Component } from 'react';
import './index.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title={this.props.title} showMenuIconButton={false} />
            </MuiThemeProvider>
        );
    }
}