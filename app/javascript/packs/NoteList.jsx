import React from 'react'
import NoteSummary from './NoteSummary'

class NoteList extends React.Component{

  constructor(props){
    super(props);
    this.state = { notes: [] };
  };

  componentDidMount(){
    this.getNotes();
  }

  getNotes() {
    fetch('/notes.json')
      .then( (response) => {
          return response.json() })   
      .then( (json) => {
        this.setState({notes: json});
      });
  };

  render(){
    let list = this.state.notes.map((note) =>
      <div key={note.id}>
        <NoteSummary {...note} />  
      </div>
      );
    return list
  }
}

export default NoteList;