import {createStore} from 'redux';

//khởi tạo state ban đầu
var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

//tạo reducer cho redux (reducer là 1 function bt) - có 2 tham số 1 là state 2 là action
//mục đích của reducer là trả ra state mới
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS'){
        state.status = !state.status;
        return state;
    }
    if (action.type === 'SORT'){   
        var { by, value } = action.sort; // by = action.sort.by
        var { status } = state; // status = state.status
        return {
            status : status,
            sort : {
                by : by,
                value : value
            }
        }
    }
    return state;
}

const store = createStore(myReducer);
console.log('default' ,store.getState());
//thực hiện công việc thay đổi status
var action = {type: 'TOGGLE_STATUS'};
store.dispatch(action); 
console.log('changed status' ,store.getState());

//thực hiện công việc name từ z - a
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1
    }
}
store.dispatch(sortAction);
console.log('SORT', store.getState());

