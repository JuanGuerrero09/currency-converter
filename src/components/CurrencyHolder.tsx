import React, { useEffect, useState, useRef } from "react"
import { convertValue } from "../services/getCurrencies"
import { SelectOptions } from "./SelectOptions"
import { useContext } from "react"
import { ContextCurrency } from "../context/ContextValue";


type CurrencyHolderProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export function CurrencyHolder({handleChange, handleSelect, handleFocus}: CurrencyHolderProps) {

  const [currentCurrency, setCurrentCurrency] = useState('USD')
  const [currentValue, setCurrentValue] = useState<number>(1)
  const previousCurrency = useRef('USD')
  const {activeCurrency, activeValue} = useContext(ContextCurrency)


  useEffect(() => {
    console.log('currency changed', currentCurrency, activeCurrency)
    if (currentValue === undefined) return
    if (currentCurrency === activeCurrency){
      setCurrentValue(activeValue)
    }
    if (currentCurrency !== activeCurrency){
      const newValue = convertValue({currentValue: activeValue, fromCurrency: activeCurrency, toCurrency: currentCurrency})
      newValue.then(res => {
        setCurrentValue(res)
      })
    }
  }, [activeValue])

  useEffect(() => {
    if (currentCurrency !== previousCurrency.current){
      const newValue = convertValue({currentValue: activeValue, fromCurrency: previousCurrency.current, toCurrency: currentCurrency})
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
