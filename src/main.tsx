import { StrictMode } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import "@assets/css/index.css"

import { createRoot } from 'react-dom/client'
import { router } from '@routes/__root'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('root element is required')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)