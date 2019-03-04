import React from 'react'

class PersonIcon extends React.Component {
  render() {

    let picture = this.props.picture;

    return (
      <figure className="person-icon media-left">
        <img className="media-object" width="64px" src={picture} />
      </figure>
    )
  }
}

export default PersonIcon
