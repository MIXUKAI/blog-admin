import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import MyLayout from './layout';
import './App.css';

// some views about of articles
import AddArticle from './views/article/Add';
import Published from './views/article/Publish';
import Drafts from './views/article/Draft';

const App = () => {
  return (
    <Router>
      <MyLayout>
        <Route path="/article/add" component={AddArticle}/>
        <Route path="/article/publish" component={Published}/>
        <Route path="/article/draft" component={Drafts}/>
      </MyLayout>
    </Router>
  )
}

export default App;
