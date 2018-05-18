// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import NoteList from './NoteList'
import NoteSummary from './NoteSummary'
import Note from './Note'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedNote: null};
  }

  noteSelected = (id) => { 
    console.log(this.state.id);
    this.setState({selectedNote: id})   
  }

  render(){
    return(
    <div id='main'>
      <NoteList onSelectNote={this.noteSelected}/>
      {this.state.selectedNote &&
        <Note noteId={this.state.selectedNote} key={this.state.selectedNote}/>        
      }
    </div>
    )
  }

  //  addNote = () => {
  //   console.log('click');
  //   const prevNotes = this.state.notes;
  //   let note = {      
  //     title: '',
  //     content: '',
  //     tags: ''
  //   }
  //   console.log(note);
  //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  //   fetch('/notes.json', {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-CSRF-Token': token,
  //     },
  //     body: JSON.stringify(note)
  //   }).then(console.log(this))
  // }



}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  )
})
