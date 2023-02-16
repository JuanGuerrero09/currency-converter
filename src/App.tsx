import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyHolder } from "./components/CurrencyHolder";
import { adjustValue } from "./services/adjustValues";
import { ContextCurrency } from "./context/ContextValue";

function App() {
  const [activeCurrency, setActiveCurrency] = useState<string>("USD");
  const [activeValue, setActiveValue] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = adjustValue(event.target.value);
    setActiveValue(currentValue);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionSelected = e.target.value;
    setActiveCurrency(optionSelected);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const newActiveCurrency = (event.target.nextSibling as HTMLSelectElement)
      .value;
    const newActiveValue = adjustValue(event.target.value);
    setActiveCurrency(newActiveCurrency);
    setActiveValue(newActiveValue);
  };

  return (
    <div className="App">
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <form>
          <ContextCurrency.Provider value={{
            activeCurrency,
            activeValue
          }}>
            <CurrencyHolder
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
            <CurrencyHolder
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
            <CurrencyHolder
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
          </ContextCurrency.Provider>
        </form>
      </main>
      <footer>Juan David</footer>
    </div>
  );
}

export default App;
