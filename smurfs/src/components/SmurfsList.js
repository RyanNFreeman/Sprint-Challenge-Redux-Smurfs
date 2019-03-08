import React from 'react';


const style = {
    width: '500px',
    
}

const flex = {
    display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const box = {
    width: '40%',
    border: '1px solid black',
    margin: '5px',
    background: 'lightBlue',
    borderRadius: '8px'
}

const SmurfsList = props => {
    return (
        <div style={style}>
            <div style={flex}>
            {props.smurfs.map(smurf => 
            <div key={smurf.id}  style={box}>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </div>)}
            </div>
            <div>

             </div>
        </div>
    );
}

 export default SmurfsList 