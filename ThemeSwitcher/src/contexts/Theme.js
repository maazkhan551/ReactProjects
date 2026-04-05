import { createContext, useContext } from "react";

export const ContextTheme = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ContextTheme.Provider

export default function useTheme(){
    return useContext(ContextTheme)
}