import React from 'react'
import './FilterButton.css'
import {toggleFilter} from '../store/modules/Filter/actions'
import { connect } from 'react-redux'

const FilterButton = ({handleFilter})  => {

    const onClick = () => {
        handleFilter();
    }


    return (
        <div>
            <button className='FilterButton' onClick={onClick}>Filtrer tâche non résolue</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleFilter: ()=> dispatch(toggleFilter())
    }
}

export default connect(null, mapDispatchToProps)(FilterButton)
