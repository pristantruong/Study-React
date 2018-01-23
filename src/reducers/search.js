import * as types from './../constants/actionTypes'

var initialState =  ''; //keyword kiểu string
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;

        default:
            return state;
    }
};

export default myReducer;