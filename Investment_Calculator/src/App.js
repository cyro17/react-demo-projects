import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Result from './Components/Results';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const inputIsValid = userInput.duration >=1; 
    
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevuserInput => {
       return {
          ...prevuserInput,
          [inputIdentifier]: +newValue

       }
    });
 }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {inputIsValid ?
        <Result input={userInput} /> : 
        <p className="center">
          Please enter a duration greater than zero
        </p> }
    </>
  );
}

export default App;
