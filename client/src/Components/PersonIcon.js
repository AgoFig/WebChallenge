import React from 'react'
import UserIconSmall from '../Assets/Images/User-Small/User-Icon-Small.png';
import UserIconLarge from '../Assets/Images/User-Large/User-Large.png';
class PersonIcon extends React.Component {
  render() {
    let srcMethod = this.addDefaultSrc
    if (this.props.big === true) {
      let srcMethod = this.addLargeSrc
    }
    return (
      <figure className="person-icon media-left">
        <img onError={srcMethod} className="media-object"
          width="64px" src={this.props.picture} />
      </figure>
    )
  }
  addDefaultSrc(ev){
    ev.target.src = {UserIconSmall};
  }
  addLargeSrc(ev){
    ev.target.src={UserIconLarge};
  }
}

export default PersonIcon
