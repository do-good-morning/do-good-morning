import React from "react";
import AppRouter from "./Router";
import { createContext, useState } from "react";
import "./App.css";

const DoGoodMorningContext = createContext({});

function App() {
  const [selectedCountry, setSelectedCountry] = useState("all");

  return (
    <div>
      <DoGoodMorningContext.Provider
        value={{
          selectedCountry,
          setSelectedCountry,
        }}
      >
        <AppRouter />
      </DoGoodMorningContext.Provider>
    </div>
  );
}

export { DoGoodMorningContext };
export default App;
