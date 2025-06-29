import { createContext, useContext, useState, type ReactNode } from "react"

type AppContextType = {
  isDarkMode: boolean
  toggleDarkMode: () => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

// Create default context value
const defaultContext: AppContextType = {
  isDarkMode: false,
  toggleDarkMode: () => { },
  activeTab: "home",
  setActiveTab: () => { },
}

// Create context
const AppContext = createContext<AppContextType>(defaultContext)

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("home")

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode, activeTab, setActiveTab }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use context
export const useAppContext = () => useContext(AppContext)
