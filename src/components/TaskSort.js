import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

    onClick = (sortBy, sortValue) => { 
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle mr-5"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => this.onClick('name', 1)}
                    >
                        A-Z <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle mr-5"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => this.onClick('name', -1)}
                    >
                        Z-A <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle mr-5"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => this.onClick('status', 1)}
                    >
                        Act <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                            id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => this.onClick('status', -1)}
                    >
                        Inv <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button> 
                     {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                       có arrow function mới truyền tham số được 
                        <li onClick={() => this.onClick('name', 1)}>
                            <a role="button" className="sort_selected">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Name A-Z
								</span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a role="button" className="sort_selected">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Name Z-A
								</span>
                            </a>
                        </li >
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a role="button">
                                Status Active
							</a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a role="button">
                                Status Invisible
							</a>
                        </li>
                    </ul> */}

                </div>
            </div>
        );
    }
}

// tạo kết nối để lấy state từ store về biến state đc khai báo lấy từ store
const mapStateToProps = state => {
    return {
        sort: state.sort //trong file index.js (actions)
    };
};

const mapDispatchToProps = (dispatch, props) => { //dispatch giúp thực thi 1 hành độg và props
    return {
        onSort: (sort) => { //sort.by và sort.value
            dispatch(actions.sortTask(sort));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);


