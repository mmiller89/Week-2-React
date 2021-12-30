import React from 'react';
import ReviewList from './Reviewlist';
import Review from './Review';


export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            synopsis: '',

        }
    }

    render () {
        return (
            <div className="container my-4">
                <div><h3>{this.props.name}</h3></div><br />
                <div>Synopsis: {this.props.synopsis}</div><br />
                <Review />
                <ReviewList />
            </div>
        )
    }
    
}
    