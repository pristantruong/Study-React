import * as types from './../constants/actionTypes'

var initialState = false; //close Form
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state; // lấy trường hợp ngược lại của state hiện tại
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            // cập nhật lại state
            // state = false; ==> cách 2
            // return state
            return false;
        default:
            return state;
    }
};

export default myReducer;