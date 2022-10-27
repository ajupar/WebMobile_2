import React from 'react'


const Header = (props) => {
    return (
      <h1>
        <p>{props.title}</p>
      </h1>
    )
  }
  
  const Entry = ({ entryname, phone }) => {
  
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

  // teht 2.2 Elementti, joka tulostaa luettelon sisällön koon
  const NrEntries = ({ entriesNr }) => {

    return (
      <div>
        <p>Total number of entries: {entriesNr}</p>
      </div>
    )
  
  }
  
  
  
  // Teht 2.1 luodaan tämmöinen elementti, joka ottaa sisäänsä Appissa asetetut parametrit
  const Phonebook = ({ phonebook }) => {
  
  
    return (
      <div>
        <Header title='Superadvanced phonebook app'></Header>
        <Contents contacts={phonebook.contacts}></Contents>
        <NrEntries entriesNr={phonebook.contacts.length} />
  
  
  
      </div >
  
  
    )
  }


export default Phonebook