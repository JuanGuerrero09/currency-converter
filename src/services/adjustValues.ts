export const adjustValue = (value: string | number) => {
    const valueFloat = (typeof value === 'string')? parseFloat(value): value
    return Math.round(valueFloat*100)/100
  }