import React from 'react';
import Task from './task'
import PropTypes from 'prop-types'

class Tasks extends React.Component {

    render(){
        return this.props.tasks.map(elem =>
            <Task 
            metodoeliminar={this.props.metodoeliminar} 
            checkdone={this.props.checkdone} 
            task={elem} key = {elem.id} />
            )
    }
}
 
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
 
export default Tasks;