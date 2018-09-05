import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({term: event.target.value})} />                
            </div>
        );
    }
}