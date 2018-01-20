//khởi tạo state ban đầu
var initialState = {
  by: 'status',
  value: 1 // 1: tăng , -1: giảm    
}

//tạo reducer cho redux (reducer là 1 function bt) - có 2 tham số 1 là state 2 là action
//mục đích của reducer là trả ra state mới
var myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        var { by, value } = action.sort; // by = action.sort.by
        return {
            by,
            value
        }
    }
    return state;
}

export default myReducer;