type CurrencyHolderProps = {
    currencyName: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export function CurrencyHolder({currencyName, handleChange, handleSelect}: CurrencyHolderProps) {
  return (
    <div className="currencyHolder">
      <input
        type="number"
        name={currencyName}
        id="fromValue"
        onChange={handleChange}
      />
      <select name="fromCurrency" id="fromCurrency" onSelect={handleSelect}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="COP">COP</option>
      </select>
    </div>
  );
}
