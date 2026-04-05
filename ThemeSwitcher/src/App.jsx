import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode,setThemeMode] = useState("light")
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className={`w-full max-w-sm mx-auto ${themeMode === 'dark' ? 'dark' : ''}`}>
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
