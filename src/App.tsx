import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import './App.css'
import { allRoutes } from './Routes';
import { Suspense } from 'react';
import Toast from './components/toast';
import FullScreenLoader from './components/loader';

const router = createBrowserRouter(allRoutes);

function App() {

  return (
    <HelmetProvider>
      <Suspense fallback={<FullScreenLoader />}>
        <RouterProvider router={router} />
        <Toast />
      </Suspense>
    </HelmetProvider>
  )
}

export default App
