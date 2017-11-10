import React from 'react';

class SecondProps extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.head}</p>
                <p>{this.props.tail}</p>
            </div>
        )
    }
}

SecondProps.defaultProps={
    head:"head",
    tail:"tail"
}

export default SecondProps;