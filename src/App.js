//https://www.youtube.com/watch?v=zIY87vU33aA
import './App.css';
import React from 'react';
import task from './example/task.json'
import Tasks from './components/tasks'

class App extends React.Component {
  state = {
    task: task
  }

render(){

 return <div>
   {
     <Tasks tasks={this.state.task}/>
   }
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