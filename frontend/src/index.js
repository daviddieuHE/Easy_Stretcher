import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

//rendering de l'application

const root = ReactDOM.createRoot(document.getElementById('root')); // definition de l'element principal du DOM
root.render( //construction du contenu de la div root en fonction des executions du code 
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
//a réexpliquer
// QueryClientProvider -> https://fr.reactjs.org/docs/context.html

