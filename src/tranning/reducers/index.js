import status from './status';
import sort from './sort';
//hợp các reducers với nhau
import {combineReducers} from 'redux';

const myReducer = combineReducers({
    status, //status : status . status lấy từ status.js
    sort // sort : {by :by, value: value}
})

export default myReducer;