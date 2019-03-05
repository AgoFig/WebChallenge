import React from 'react'

class AddressRow extends React.Component {
  render() {
    let result = this.processAddress(this.props.data)
    return (
      <li className="wrap">
        <div className="title row">
          ADDRESS:
        </div>
        <div className="row">
          {result}
        </div>
      </li>
    )
  }
  processAddress(address){
    return (
      <div>
        {address.street}
        <br/>
        {address.city}, {address.state} {address.zipCode}, {address.country}
      </div>
    )
  }

}

export default AddressRow
