import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const context = React.createContext();
export const CtxConsumer = context.Consumer;
// const ctxProvider = context.Provider;

const animals = ['snake','elephant','lion'];

const routing = (
  <BrowserRouter>
    <context.Provider value={{ animals:animals }}>
      <Routes>
        <Route  path='/' element={ <App /> } />
        <Route path='/header' element={ <Header /> } />
        <Route path='/footer' element={ <Footer /> } />
      </Routes>
    </context.Provider>
  </BrowserRouter>
)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(routing);
