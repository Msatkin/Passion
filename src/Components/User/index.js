import React, { Component } from 'react';
import './index.css';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Course from './../Course';
import courses from './../../json/courses.json';

export default class User extends Component {
    render() {
        let id = this.props.data.id;
        let userCourses = courses.filter(function(element) {
            return (element.user_id === id);
        });
        return (
            <MuiThemeProvider>
                <Card>
                    <CardHeader
                        title={this.props.data.name}
                        avatar={this.props.data.picture}
                        subtitle={"Age: " + this.props.data.age}
                        actAsExpander={true}
                        showExpandableButton={true}
                        />
                    <CardText expandable={true}>
                        <CardMedia>
                            {userCourses.map(function(element, index) {
                                return <Course key={index} data={element}/>
                            })}
                        </CardMedia>
                    </CardText>
                </Card>
            </MuiThemeProvider>
        );
    }
}