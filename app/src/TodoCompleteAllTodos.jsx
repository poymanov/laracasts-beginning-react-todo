import React from 'react';
import PropTypes from 'prop-types';

TodoCompleteAllTodos.propTypes = {
    completedAllTodos: PropTypes.func.isRequired
}

function TodoCompleteAllTodos(props) {
    return (
        <div>
            <div onClick={props.completedAllTodos} className="button">
                Check All
            </div>
        </div>
    );
}

export default TodoCompleteAllTodos;