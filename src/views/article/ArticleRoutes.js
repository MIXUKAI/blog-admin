import React from 'react';
import { Route } from 'react-router-dom';

// some views about of articles
import EditPage from '../EditPage';
import Published from '../Publish';
import Drafts from './Draft';

const ArticleRoutes = ({ match }) => {
  return (
    [
      <Route path={`${match.url}/add`} component={EditPage} key="add"/>,
      <Route exact path={`${match.url}/edit/:id`} component={EditPage} key="editArticle"/>,
      <Route path={`${match.url}/edit/draft/:id`} component={EditPage} key="editDraft"/>,
      <Route path={`${match.url}/publish`} component={Published} key="publish"/>,
      <Route path={`${match.url}/draft`} component={Drafts} key="draft" />
    ]
  );
};

export default ArticleRoutes;
