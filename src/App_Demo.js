// import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    </>
  )
}

const App = ()  => {
  //These are all called Hooks with "use" prefix
  //State
  var [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You have changed the counter to " + counter);
  }, [counter]);

  return (
    <div className="App">
    <Person name={'Suwaid'} lastName={"Aslam"}/>
    <Person name={'Umais'} lastName={"Aslam"}/>
    <Person name='Rohan' lastName="Anwar"/>

    <button onClick={() => setCounter((prevCount) =>  prevCount - 1)}>-</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((prevCount) =>  prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
