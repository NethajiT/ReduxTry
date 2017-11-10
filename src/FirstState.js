import React from 'react';

class FirstState extends React.Component {
   constructor() {
      super();
		
      this.state = {
         header: "Header Data",
         content: "Content Data"
      }
   }
	
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}

export default FirstState;