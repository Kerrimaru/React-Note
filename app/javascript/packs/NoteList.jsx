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
    return(
      <div id='side-notes'>
        {this.state.notes.map((note) =>      
          <NoteSummary {...note} />      
        )}
        <button onClick={this.addNote}>
          + Add note
        </button>
      </div>
    )
  }

}





export default NoteList;


// render(){
//     let list = this.state.notes.map((note) =>      
//         <NoteSummary {...note} />      
//       );
//     list.push(<button onClick={this.addNote}>
//           + Add note
//         </button>)
//     return list
//   }