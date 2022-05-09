//https://www.youtube.com/watch?v=zIY87vU33aA
import './App.css';
import React from 'react';
import task from './example/task.json'

//componenetes
import Tasks from './components/tasks'
import TasksForm from './components/taskform'
import Post from './components/post'

class App extends React.Component {
  state = {
    task: task
  }

addtask = (title,descripcion) => {
console.log("agregando task");

  const newtask = {
    title: title,
    description: descripcion,
    id: this.state.task.length
  }

this.setState({
  task: [...this.state.task, newtask]
})

}

deletetask = (id) => {

  

const newtaskfiltadas = this.state.task.filter(task => task.id !== id)


console.log(newtaskfiltadas)

this.setState(
  {
    task: newtaskfiltadas
  }
)

}

checkdone = (id) => {
  const newtask = this.state.task.map(task => {
    if (task.id === id){
      task.done = !task.done
    }

    return task

  } )
  
  this.setState(
    {
      task: newtask
    }
  )

}

render(){

 return <div>
     <TasksForm addtask={this.addtask}/>
    <Tasks 
    checkdone = {this.checkdone} 
    metodoeliminar={this.deletetask} 
    tasks={this.state.task}/>
      <Post/>
   </div>
}
}

export default App;









/* 

PRIMERA PARTE DEL VIDEO

class Holamundo extends React.Component {

  state = {
    show: true
  }
  
  toggleshow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){
    return (
      <div id="helloid" >
      <h3>{this.props.subtitle}</h3>
     {this.props.mytexto}
     <button onClick={this.toggleshow}>Toggle show</button>
    </div>
    )
  }else{
    return (
      <h1>No hay datos
<button onClick={this.toggleshow}>Toggle show</button>

      </h1>
      

    )
  }
}
}

function App() {
  return (
    //JSX
    <div >
      componentes: <Holamundo mytexto="Hola 1" subtitle="impresum"/>
      <Holamundo mytexto="Hola!" subtitle="impresum 2"/>
      <Holamundo mytexto="Hi!!" subtitle="impresum 3"/>
      <Holamundo mytexto="Hello!!!" subtitle="impresum 3"/>
    </div>

  )
} */