import React from "react";
import { createContext, useState } from "react";

export const CurrencyContext = createContext(null as any);

export function ContextProvider({ children }: any) {
  const [activeValue, setActiveValue] = useState<number>(1);
  const [activeCurrency, setActiveCurrency] = useState<string>("USD");

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
    <CurrencyContext.Provider
      value={{
        activeCurrency,
        activeValue,
        handleChange,
        handleFocus,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
