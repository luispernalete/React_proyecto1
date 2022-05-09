import React from 'react';


export default class Taskform extends React.Component {


    state = {
        title: '',
        description: ''
    }

    eventocambio = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    enviar = (e) => {
        e.preventDefault();

       this.props.addtask(this.state.title,this.state.description);
    }

    render(){
    return <form onSubmit={this.enviar}>
                <input 
                name="title" 
                type="text" 
                placeholder='escribe la tarea' 
                onChange={this.eventocambio}
                value={this.state.title}
                />
                <br />
                <textarea 
                name="description" 
                placeholder='escribe la descripcion' 
                onChange={this.eventocambio}
                value={this.state.description}
                />
                <br />
                <input  type= "submit"></input>
            </form>
        
    }
}
 
