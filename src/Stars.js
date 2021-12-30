import React from 'react';
import ReviewForm from './Reviewform';

export default class Stars extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            overallRate: this.overallRate || "0",
            voteArray: [],
            movieIdentifier: 0
        };
        this.curVal = React.createRef();
        this.onSelect = this.onSelect.bind(this);
           
      
        
    }


    onSelect () {
        let e = parseInt(this.menu.value)
        let a = this.state.voteArray.length
        this.setState(state => {
            state.voteArray.push(e)
            
            if (a <= 0){
                state.overallRate = e
            } else {
                let totalSum = 0
                for (var i in state.voteArray) {
                    totalSum += state.voteArray[i]
                   
                }
                let mean = totalSum / state.voteArray.length
                state.overallRate = mean.toFixed(1) 
            }
            return state
        })
        
    }

    render() {
        return (
            <div className="container my-5">
                <div>Overall Rating: {this.state.overallRate} Stars</div><br />
                Rate it!
                <form>
                <select id="dropdown" ref = {(input)=> this.menu = input}>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
                </select>
                <div className="btn btn-primary mx-4" onClick={this.onSelect}>Submit Rating</div>
                </form>
                
            </div>
   
        )
    }       
    
}