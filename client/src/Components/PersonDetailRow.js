import React from 'react'

class PersonDetailRow extends React.Component {
  render() {

    return (

      <li className="wrap">
        <div className="title row">
          {this.props.title}
        </div>
        <div className="row">
          {this.children}
        </div>
      </li>

    )
  }
}

export default PersonDetailRow
