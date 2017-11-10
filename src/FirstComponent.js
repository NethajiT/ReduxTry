import React from 'react';

class Show extends React.Component{
    render(){
        return(
            <div>
                <First/>
                <Second/>
                </div>
        )
    }
}

class First extends React.Component{
    render(){
        return(
            <div>
                <h1>This is the first component</h1>
                </div>
        )
    }
}

class Second extends React.Component{
    render(){
        return(
            <div>
                <h1>This is the second component</h1>
                </div>
        )
    }
}

export default Show;