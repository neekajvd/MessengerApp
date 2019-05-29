import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <span id="welcome">Welcome!</span>
        <span className="chatTitleSpan">{this.props.user}</span>
        <img className="ChatPic" id="ChatPic" src={this.props.avatar}/>
      </div>
    )
  }
}