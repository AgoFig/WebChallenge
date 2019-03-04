import React from 'react'
import PersonIcon from './PersonIcon'
import FavoriteStar from './FavoriteStar'
class PersonRow extends React.Component {
  render() {
    return(
      <li className="person" onClick={()=>this.props.handler(this.props.person.id)}>
        <PersonIcon picture={this.props.person.smallImageURL} />
        <div className="star column">
          <FavoriteStar isFavorite={this.props.person.isFavorite}></FavoriteStar>
        </div>
        <div className="data column">
          <div className="name row">{this.props.person.name}</div>
          <div className="company row">{this.props.person.companyName}</div>
        </div>
      </li>
    )
  }
}

export default PersonRow
