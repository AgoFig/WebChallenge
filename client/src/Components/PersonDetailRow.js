import React from 'react'

class PersonDetailRow extends React.Component {
  render() {
    let result = '';
    if (this.props.handler!==undefined) {
      result = this.props.extraHandler()
    } else {
      result = this.props.detail
    }
    return (
      <li className="wrap">
        <div className="title row">
          {this.props.title}
        </div>
        <div className="row">
          {result}
        </div>
      </li>
    )
  }
}

export default PersonDetailRow
