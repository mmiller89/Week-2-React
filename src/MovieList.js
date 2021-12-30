import React from 'react';
import Movie from './Movie';




export default class MovieList extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <Movie 
                    name="Star Wars Episode 10: React is with Us"
                    synopsis="It's about stars and lasers."
                    />
                    
                </div>
                <div>
                    <Movie 
                    name="The Young and the React"
                    synopsis="React can be very...melodramatic."
                    />
                        
                </div>
                <div>
                    <Movie 
                    name="You've Got React!"
                    synopsis="Your average rom-com between a developer and an app."
                    />
                    
                </div>
            </div>
            
        )
    }

}