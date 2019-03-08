import React from 'react'
import { connect } from 'react-redux'
import { creatingSmurf } from '../actions'

const button = {
    width: '100%',
    padding: '20px',
    margin: '20px 0',
    fontSize: '20px',
    background: 'blue',
    color: 'white',
    cursor: 'pointer'
}

class SmurfsForm extends React.Component {

    state = {
        name: '',
        age: '',
        height: ''
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.props.creatingSmurf(this.state)} >
                <p>Name: <input
                    type='text'
                    onChange={this.handleInput} 
                    name='name'
                    value={this.state.name}
                    placeholder='name'                        
                /></p>
                <p>Age: <input
                    type='text'
                    onChange={this.handleInput} 
                    name='age'
                    value={this.state.age}
                    placeholder='age'            
                /></p>
                <p>Height: <input
                    type='text'                    
                    onChange={this.handleInput} 
                    name='height'
                    value={this.state.height}
                    placeholder='height'
                /></p>
                <button
                    style={button} 
                    onClick={() => this.submitSmurf}>Add Smurf</button>
            </form> 
        )
    }
}

const mapStateToProps = state => {
    return {
        creatingSmurf: state.creatingSmurf
    }
}

export default connect(mapStateToProps, { creatingSmurf })(SmurfsForm)