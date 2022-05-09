import React from 'react';
import Task from './task'


class tasks extends React.Component {

    render(){
        return this.props.tasks.map(elem =>
            <Task key = {elem.id} task={elem}/>
            )
    }
}



export default tasks;