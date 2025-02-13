import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateTrip from './create-trip/index.tsx'
import Header from './components/ui/custom/header.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import {GoogleOAuthProvider} from "@react-oauth/google"
import ViewTrip from './view-trip/[tripid]/index.tsx'
import Mytrips from './my-trips/index.tsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripid',
    element:<ViewTrip/>
  },
  {
    path:'/my-trips',
    element:<Mytrips/>
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OUTH_CLIENT_ID}>
      <Header/>
      <Toaster></Toaster>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
