import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import TableGets from './pages/tablesGets.jsx';
import TablePuts from './pages/tablesPuts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/get',
    element: <TableGets/>,
  },
  {
    path: '/put',
    element: <TablePuts/>,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
