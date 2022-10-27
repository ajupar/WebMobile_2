import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

    // Teht 2.10 - muistiinpanojen poistaminen
    // poistetaan parametrina olevan id:n mukainen muistiinpano palvelimelta
    // axios.delete-metodilla
    // Sitten vastauksen saamisen jälkeen ladataan lista uudstaan, eli reloadList --> axios.get()
    // Kyselyikkuna kysyy varmistusta (if-lohko)



// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
