import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const INITIAL_SMURF = 'INITIAL_SMURF'
export const CREATE_SMURF = 'CREATE_SMURF'

const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: INITIAL_SMURF })
    smurfs
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}

export const createSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/create`, smurf);
  return dispatch => {
    dispatch => ({ type: CREATE_SMURF});
    newSmurf
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
