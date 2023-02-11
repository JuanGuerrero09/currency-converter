const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "552452fd04msh5ae50cc23ca007ap1c1a2ejsn27d2546f7d9c",
    "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
  },
};

const getOptions = async () => {
  const response = await fetch(
    `https://exchangerate-api.p.rapidapi.com/rapid/latest/GBP`,
    options
  );
  const json = await response.json();
  const currencyOptions = Object.keys(json.rates);
  return currencyOptions;
};

const allOptions = await getOptions()

export function SelectOptions () {
    //todo put favorite options first
  const favoriteOptions = ["USD", "EUR", "COP"];
  return (
    <>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="COP">COP</option>
      {
        allOptions.map(option => {
            return (<option value={option}>{option}</option>)
        })
      }
    </>
  );
}
