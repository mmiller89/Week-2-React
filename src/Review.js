import react from 'react';
import React from 'react';
import ReviewForm from './Reviewform';



export default class Review extends React.Component {
    constructor(props){
        super(props)
        this.showArray = React.createRef();
        
    }

 

    render(){
      
    
        return (
            
            <div>
               <div>{this.reviewArray}</div>
            </div>
           
          );
        }
    }

