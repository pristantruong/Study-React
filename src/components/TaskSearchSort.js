import React, { Component } from 'react';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';
class SearchSort extends Component {
    render() {
        return (
            <div className="row mt-15">
                <TaskSearch
                    // onSearch={this.props.onSearch} do sử dụng redux
                />
                {/* Sort */}
                <TaskSort
                    // onSort={this.props.onSort} // do sử dụng redux
                    // sortBy={this.props.sortBy}
                    // sortValue={this.props.sortValue} 
                />
            </div>
        );
    }
}

export default SearchSort;
