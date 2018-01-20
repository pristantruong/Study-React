//khởi tạo state ban đầu
var initialState = false; //vì status có giá trị mặc định là false

//tạo reducer cho redux (reducer là 1 function bt) - có 2 tham số 1 là state 2 là action
//mục đích của reducer là trả ra state mới
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state = !state; //vì state chỉ có giá trị true hoặc fasle như khai báo ở trên cùng (kiểu boolean)
        return state;
    }
    return state;
}

export default myReducer;