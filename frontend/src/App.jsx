import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

import DevelopmentWing from './pages/DevelopmentWing';

import useSiteData from './hooks/useSiteData';
import useLenis from './hooks/useLenis';

import Home from './pages/Home';
import Wings from './pages/Wings';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';

function Shell() {
  const data = useSiteData();
  useLenis();

  return (
    <>
      <CustomCursor />
      <PageTransition />

      <Navbar wings={data.wings} />

      <main>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/wings" element={<Wings data={data} />} />
          <Route path="/resources" element={<Resources data={data} />} />
          <Route path="/gallery" element={<Gallery data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/wings/dev" element={<DevelopmentWing data={data} />} />

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin/*"
            element={<Admin data={data} />}
          />
        </Routes>
      </main>

      <Footer data={data} />
    </>
  );
}

export default function App() {
  return <Shell />;
}
