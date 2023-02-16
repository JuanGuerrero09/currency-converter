import { SelectOptions } from "./SelectOptions";
import { useContext } from "react";
import { ContextCurrency } from "../context/ContextValue";
import useCurrencies from "../hooks/useCurrencies";
import { adjustValue } from "../services/adjustValues";


type CurrencyHolderProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export function CurrencyHolder({
  handleChange,
  handleFocus,
}: CurrencyHolderProps) {
  const { activeCurrency, activeValue } = useContext(ContextCurrency);
  const { setCurrentCurrency, currentValue } = useCurrencies({
    activeCurrency,
    activeValue,
  });

  const selectCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrentCurrency = event.target.value;
    setCurrentCurrency(newCurrentCurrency);
  };

  return (
    <div className="currencyHolder">
      <input
        type="number"
        id="fromValue"
        onChange={handleChange}
        onFocus={handleFocus}
        value={adjustValue(currentValue)}
      />
      <select
        name="fromCurrency"
        id="fromCurrency"
        defaultValue={"USD"}
        onChange={selectCurrency}
      >
        <SelectOptions />
      </select>
    </div>
  );
}
