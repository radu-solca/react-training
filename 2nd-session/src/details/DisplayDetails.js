import React, {Component} from 'react';

export default class DisplayDetails extends Component {
    render() {
        return <h1>General {this.props.name}</h1>
    }
}