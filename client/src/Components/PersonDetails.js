import React from 'react'
import PersonDetailRow from './PersonDetailRow'
import PersonIcon from './PersonIcon'
import FavoriteStar from './FavoriteStar'
import PhoneRow from './PhoneRow'
import AddressRow from './AddressRow'
import BirthdateRow from './BirthdateRow'
class PersonDetails extends React.Component {

  render() {
    return (<div className="person-details container-fluid">
      <header>
        <div className="action" onClick={this.props.backHandler}>
          <span className="back-arrow">&lt;</span> Contacts</div>
        <FavoriteStar isFavoriteStatus={this.props.person.isFavorite} favoriteHandler={this.props.favoriteHandler}></FavoriteStar>
      </header>

      <div className="card">
        <div className="thumbnail row">
          <PersonIcon picture={this.props.person.largeImageURL} big={true}/>
        </div>
        <div className="name row">{this.props.person.name}</div>
        <div className="company row">
          {this.props.person.companyName}
        </div>
      </div>
      <ul>

        <PhoneRow data={this.props.person.phone}></PhoneRow>

        <AddressRow data={this.props.person.address}></AddressRow>

        <BirthdateRow data={this.props.person.birthdate}></BirthdateRow>

        <PersonDetailRow title="EMAIL:" detail={this.props.person.emailAddress}></PersonDetailRow>
      </ul>
    </div>)
  }

}
export default PersonDetails
