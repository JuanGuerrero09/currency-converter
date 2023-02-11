import React, { useEffect, useState, useRef } from "react"
import { convertValue } from "../services/getCurrencies"
import { SelectOptions } from "./SelectOptions"

type CurrencyHolderProps = {
    actualCurrency: string,
    actualValue:number,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export function CurrencyHolder({actualCurrency, handleChange, handleSelect, actualValue, handleFocus}: CurrencyHolderProps) {

  const [currentCurrency, setCurrentCurrency] = useState('USD')
  const [currentValue, setCurrentValue] = useState<number>(1)
  const previousCurrency = useRef('USD')


  useEffect(() => {
    console.log('currency changed', currentCurrency, actualCurrency)
    if (currentValue === undefined) return
    if (currentCurrency === actualCurrency){
      setCurrentValue(actualValue)
    }
    if (currentCurrency !== actualCurrency){
      const newValue = convertValue({currentValue: actualValue, fromCurrency: actualCurrency, toCurrency: currentCurrency})
      newValue.then(res => {
        setCurrentValue(res)
      })
    }
  }, [actualValue])

  useEffect(() => {
    if (currentCurrency !== previousCurrency.current){
      const newValue = convertValue({currentValue: actualValue, fromCurrency: previousCurrency.current, toCurrency: currentCurrency})
      newValue.then(res => {
        setCurrentValue(res)
      })
      previousCurrency.current = currentCurrency
    }

  }, [currentCurrency])
  

  const selectCurrency = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrentCurrency = event.target.value
    setCurrentCurrency(newCurrentCurrency)
  }


  return (
    <div className="currencyHolder">
      <input
        type="number"
        id="fromValue"
        onChange={handleChange}
        onFocus={handleFocus}
        value={currentValue}
      />
      <select name="fromCurrency" id="fromCurrency" defaultValue={'USD'} onChange={(event:React.ChangeEvent<HTMLSelectElement>) => {
        handleSelect(event)
        selectCurrency(event)
      }}>
        <SelectOptions/>
      </select>
    </div>
  );
}
