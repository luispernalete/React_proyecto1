import React from 'react';


class task extends React.Component {

    render(){
        return <div>
            {this.props.task.title} - 
            {this.props.task.description} - 
            {this.props.task.done}  - 
            {this.props.task.id}
             <input type="checkbox"></input>
             <button>X</button>
        </div>
    }
}



export default task;