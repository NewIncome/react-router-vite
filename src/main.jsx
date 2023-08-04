import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import Root, { loader as rootLoader } from './routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  }
  /*{ // Having this link separate like this, instead of being
      // in the children array in the rootElement, it renders
      // alone on the whole page
    path: 'contacts/:contactId',
    element: <Contact />
  }*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
