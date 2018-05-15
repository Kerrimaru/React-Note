import React from 'react'

class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }


  render(){
     return (
    <div id='note'>
      <textarea />
    </div>
    )
  }
}

export default Note;