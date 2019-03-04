import React, { Component } from 'react';
import PersonList from './Components/PersonList'
import PersonDetails from './Components/PersonDetails'
import './Assets/Styles/normalize.css'
import './Assets/Styles/App.css';

const API = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      personDetailViewIsActive: false,
      favoriteContacts: [],
      person: null,
      otherContacts: [],
      allContacts: []
    }
    this.enableDetailState = this.enableDetailState.bind(this)
    this.disableDetailState = this.disableDetailState.bind(this)
    this.getPerson = this.getPerson.bind(this)
  }
  enableDetailState(id) {
    this.setState({person: this.getPerson(id)});
    this.setState({personDetailViewIsActive: true})
  }
  disableDetailState() {
    this.setState({personDetailViewIsActive: false})
  }
  getPerson(id){
    return this.state.allContacts.find((element) => {
      return element.id === id;
    })
  }
  componentWillMount() {
    fetch(API)
    .then(response => response.json())
    .then((response) => {
      var favoriteContacts = [];
      var otherContacts = [];
      var allContacts = response;
      for (var i = 0; i < allContacts.length; i++) {
        if (allContacts[i].isFavorite === true) {
          favoriteContacts.push(allContacts[i]);
        } else {
          otherContacts.push(allContacts[i]);
        }
      }
      favoriteContacts = this.sort(favoriteContacts);
      otherContacts = this.sort(otherContacts);
      this.setState({
        allContacts: allContacts,
        favoriteContacts: favoriteContacts,
        otherContacts: otherContacts
      })
    })
  }
  sort(arrayToBeSorted){
    return  arrayToBeSorted.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }
  render() {
    if(this.state.personDetailViewIsActive === true) {
      if(this.state.person !== null){
        return <PersonDetails person={this.state.person}
          backHandler={this.disableDetailState} />
      } else {
        return 'no person found'
      }
    } else {
      return this.getLists();
    }
  }
  getLists()
  {
    return (
    <div className="container-fluid contacts">
        <header className="title">
          Contacts
        </header>
    <PersonList title="FAVORITE CONTACTS" handler={this.enableDetailState}
        personList={this.state.favoriteContacts} />
      <PersonList title="OTHER CONTACTS" handler={this.enableDetailState}
        personList={this.state.otherContacts} />
    </div>
  );
  }
}

export default App;
