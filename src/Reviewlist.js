import React from 'react';
import Stars from './Stars';
import ReviewForm from './Reviewform';


export default class ReviewList extends React.Component {
    constructor(props){
        super(props)
    }



    render() {
        return (
            <div> 
                <ReviewForm />
                <Stars />
            </div>
           
        )
    }
}