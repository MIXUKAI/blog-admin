import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import LoginForm from './Form';

const url = `${baseApiUrl}/authenticate`;

class Login extends React.Component {
  handleSubmit = (value) => {
    console.log(value);

    axios.post(url, value)
      .then(res => {
        if (res.status === 200) {
          const { token } = res.data;
          localStorage.setItem('token', token);
          this.props.history.push('/');
        }
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="lg-container">
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default withRouter(Login);