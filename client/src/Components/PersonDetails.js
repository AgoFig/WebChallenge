import React from 'react'
import PersonDetailRow from './PersonDetailRow'
import PersonIcon from './PersonIcon'
import FavoriteStar from './FavoriteStar'
class PersonDetails extends React.Component {

  render() {
    return(
      <div className="person-details container-fluid">
        <header>
          <div className="action" onClick={this.props.backHandler}><span class="back-arrow">&lt;</span> Contacts</div>
          <FavoriteStar isFavorite={this.props.person.isFavorite}></FavoriteStar>
        </header>

        <div className="card">
        <div className="thumbnail row">
          <PersonIcon picture={this.props.person.smallImageURL} />
        </div>
        <div className="name row">{this.props.person.name}</div>
        <div className="company row">
          {this.props.person.companyName}
        </div>
</div>
<ul>
        <PersonDetailRow title="PHONE:">
          {
            Object.keys(this.props.person.phone).forEach(
              (key)=>{
                return this.props.person.phone[key]
              }
            )
}
        </PersonDetailRow>

        <PersonDetailRow title="ADDRESS:">
          processAddress(this.props.person.address);
        </PersonDetailRow>
        <PersonDetailRow title="BIRTHDATE:">
          parseBirthdate(this.props.person.birthdate);
        </PersonDetailRow>
        <PersonDetailRow title="EMAIL"/>
        </ul>
      </div>
    )
  }


}
function processAdress(address){
  return address.join();
}
function parseBirthdate(birthdate) {
  var dateData, dateObject, dateReadable;


  dateObject = new Date(Date.parse(birthdate));

  dateReadable = dateObject.toDateString();
  return dateReadable;
}

export default PersonDetails
