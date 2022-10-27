import React from 'react';


// Tehtävä 2.4 - Reminder application, part 1

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


