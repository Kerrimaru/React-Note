import React from 'react'

class NoteSummary extends React.Component{
  constructor(props) {
    super(props);   
    this.state = props;
    
  }

  render(){
    return(
      <div className='summary'>
        {console.log(this)}
        <h3>{this.props.title}</h3>
        <p>{this.props.content.substring(0,150)}...</p>
        <p>{this.props.tags}</p>
      </div>
    )
  }
}

export default NoteSummary;