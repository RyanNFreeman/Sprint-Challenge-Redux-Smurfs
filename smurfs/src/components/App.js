import React, { Component } from 'react';
import SmurfsForm from './SmurfsForm'
import './App.css';
import { getSmurfs } from '../actions'
import { connect } from 'react-redux'
import SmurfsList from './SmurfsList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to my Redux version of Smurfs!</div>
        <h1>These are your current smurfs, be gentle with them:</h1>
        <div style={style}>
        <SmurfsList smurfs = {this.props.smurfs} />
        </div>
        <h1>Are you ready to bring home another smurf?</h1>
        <h4>Add a smurf to my family:</h4>

        <SmurfsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, 'inside mSTP')
    return {
      smurfs: state.smurfs,     
    }
}

export default connect(mapStateToProps, {getSmurfs})(App);
