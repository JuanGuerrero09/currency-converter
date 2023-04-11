import "./App.css";
import { ContextProvider } from "./context/ContextValue";
import Header from "./components/Header";
import CurrencyHolder from "./components/CurrencyHolder";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App relative h-screen w-screen overflow-y-hidden">
      <Header />
      <main className="flex flex-col items-center mt-8 ">
        <p>Simple and real-time currency converter</p>
        <p className="mb-8">Powered by: <a href="https://rapidapi.com/exchangerateapi/api/exchangerate-api/">ExchangeRate-API</a></p>
        <ContextProvider>
          <CurrencyHolder />
          <CurrencyHolder />
          <CurrencyHolder />
          <CurrencyHolder />
          <CurrencyHolder />
        </ContextProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
