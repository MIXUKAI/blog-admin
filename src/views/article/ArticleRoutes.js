import React from 'react';
import { Route } from 'react-router-dom';

// some views about of articles
import AddArticle from './Add';
import Published from './Publish';
import Drafts from './Draft';

const ArticleRoutes = ({ match }) => {
  return (
    [
      <Route path={`${match.url}/add`} component={AddArticle} key="add"/>,
      <Route path={`${match.url}/publish`} component={Published} key="publish"/>,
      <Route path={`${match.url}/draft`} component={Drafts} key="draft" />
    ]
  );
};

export default ArticleRoutes;
