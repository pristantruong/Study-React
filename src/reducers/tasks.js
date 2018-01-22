import * as types from './../constants/actionTypes'

// hàm random chuỗi
var ramdomString = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    // Tạo càng nhiều càng khó trùng
    return ramdomString() + ramdomString() + '-' + ramdomString() + '-' + ramdomString();
}

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id : generateID(),
                name: action.task.name,
                status: action.task.status 
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state)); 
            return [...state];
        default:
            return state;
    }
};

export default myReducer;