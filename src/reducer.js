import { combineReducers } from 'redux';
import { reducer as tokens } from './add_form';


export default combineReducers({
    tokens: tokens
})
