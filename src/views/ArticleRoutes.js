import React from 'react';
import { Route } from 'react-router-dom';

// some views about of articles
import AddArticle from './article/Add';
import Published from './article/Publish';
import Drafts from './article/Draft';

const ArticleRoutes = ({ match }) => {
  return (
    [
      <Route path={`${match.url}/add`} component={AddArticle} />,
      <Route path={`${match.url}/publish`} component={Published} />,
      <Route path={`${match.url}/draft`} component={Drafts} />
    ]
  );
};

export default ArticleRoutes;
