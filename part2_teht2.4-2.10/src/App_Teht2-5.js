import React from 'react';


// teht 2.5 - Reminder, part 2

// metodi Array.includes()

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reminders: [
                {
                    name: 'Buy some eggs',
                    timestamp: "2018-11-10T13:00:00.141Z"
                }
            ],
            newName: ''
        }
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
            const newReminderObject = {
                name: this.state.newName,
                timestamp: new Date().toISOString()
            }

        const tempReminders = this.state.reminders.concat(newReminderObject)

        this.setState({
                reminders: tempReminders,
                newName: ''
            })

        console.log('nappia painettu')
        console.log(event.target)

        }
    }

    handleReminderChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    render() {


        return (
            <div>
                <h2>Muistutukset</h2>
                <form onSubmit={this.addReminder}>

                    Name: <input value={this.state.newName}
                        onChange={this.handleReminderChange} />


                    <button type="submit">Lisää muistutus</button>

                </form>
                <h2>Tämänhetkiset muistutukset:</h2>
                <ul>
                    {this.state.reminders.map(reminder => <li key={reminder.name}>{reminder.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default App


