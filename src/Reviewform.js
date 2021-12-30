import React from 'react';
import Review from './Review';


export default class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.reviewform = ''
        this.reviewArray = []
        this.submitVal = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    };
        
        

    onSubmit() {
        let b = this.submitVal.value
        this.reviewArray.push(b)
        console.log(this.reviewArray)
        return this.reviewArray
        
       
    }
  

    render() {
        return (
            <div>
                <div><textarea name="paragraph_text" ref = {(input)=> this.submitVal = input} cols="50" rows="5"></textarea></div>
                <div className="btn btn-secondary mx-4" onClick={this.onSubmit}>Submit Review</div>
            </div>
            
            
        )
    }

}
    