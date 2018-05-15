import React from 'react'

class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }


  render(){
     return (
    <div id='main-note' className='note-view'>
      <h2></h2>
      <textarea />
    </div>
    )
  }
}

export default Note;