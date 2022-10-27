import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

// teht 2.9 Reminder, part 6

// At the moment, the new reminders added to the list are not sent 
// to the server. Change the app so that its state is synchronized with the server state.



// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
