import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'react-tabs/style/react-tabs.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';


// tan Stack query setup
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="container mx-auto">
          <RouterProvider router={router} />
        </div>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
