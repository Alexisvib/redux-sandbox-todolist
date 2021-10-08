import React from 'react'
import { removeTodo, updateTodo } from '../store/modules/Todo/actions'
import './todo.css'
import { connect } from 'react-redux'

const Todo = ({id, description, resolved, handleCheckBox, handleDelete}) => {

    const handleClick = () => {
        handleCheckBox(id, !resolved);
    }

    const handleButton = () => {
        handleDelete(id)
    }

    return (
        <div className = 'todo'>
            <li> {description}  Résolue  : {resolved ? 'OUI' : 'NON'}</li>
            <input type='checkbox' checked={resolved} onChange={handleClick}></input>
            <button onClick={handleButton}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleCheckBox: (id, resolved) => dispatch(updateTodo(id, resolved)),
        handleDelete: (id) => dispatch(removeTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)