import React from 'react';
import axios from 'axios'


// teht 2.9 Reminder, part 6

// At the moment, the new reminders added to the list are not sent 
// to the server. Change the app so that its state is synchronized with the server state.

const Reminder = ({ name, timestamp }) => {

    return (

        <li>{timestamp}: {name}</li>
    )
}


const ReminderForm = (props) => {

    return (
        <div>
            <form onSubmit={props.addReminderFunction}>
                <div>
                    Sisältö: <input value={props.nameToAdd}
                        onChange={props.handleReminderChange} />
                </div>
                <div>
                    Päiväys: <input value={props.dateToAdd}
                        onChange={props.handleDateChange} />
                </div>
                <div>
                    <button type="submit">Lisää muistutus</button>
                </div>
            </form>
        </div>
    )

}



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reminders: [],
            newName: '',
            newDate: ''
        }
        console.log('constructor')
    }

    // teht 2.8 -- haetaan tiedot palvelimelta
    // tämä componentDidMount() on elinkaarimetodi, jota käytetään käynnistymään
    // silloin, kun komponentti on ladattu onnistuneesti
    componentDidMount() {
        console.log('did mount')
        axios
            .get('http://localhost:3001/reminders')
            .then(response => {
                console.log('promise fulfilled')
                this.setState({ reminders: response.data })
            })
    }

    handleReminderChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleDateChange = (event) => {
        console.log(event.target.value)
        this.setState({ newDate: event.target.value })

    }

    addReminder = (event) => {
        event.preventDefault()

        // teht 2.5:  eri polut sen mukaan,
        // onko muistiinpano jo lisätty
        // toinen mahdollinen ratkaisu some-metodilla:
        // this.state.reminders.some(r => r.name === this.state.newName)
        if (this.state.reminders.map(reminder => reminder.name).includes(this.state.newName)) {

            // muistiinpano on jo lisätty
            console.log('nappia painettu, muistiinpano on jo listalla')
            alert('Ei voida lisätä muistutusta listaan, koska se on jo lisätty!')

        } else {
            console.log('debug else-lohko')

            const newReminderObject = {
                timestamp: this.state.newDate,
                name: this.state.newName
            }

            // Tehtävä 2.9 -- nyt uudet muistiinpanot tallennetaankin palvelimelle
            axios.post('http://localhost:3001/reminders', newReminderObject)
                .then(response => {
                    this.setState({
                        reminders: this.state.reminders.concat(response.data),
                        newName: ''
                    })


                })
        }
    }

    render() {
        console.log('render')


        return (
            <div>
                <h2>Muistutukset</h2>
                <ReminderForm addReminderFunction={this.addReminder} nameToAdd={this.newName}
                    handleReminderChange={this.handleReminderChange} handleDateChange={this.handleDateChange} />


                <h2>Tämänhetkiset muistutukset:</h2>
                <ul>
                    {this.state.reminders.map(reminder => <Reminder key={reminder.name} name={reminder.name} timestamp={reminder.timestamp} />)}
                </ul>
            </div>
        )
    }
}

export default App


