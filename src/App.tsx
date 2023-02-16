import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyHolder } from "./components/CurrencyHolder";
import { ContextCurrency } from "./context/ContextValue";
import Header from "./components/Header";

function App() {
  const [activeCurrency, setActiveCurrency] = useState<string>("USD");
  const [activeValue, setActiveValue] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    setActiveValue(+currentValue);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const newActiveCurrency = (event.target.nextSibling as HTMLSelectElement)
      .value;
    const newActiveValue = event.target.value;
    setActiveCurrency(newActiveCurrency);
    setActiveValue(+newActiveValue);
  };

  return (
    <div className="App relative h-screen w-screen overflow-y-hidden">
      <Header />
      <main className="flex flex-col items-center mt-8">
        <ContextCurrency.Provider
          value={{
            activeCurrency,
            activeValue,
          }}
        >
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
      </main>
      <footer className="absolute bottom-2 w-screen flex justify-center">Juan David</footer>
    </div>
  );
}

export default App;
