import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import MyLayout from './layout';
import './App.css';

import ArticleRoutes from './views/ArticleRoutes';

const App = () => {
  return (
    <Router>
      <MyLayout>
        <Route path="/article" component={ArticleRoutes}/>
      </MyLayout>
    </Router>
  )
}

export default App;
