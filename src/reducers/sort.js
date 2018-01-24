import * as types from './../constants/actionTypes'

var initialState = {
    by: 'name',
    value: 1 //1: tăng, -1: giảm
}; //state lúc này là 1 object
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default:
            return state;
    }
};

export default myReducer;