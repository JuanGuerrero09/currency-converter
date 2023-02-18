import { SelectOptions } from "./SelectOptions";
import { useContext } from "react";
import { adjustValue } from "../services/adjustValues";
import { CurrencyContext } from "../context/ContextValue";
import useCurrencies from "../hooks/useCurrencies";

export default function CurrencyHolder() {
  const { handleFocus, handleChange } = useContext(CurrencyContext);
  const { setCurrentCurrency, currentValue } = useCurrencies();

  const selectCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrentCurrency = event.target.value;
    setCurrentCurrency(newCurrentCurrency);
  };

  return (
    <form className="currencyHolder">
      <input
        type="number"
        id="fromValue"
        onChange={handleChange}
        onFocus={handleFocus}
        value={adjustValue(currentValue)}
        className=""
      />
      <select
        name="fromCurrency"
        id="fromCurrency"
        defaultValue={"USD"}
        onChange={selectCurrency}
      >
        <SelectOptions />
      </select>
    </form>
  );
}
