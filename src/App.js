import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {UP_panel} from './components/UP_panel/UP_panel';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {FormContacts} from './components/form_contacts/FormContacts';
import {Footer} from './components/footer/Footer';  

import './App.css';

function App() {
  return (
    <>
      <UP_panel />
      <Routes>
        <Route path="/cities" element={<Header />} /> 
        <Route path="/properties" element={<Header />} />
        <Route path="/blog" element={<Header />} />
        <Route path="/video" element={<Header />} />
        <Route path="/contacts" element={<Header />} />
        <Route path="/login" element={<Header />} />
        <Route path="/signup" element={<Header />} />
      </Routes>
      <Header />
      <Main />
      <FormContacts />
      <Routes>
        <Route path="/allcities" element={<Footer />} /> 
        <Route path="/blog" element={<Footer />} />
        <Route path="/video" element={<Footer />} />
        <Route path="/contacts" element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;