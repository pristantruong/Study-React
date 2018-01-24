import React, { Component } from 'react';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';
class SearchSort extends Component {
    render() {
        return (
            <div className="row mt-15">
                <TaskSearch/>
                {/* Sort */}
                <TaskSort/>
            </div>
        );
    }
}

export default SearchSort;
