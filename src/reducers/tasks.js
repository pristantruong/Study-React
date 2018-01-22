import * as types from './../constants/actionTypes'

// hàm random chuỗi
var ramdomString = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    // Tạo càng nhiều càng khó trùng
    return ramdomString() + ramdomString() + '-' + ramdomString() + '-' + ramdomString();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id)
            result = index;
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
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
        case types.UPDATE_STATUS_TASK:
            id = action.id;
            index = findIndex(state, id); //khi nào bên trong class mới có this.
            // state[index].status = !state[index].status;
            //====C1=======:
            // var cloneTask = {...state[index]}; //tạo ra 1 object mới
            // cloneTask.status = !cloneTask.status;
            // state[index] = cloneTask;
            //====C2========:
            state[index] = {
                ...state[index], //copy ra một state[index mới]
                status : !state[index].status
            };
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; // return về state mới
        case types.DELETE_TASK:
            id = action.id
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};

export default myReducer;