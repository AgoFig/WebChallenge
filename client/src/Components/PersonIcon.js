import React from 'react'
import UserIconSmall from '../Assets/Images/User-Small/User-Icon-Small.png';
import UserIconLarge from '../Assets/Images/User-Large/User-Large.png';
class PersonIcon extends React.Component {
  render() {
    let src = UserIconSmall
    if (this.props.big === true) {
      src = UserIconLarge
    }
    return (<figure className="person-icon media-left">
      <img onError={(e) => e.target.src = src
} className="media-object" width="64px" src={this.props.picture}/>
    </figure>)
  }
}

export default PersonIcon
