import React from 'react';
import './App.css'

import TopBar from './Components/TopBar'
import RecentDonations from './Components/RecentDonations'
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'

// v1. Submitting a donation increases the total amount donated but without keeping track of the donation history
// v2. Take into account donation history

// Questions: 
// 1. We want the Progress Component to display the goal amount and the raised amount so far but these amount are affected by the donations submitted through the form.
// How do we have the DonationForm Component affect the amount displayed in Progress
// when the form is submitted? The answer is Props and lifting the state up. Let's
// explain: We know we can't keep the goal or raised amount only in the state of
// DonationForm or Progress, because:
// 1. If the amounts are kept in Progress, how is DonationForm going to be able to
// update it when a new donation is submitted?
// 2. If the amounts are kept in DonationForm, how are we going to be able to display 
// and update them in Progress?
// Another way to frame this question is: How is communication or sharing of 
// information possible between sibling Components? The answer is: It is NOT possible
// UNLESS it's through their parent (actually any common ancestor).
// So these amounts must live in DonationForm's and Progress' closest common ancestor
// (which is App) so that App can act as keeper, manager and dealer of this information.
// App can share the amounts with its children through props and they can display it.
// App can also share functions that can modify these amounts (set the state) with its
// children through props, so that when the DonationForm is submitted the amounts in
// App change and the new values are reflected in the Progress.

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      goalAmount = 1000,
      raisedAmount = 0
    }
  }
  render() {
    return (
      <div className="App">
        <TopBar />
        <RecentDonations />
        <Progress />
        <DonationForm />
      </div>
    );
  }
}
export default App;
