import { ThemeProvider } from "./ThemeContext";
import { SidebarProvider } from "./SidebarContext"

export const AppProvider = ({children}) =>{

    return (
            <ThemeProvider>
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </ThemeProvider>
    )
}