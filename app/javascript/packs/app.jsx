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
    console.log(this.state);
  }
  render(){
    return(
    <div id='main'>
      <NoteList />
      {this.state.selectedNote &&
        <Note />
      }
    </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  )
})
