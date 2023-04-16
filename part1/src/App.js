import Mensaje from './Mensajes.js';

const Description = () => {
  return <h1>
    Dias Dennis, espero estes bien. 
    </h1>
}

const App = (props) => {
  return (
  <div className="App">
    <Mensaje color='red' message='Estamos trabajando' />
    <Mensaje color='Yellow' message='En un curso de React'/>
    <Mensaje color='blue' message='XD...' />
    <Mensaje color='blue' message='Solo es un texto random' />
    <Description color='black'  />
  </div>
  )
}
const Dennis ={
  name:'Dennis Ramirez',
  age: 22,
  education: 'PhD',
  greet: function(){
    console.log("Hi, it's " + this.name)
  },
}
Dennis.growOlder = function(){
  this.age += 1
}
setTimeout(Dennis.greet.bind(Dennis), 1000)


export default App;

