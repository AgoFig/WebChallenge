import React from 'react'

class BirthdateRow extends React.Component {
  render() {
    let result = this.parseBirthdate(this.props.data)
    return (<li className="wrap">
      <div className="title row">
        BIRTHDATE:
      </div>
      <div className="row">
        {result}
      </div>
    </li>)
  }
  parseBirthdate(birthdate) {
    var dateData,
      dateObject,
      dateReadable;

    dateObject = new Date(Date.parse(birthdate));

    dateReadable = this.readableMonth(dateObject.getMonth()) + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear();
    return dateReadable;
  }
  readableMonth(index) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return monthNames[index]
  }
}

export default BirthdateRow
