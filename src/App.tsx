import "./App.css";
import { ContextProvider } from "./context/ContextValue";
import Header from "./components/Header";
import CurrencyHolder from "./components/CurrencyHolder";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App relative h-screen w-screen overflow-y-hidden">
      <Header />
      <main className="flex flex-col items-center mt-8">
        <ContextProvider>
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
