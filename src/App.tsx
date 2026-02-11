import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const DesignStudio = lazy(() => import('./pages/DesignStudio'));
const DesignDetail = lazy(() => import('./pages/DesignDetail'));
const Booking = lazy(() => import('./pages/Booking'));

function App() {
  const location = useLocation();
  return (
    <>
      <CustomCursor />
      <Header />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/design/:id" element={<DesignDetail />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
