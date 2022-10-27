import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 2.1 - A separate phonebook component

const Header = (props) => {
  return (
    <h1>
      <p>{props.title}</p>
    </h1>
  )
}

const Entry = ({entryname, phone}) => {

  return (
    <div>
      <tr>
        <td>Name: {entryname}</td><td>Number: {phone}</td>
      </tr>
    </div>
  )
}

const Contents = ({ contacts }) => {

  return (
    <div>
      <table>
          {/* <Entry entryname = {contacts[0].name} phone = {contacts[0].phonenumber} /> */}

        {contacts.map(entry => <Entry entryname={entry.name} phone={entry.phonenumber} />)}
      </table>
    </div>
  )
}

// Teht 2.1 luodaan tämmöinen elementti, joka ottaa sisäänsä Appissa asetetut parametrit
const Phonebook = (props) => {


  return (
    <div>
      <Header title='Superadvanced phonebook app'></Header>
      <Contents contacts={props.phonebook.contacts}></Contents>
   


    </div>


  )

}

const App = () => {
  const phonebook = {
    name: 'Superadvanced phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567',
        id: 1
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567',
        id: 2
      },
      {
        name: 'Foo bar',
        phonenumber: '000',
        id: 3
      }
    ]
  }

  return (
    <div>
      <Phonebook phonebook={phonebook} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
