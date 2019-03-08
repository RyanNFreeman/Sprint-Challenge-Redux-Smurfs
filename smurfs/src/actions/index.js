import axios from 'axios'
import reducers from '../reducers'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const CREATE_SMURF_START = 'CREATE_SMURF_START'
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS'
export const CREATE_SMURF_FAIL = 'CREATE_SMURF_FAIL'

const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START});
  axios
    .get(URL)
    .then(res => {
      console.log(res.data, 'inside fetch')
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAIL,
        payload: err ///come back later and turn this into a message
      })
    })
}

export const creatingSmurf = (data) => dispatch => {
  dispatch({type: CREATE_SMURF_START});
  axios.post(URL, data)
  .then(res => {
    dispatch({
      type: CREATE_SMURF_SUCCESS,
      payload: reducers.data
    })
  })
  .catch(err => {
    dispatch({
      type: CREATE_SMURF_FAIL ,
      payload: err ///come back later and turn this into a message
    })
  })
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
