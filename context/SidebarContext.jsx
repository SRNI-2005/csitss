import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
            if (isSidebarOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
    }, [isSidebarOpen]);

    function toggleSidebar(){
        setIsSidebarOpen((prev)=>!prev);
    }

    return (
        <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebar = () => {
  return useContext(SidebarContext);
};
