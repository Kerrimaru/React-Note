import React from 'react'
import NoteSummary from './NoteSummary'

class NoteList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
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
        this.setState({notes: json});
        console.log(this.state);
      });
  };

  // render(){
  //   console.log(this.state.notes);
  //   var children = this.state.notes.map(function(note){
  //     note.key = note.id;
  //     return(
  //     <div id='notes'>
  //       <NoteSummary />
  //     </div>
  //     )
  //   }
  //   return(
  //     <div>{children}</div>
  //     )
  // }

  // render(){
  //   console.log(this.state);
  //   notesList = this.state.map((note) => note + 'ho');
  //   console.log(notesList);
  // }


  render(){
    var children = this.state.notes.map(function(note){
      //note.clicked = self.noteClicked.bind(self);
      note.key = note.id;
      //console.log(note)
      return React.createElement(NoteSummary, note, null)
    });
    children.unshift(React.createElement('div', {id: 'plus'}, '+'));
    return [
      React.createElement('div', {className: 'side-notes'}, children)
    ]
  }

}

export default NoteList;




// I literally cannot tell what the heck is wrong with this fetch????
  // componentDidMount() {
    // fetch('/notes.json')
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     this.setState({
    //       notes: myJson
    //     });
    //   });
    //  }
    // };
