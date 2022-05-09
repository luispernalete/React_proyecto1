import React from 'react';



class task extends React.Component {

    render(){
        return this.props.tasks.map(elem =>
            <p key = {elem.id}>
             {elem.title} - {elem.description} - {elem.done}  - {elem.id}
            </p>
            )
    }
}



export default task;