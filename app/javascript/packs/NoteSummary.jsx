import React from 'react'

class NoteSummary extends React.Component{
  constructor(props) {
    super(props);   
    this.state = props;
    
  }

  render(){
    return(
      <div className='summary' key={this.props.id}>
        <h3>{this.props.title}</h3>
        <p className='description'>{this.props.content.substring(0,150)}...</p>
        <p className='tags'>{this.props.tags}</p>
      </div>
    )
  }
}

export default NoteSummary;