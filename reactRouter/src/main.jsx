import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github, { InfoLoader } from './components/Github' 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} /> 
      <Route 
      loader={InfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
