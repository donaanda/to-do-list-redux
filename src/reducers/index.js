import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import listReducer from './list_reducer';

export default combineReducers({
    list: listReducer,
    form: formReducer
});