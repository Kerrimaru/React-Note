import React from 'react'

class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: ''
    }
    //console.log(this.props);
  }

  // componentDidMount(){
  //   this.getNotes();
  // }

  componentDidMount() {
    fetch('/notes/' + this.props.noteId + '.json')
      .then( (response) => {
          return response.json() })   
      .then( (json) => {
        console.log(json);
        this.setState({title: json.title, content: json.content});
        //console.log(this.state.content);
      }).catch(error => {
        console.log('error fetching data', error);
      });
  };

  handleUserInput = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleUserInputTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render(){
    console.log(this.state.content);
    return (
      <div id='main-note' className='note-view'>
        <textarea id='title' value={this.state.title} onChange={this.handleUserInputTitle}></textarea>
        <textarea id='content' value={this.state.content} onChange={this.handleUserInput}></textarea>
      </div>
    )
  }



  // render(){
  //   console.log(this.state);
  //   if(this.state.notes.title) {
  //    return (
  //     <div id='main-note' className='note-view'>
  //     <h1 id='title'>{this.state.title}</h1>
  //     <textarea id='content'>{this.state.content}</textarea>
  //   </div>
  //   )
  //   }
  //   return (
  //     <div>
  //       hello
  //       </div>
  //     )
  // }
}

export default Note;
