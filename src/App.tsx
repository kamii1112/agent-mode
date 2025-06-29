import './index.css'
import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './lib/routes'
import { AppProvider } from './context/app-context'

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
