import React from 'react'
import NoteSummary from './NoteSummary'

class NoteList extends React.Component{

  constructor(props){
    super(props);
    this.state = { notes: [] };
    //this.state.newNote = {newNoteContent: ''}
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

  addNote = () => {
    console.log('clicked!!');
    console.log(this.state);
    //this.setState({notes: +=})
    // note.setState{

    // }
  }

  noteClicked = (id) => { 
    console.log(this);
    console.log('Note clicked: ' + id );
    //this.props.onSelectNote(id);
  }

  render(){
    var self = this;
    return(
      <div id='side-notes'>
        <div id='note-list'>
          {this.state.notes.map(function(note){
            note.clicked = self.noteClicked.bind(self);
            return (
            <NoteSummary {...note} key={note.id} />      
          )}
          )}
        </div>
        <p onClick={this.addNote} id='newButt'>
          Manifest +
        </p>
      </div>
    )
  }

}

export default NoteList;
