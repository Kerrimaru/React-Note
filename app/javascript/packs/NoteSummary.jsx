import React from 'react'

class NoteSummary extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
    //this.state.notes.selected = false;
  }

  clickHandler = () => {
    this.props.selected(this.props.id); 
    //this.state.selected = true;
    let el = document.querySelectorAll('.summary')[this.props.id - 1];
    let previously = document.querySelector('.selected');
    if ( previously != null){
      previously.classList.remove('selected')};
    el.classList.add('selected');

  }

  render(){
    return(
      <div className='summary' onClick={this.clickHandler}>
        <h3>{this.props.title}</h3>
        <p className='description'>{this.props.content.substring(0,150)}...</p>
        <p className='tags'>{this.props.tags}</p>
      </div>
    )
  }
}

export default NoteSummary;
