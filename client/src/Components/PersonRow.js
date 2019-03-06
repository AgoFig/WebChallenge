import React from 'react'
import PersonIcon from './PersonIcon'

class PersonRow extends React.Component {
  render() {
    return(
      <li className="person" onClick={()=>this.props.handler(this.props.person.id)}>
        <PersonIcon picture={this.props.person.smallImageURL} />
        <div className="star column">
          {this.isFavorite()}
        </div>
        <div className="data column">
          <div className="name row">{this.props.person.name}</div>
          <div className="company row">{this.props.person.companyName}</div>
        </div>
      </li>
    )
  }
  isFavorite() {
    if (this.props.person.isFavorite === true) {
      return (
        <span role="img" aria-label="star">⭐</span>
      )
    }
  }
}

export default PersonRow
