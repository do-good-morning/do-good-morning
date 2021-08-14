import React from "react";
import AppRouter from "./Router";
import { createContext, useState } from "react";
import "./App.css";

const DoGoodMorningContext = createContext({});

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formState, setFormState] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <DoGoodMorningContext.Provider
        value={{
          selectedCountry,
          setSelectedCountry,
          formState,
          setFormState,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        <AppRouter />
      </DoGoodMorningContext.Provider>
    </div>
  );
}

export { DoGoodMorningContext };
export default App;
