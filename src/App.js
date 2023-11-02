import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const SimpleButton = styled.button`
  color: white;
  background-color: green;
  `;

const LargeButton = styled(SimpleButton)`
  font-size:50px
  `;

const ReactButton = props=>{
  return <button>{props.children}</button>
}

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>react</ReactButton>
    </div>
  );
}

export default App;
