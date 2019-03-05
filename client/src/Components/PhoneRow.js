import React from 'react'

class PhoneRow extends React.Component {
  render() {
    if (this.props.data !== undefined) {
      var phones = this.props.data;
      var list =  Object.keys(phones).map(
        (key) =>
        <li className="phone-row">
          <div className="title row">
            PHONE:
          </div>
          <div className="row">
            <div>{this.formatPhone(phones[key])}</div>
            <div>{key}</div>
          </div>
        </li>
      );
      return list;
    } else {
      return '';
    }
  }
  formatPhone(phone){
    let splittedPhone = phone.split('-');
    splittedPhone[0] = '('+splittedPhone[0]+') ';
    splittedPhone[1] = splittedPhone[1]+'-';
    return splittedPhone.join('');
  }
}

export default PhoneRow
