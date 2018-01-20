import {createStore} from 'redux';
import {status, sort}  from './actions/index';
import myReducer from './reducers/index'

const store = createStore(myReducer);
console.log('default' ,store.getState());
//thực hiện công việc thay đổi status
store.dispatch(status()); //status là function truyền từ index.js sang
console.log('changed status' ,store.getState());

//thực hiện công việc name từ z - a
store.dispatch(sort({
    by: 'name',
    value: '-1'
}));
console.log('SORT', store.getState());

