import React, { Component } from 'react';
import './index.css';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chapter from './../Chapter';
import chapters from './../../json/chapters.json';

export default class Course extends Component {
    render() {
        //Find each chapter for the course
        let id = this.props.data.id;
        let chapter = chapters.filter(function(element) {
            return (element.course_id == id);
        });
        //Sorts chapters by order
        let sortedChapters = chapter.sort(function(a, b) {
            return a.order - b.order;
        });
        return (
            <div>
                <MuiThemeProvider>
                    <Card style={{backgroundColor: "GhostWhite"}}>
                        <CardHeader
                            title={"Course: " + this.props.data.name}
                            subtitle={"Difficulty: " + this.props.data.difficulty}
                            actAsExpander={true}
                            showExpandableButton={true}
                            />
                        <CardText expandable={true}>
                            <p>{"Number of Chapters: " + chapter.length}</p>
                            
                            <CardMedia>
                                {chapter.map(function(element, index) {
                                    return <Chapter key={index} data={element}/>
                                })}
                            </CardMedia>
                        </CardText>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}