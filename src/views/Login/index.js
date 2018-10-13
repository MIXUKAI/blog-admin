import React from 'react';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import LoginForm from './Form';

const url = `${baseApiUrl}/authenticate`;

export default class extends React.Component {
  handleSubmit = (value) => {
    console.log(value);

    axios.post(url, value)
      .then(res => {
        if (res.status === 200) {
          const { token } = res.data;
          localStorage.setItem('token', token);
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
