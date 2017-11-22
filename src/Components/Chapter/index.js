import React, { Component } from 'react';
import './index.css';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Course from './../Course';
import courses from './../../json/courses.json';

export default class Chapter extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Card style={{backgroundColor: "FloralWhite"}}>
                    <CardHeader
                        title={"Chapter: " + this.props.data.name}
                        subtitle={"Id: " + this.props.data.id}
                        actAsExpander={true}
                        showExpandableButton={true}
                        />
                    <CardText expandable={true}>
                        <p>{"Order: " + this.props.data.order}</p>
                        <p>{"Chapter Duration: " + this.props.data.duration_mins}</p>
                    </CardText>
                </Card>
            </MuiThemeProvider>
        );
    }
}