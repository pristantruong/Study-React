import * as types from './../constants/actionTypes'

var initialState = {}; //state lúc này là 1 object
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        default:
            return state;
    }
};

export default myReducer;