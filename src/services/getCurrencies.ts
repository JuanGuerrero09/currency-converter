const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '552452fd04msh5ae50cc23ca007ap1c1a2ejsn27d2546f7d9c',
		'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	}
};

type currencyRequest = {
	currentValue: number,
	fromCurrency: string,
	toCurrency: string
}

export const convertValue = async ({currentValue, fromCurrency, toCurrency}:currencyRequest) => {
	const response = await fetch(`https://exchangerate-api.p.rapidapi.com/rapid/latest/${fromCurrency}`, options)
	const json = await response.json()
	const conversionRate = json.rates[toCurrency]
	return currentValue * conversionRate
}