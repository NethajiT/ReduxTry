import React from 'react';
import App from './App'

class SetState extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

Append=()=>{
    var val="Data";
   var arr= this.state.data;
   arr.push(val);
   this.setState({data:arr});
}
    render(){
        return(
            <div>
                <button onClick={this.Append}>TRY</button>
                <h1>{this.state.data}</h1>
                <App/>
                </div>
        )
    }
}

export default SetState;