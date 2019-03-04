import React from 'react'
import PersonRow from './PersonRow'

class PersonList extends React.Component {

  render() {

    return (
        <div className="list-block">
          <div className="list-title">
            {this.props.title}
          </div>
          <ul className="contactList">
            {
              this.props.personList.map((person) => {
                return <PersonRow key={person.id.toString()}
                  person={person}
                  handler={this.props.handler}
                  />
              })
            }
          </ul>
        </div>
    )
  }
}

export default PersonList
