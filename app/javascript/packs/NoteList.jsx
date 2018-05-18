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

  // addNote = () => {
  //   //this.props.newNote(this.state)
  //   var data = ({
  //     "title": "yo",
  //     "content": "oy",
  //     "id": 999,
  //     "tags": "la",
  //     "created_at":"2018-05-14T17:53:38.670Z",
  //     "updated_at":"2018-05-14T17:53:38.670Z",
  //     "url":"http://kerri-virtualbo:3000/notes/1.json"
  //   })
  //   console.log(JSON.stringify(data));
  //   console.log('clicked!!');
  //   console.log(this.state);
  //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  //   fetch('/notes.json', {
  //     method: 'post',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json',
  //       'X-CSRF-Token': token,
  //     }      
  //   }).then(res => res.json())
  //   .catch(error => console.error('Error:', error))
  //   .then(response => console.log('Success:', response));
  // }
  
  // addNote = () => {
  //   console.log('click')
  //   return(
  //     <NoteSummary title={'yo'} content={''} tags={''} />
  //   )
  // }
  //addNote = () => {
    
    //sendToServer(){
  // addNote = () => {
  //   console.log('click');
  //   this.setState(prevState => ({
  //     notes: [
  //     ...prevState.notes,
  //     {
  //       id: prevState.notes.length + 1,
  //       title: 'yo',
  //       content: 'oy'
  //     }]
  //   }))
  // }



  addNote = () => {
    console.log('click');
    const prevNotes = this.state.notes;
    var note = {      
      title: '',
      content: '',
      tags: ''
    }
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch('/notes.json', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify(note)
    }).then(function(note){
      console.log(note)
    });
    }
  
    // this.setState({
    //   title: '',
    //   content: '',
    //   tags: '',
    // })


  //   console.log(note); 
  //   console.log(note.props);   
  //   prevNotes.push(note);
  //   this.setState({
  //     notes: prevNotes
  //   })    
  //   console.log(this.state.notes);
  // }

  noteSelected = (id) => { 
    this.props.onSelectNote(id);
  }

  render(){
    return(
      <div id='side-notes'>
        <div id='note-list'>
          {this.state.notes.map((note) => {
            note.selected = this.noteSelected;
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
