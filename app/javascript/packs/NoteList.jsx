import React from 'react'
import NoteSummary from './NoteSummary'

class NoteList extends React.Component{

  constructor(props){
    super(props);
    this.state = { notes: [] };
    //this.state.selected = false;
    // this.state.newNote = {
    //   content: 'yo',
    //   title: 'oy',
    //   tags: 'uh',
    //   id: 9
    // }
  };

  componentDidMount(){
    this.getNotes();
  }

  getNotes() {
    fetch('/notes.json')
      .then( (response) => {
          return response.json() })   
      .then( (json) => {
        console.log(json);
        console.log(json.notes);
        this.setState({notes: json});
        console.log(this.state.notes);
        console.log(this.state);
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
  addNote(){
    var data = ({
      "title": "yo",
      "content": "oy",
      "id": 999,
      "tags": "la",
      "created_at":"2018-05-14T17:53:38.670Z",
      "updated_at":"2018-05-14T17:53:38.670Z",
      "url":"http://kerri-virtualbo:3000/notes/1.json"
    })
    console.log('click');
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "/notes/new");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        //this.setState({chain_length: JSON.parse(xhr.response).chain_length});
      }
    }.bind(this)
    xhr.send(JSON.stringify(data));
    console.log(JSON.stringify(data))
  }
  


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



  // addNote = () => {
  //   const prevNotes = this.state.notes;
  //   var note = {
      
  //     title: 'yo',
  //     content: '',
  //     tags: ''
  //   }


  //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  //   fetch('/notes.json', {
  //     method: 'POST',
  //     //credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-CSRF-Token': token,
  //     },
  //     body: JSON.stringify(note)
  //   })
  //   // this.setState({
  //   //   title: '',
  //   //   content: '',
  //   //   tags: '',
  //   // })


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
