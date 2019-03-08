/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCH_START, 
  FETCH_SUCCESS, 
  FETCH_FAIL,
  CREATE_SMURF_START,
  CREATE_SMURF_SUCCESS,
  CREATE_SMURF_FAIL} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
   isLoading: false
 }

 const rootReducer = (state = initialState, action) => {
   console.log('this is the reducer')
   switch (action.type) {
    case FETCH_START:
      return {
        ...state, fetchingSmurfs: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case FETCH_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        err: action.payload
      }
    case CREATE_SMURF_START:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
   }
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default rootReducer
