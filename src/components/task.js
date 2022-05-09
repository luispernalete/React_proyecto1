import React from 'react';
import PropTypes from 'prop-types'
//import './task.css'

class task extends React.Component {

    stylecomplete() {

        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }

    }

    render(){
        const {task} = this.props;
        var estiloboton = {
            fontSize: '18px',
            background: '#fff'
        }
        //<div className='red'>
        return <p style={this.stylecomplete()}>
            {task.title} - 
            {task.description} - 
            {task.done}  - 
            {task.id}
             <input 
             onChange={this.props.checkdone.bind(this,task.id)} 
             type="checkbox"
                 checked={task.done}
                 />
             <button onClick={this.props.metodoeliminar.bind(this,task.id)} style={estiloboton}>X</button>
        </p>
    }

    
     

}

task.propTypes = {
    task: PropTypes.object.isRequired
 }   

export default task;