import * as types from './../constants/actionTypes'

var initialState = {
    name: '',
    status: -1
}; //state lúc này là 1 object
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10) //radix cơ số 10 nếu k có sẽ warning
            }
        default:
            return state;
    }
};

export default myReducer;