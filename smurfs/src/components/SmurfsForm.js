import React from 'react'
import { connect } from 'react-redux'
import { createSmurf } from '../actions'

class SmurfsForm extends React.Component {

    state = {
        name: '',
        age: '',
        height: ''
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitSmurf() {
        const { name, age, height } = this.state;
        this.props.createSmurf
    }

    render() {
        return (
            <form>
                Name: <input
                    type='text'
                    onChange={this.handleInput} 
                    name='name'
                    value={this.state.name}
                    placeholder='name'                        
                />
                Age: <input
                    type='text'
                    onChange={this.handleInput} 
                    name='age'
                    value={this.state.age}
                    placeholder='age'            
                />
                Height: <input
                    type='text'                    
                    onChange={this.handleInput} 
                    name='height'
                    value={this.state.height}
                    placeholder='height'
                />
                <button onClick={() => this.submitSmurf}>Add Smurf</button>
            </form> 
        )
    }
}

const mapStateToProps = state => {
    return {
        creatingSmurf: state.creatingSmurf
    }
}

export default connect(mapStateToProps, { createSmurf })(SmurfsForm)