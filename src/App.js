import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import MyLayout from './layout';
import './App.css';

import ArticleRoutes from './views/article/ArticleRoutes';
import TagList from './views/tag/Tags';

const App = () => {
  return (
    <Router>
      <MyLayout>
        <Route path="/article" component={ArticleRoutes} />
        <Route path="/tags" component={TagList} />
      </MyLayout>
    </Router>
  )
}

export default App;
