import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routerPaths from 'router/router'
import '@/styles/globals.css'

const router = createBrowserRouter(routerPaths)

// stop memory leak
window.addEventListener('unload', function () {
    document.documentElement.innerHTML = ''
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
