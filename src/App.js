import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyComponent brand="Apple" price="50000"></MyComponent>
      <MyComponent brand="Microsoft" price="5000"></MyComponent>
      <MyComponent brand="Google" price="0"></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function MyComponent(props) {
  const [points, setPoints] = useState(1)
  const MyStyle = {
    borderRadius: '10px',
    border: '3px solid royalblue'
  };

  const handleAddPoint = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div className="myone" style={{ padding: '10px'/* , margin: '20px' */ }} style={MyStyle}>
      <h1>Yo yo mama! {props.brand}</h1>
      <button onClick={handleAddPoint}>Add Point</button>
      <p>asking rate: {props.price}, Mypoints: {points}</p>
      <p>I can write and edit my component</p>
    </div>
  )
}
export default App;
