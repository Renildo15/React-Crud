import './App.css';
import React, {useState} from "react"
function App() {
  const [values, setValues] = useState();
 

  const handlersChangeValues = value =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = ()=>{
    console.log(values)
  }
  return (
    <div className="App--container">
      <div className="register--container">
        <h1 className="register--title">Scrim Shop</h1>
        <input 
          type="text"
          name="name"
          placeholder="Nome"
          className= "register--input"
          onChange={handlersChangeValues}
        />
        <input 
          type="text"
          name="cost"
          placeholder="Preço"
          className= "register--input"
          onChange={handlersChangeValues}
        />
        <input 
          type="text"
          name="category"
          placeholder="Categoria"
          className= "register--input"
          onChange={handlersChangeValues}
        />
        <button className="register--button" onClick={()=> 
          handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
