import React from 'react';
import './App.css';
import Layout from '../Layouts/layout';
import BurgerBuilder from './burgerBuilder/burgerBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder/>
        </Layout>
    </div>
  );
}

export default App;
