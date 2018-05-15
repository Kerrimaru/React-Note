import React from 'react'

class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }


  render(){
     return (
    <div id='main-note' className='note-view'>
      <textarea id='title'></textarea>
      <textarea id='content'></textarea>
    </div>
    )
  }
}

export default Note;