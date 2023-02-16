import { useEffect, useState, useRef } from 'react';
import { convertValue } from '../services/getCurrencies';

export default function useCurrencies({activeCurrency, activeValue}:any) {
    const [currentCurrency, setCurrentCurrency] = useState("USD");
    const [currentValue, setCurrentValue] = useState<number>(1);
    const previousCurrency = useRef("USD");
    useEffect(() => {
        if (currentValue === undefined) return;
        if (currentCurrency === activeCurrency) {
          setCurrentValue(activeValue);
        }
        if (
          currentCurrency !== activeCurrency ||
          currentCurrency !== previousCurrency.current
        ) {
          const newValue = convertValue({
            currentValue: activeValue,
            fromCurrency: activeCurrency,
            toCurrency: currentCurrency,
          });
          newValue.then((res) => {
            setCurrentValue(res);
          });
        }
      }, [activeValue, currentCurrency]);
  return {setCurrentCurrency, currentValue}
}
