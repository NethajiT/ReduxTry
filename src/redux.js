import React from 'react';

class Demo extends React.Component{
    handleclick=()=>{
            //  this.props.dispatch(createErrorMessage('Uploaded file size is too large (Max 2 MB)'));
    }
    render(){
        return(
            <div>
                <button onClick={this.handleclick}> click </button>
            </div>
        )
    }
}

export default Demo;