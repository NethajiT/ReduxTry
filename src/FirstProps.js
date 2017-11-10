import React from 'react';


class FirstProps extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.header}</h1>
          
         </div>
      );
   }
}

export default FirstProps;