import { ReactNode, createContext, useState } from "react";


const initialValue = {isCollapsed: false, toggleSidebarCollapse:() =>{}
};

export const SidebarContext = createContext(initialValue);

interface Props{
    children:ReactNode | ReactNode[];
}

const SidebarProvider = ({children}:Props) =>{
    const [isCollabsed,setIsCollabsed] = useState<boolean>(false);

    const toggleSidebarCollapse = () => {
        setIsCollabsed((prev) => !prev);
    }

    return<SidebarContext.Provider 
    value={{isCollabsed,toggleSidebarCollapse}}
    >{children}</SidebarContext.Provider>
}

export default SidebarProvider;