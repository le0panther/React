import { createContext,useContext } from "react";



export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{

    },
    lightTheme:()=>{

    },
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
// yeh function kya kar raha hai pata jarur kar lena 
//ye ek custom hook hai 


