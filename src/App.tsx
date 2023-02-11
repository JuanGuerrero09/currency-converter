import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CurrencyHolder } from "./components/CurrencyHolder";


function App() {
  
  const [activeInput, setActiveInput] = useState<string | null>(null)
  const [activeValue, setActiveValue] = useState<number | null>(null)
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const currentElement = event.target.getAttribute('name')
    const currentValue = parseFloat(event.target.value)
    setActiveInput(currentElement)
    setActiveValue(currentValue)
    console.log(activeInput, activeValue)

    useEffect

  }
  
  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) =>{ 

  }


  return (
    <div className="App">
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <form>
          <div className="currencyHolder">
            <input type="number" name="currencyOne" id="fromValue" onChange={handleChange} />
            <select name="fromCurrency" id="fromCurrency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="COP">COP</option>
            </select>
          </div>
          <div className="currencyHolder">
            <input type="number" name="currencyTwo" id="toValue" />
            <select name="toCurrency" id="toCurrency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="COP">COP</option>
            </select>
          </div>
          <CurrencyHolder currencyName="currencyThree" handleChange={handleChange} handleSelect={handleSelect}/>
        </form>
      </main>
      <footer>Juan David</footer>
    </div>
  );
}

export default App;
