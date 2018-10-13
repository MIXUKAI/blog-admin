import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import MyLayout from './layout';
import './App.css';

import ArticleRoutes from './views/article/ArticleRoutes';
import TagPage from './views/Tags';
import Login from './views/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        // TODO: 这里可以做个内容页面的路由
        <MyLayout>
          <Route exact path="/" component={TagPage} />
          <Route path="/article" component={ArticleRoutes} />
          <Route path="/tag" component={TagPage} />
        </MyLayout>
      </Switch>
    </Router>
  )
}

export default App;
