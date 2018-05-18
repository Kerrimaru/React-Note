import React from 'react'

class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    fetch(`/notes/${this.props.noteId}.json`)
      .then( (response) => {
          return response.json() })   
      .then( (json) => {
        this.setState({title: json.title, content: json.content});
        //console.log(this.state.content);
      }).catch(error => {
        console.log('error fetching data', error);
      });
  };

  // handleUserInput = () => {
  //   this.setState({
  //     content: this.state.content.value,
  //     title: this.state.title.value
  //   })
  // }

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
    //console.log(this.state.content);
    return (
      <div id='main-note' className='note-view'>
        <textarea id='title' value={this.state.title} onChange={this.handleUserInputTitle} onBlur={this.saveContent}></textarea>
        <textarea id='content' value={this.state.content} onChange={this.handleUserInput} onBlur={this.saveContent}></textarea>
      </div>
    )
  }

  saveContent = () => {
    console.log('lost focus');
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    var data = {"title":this.state.title, "content":this.state.content};
    fetch(`/notes/${this.props.noteId}.json`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify(data)
    })
  }

}

export default Note;
