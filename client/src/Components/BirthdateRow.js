import React from 'react'

class BirthdateRow extends React.Component {
  render() {
    let result = this.parseBirthdate(this.props.data)
    return (
      <li className="wrap">
        <div className="title row">
          BIRTHDATE:
        </div>
        <div className="row">
          {result}
        </div>
      </li>
    )
  }

  parseBirthdate(birthdate) {
    var dateData, dateObject, dateReadable;

    dateObject = new Date(Date.parse(birthdate));

    dateReadable = dateObject.toDateString();
    return dateReadable;
  }
}

export default BirthdateRow
