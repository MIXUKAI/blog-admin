import React from 'react';
import { message } from 'antd';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import LoginForm from './Form';

const url = `${baseApiUrl}/authenticate`;

class Login extends React.Component {
  handleSubmit = (value) => {
    axios.post(url, value)
      .then(res => {
        if (res.status === 200) {
          const { token } = res.data;
          message.success('登录成功');
          localStorage.setItem('token', token);
          this.props.history.goBack();
        }
      }).catch(err => {
        console.error(err);
        message.error("密码输入错误!")
      });
  }

  render() {
    return (
      <div className="lg-container">
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Login;
