import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, message} from 'antd';
import axios from 'axios';

import baseApiUrl from '../../utils/api';

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  success = (res) => {
    if (res.data.code === 0) {
      message.success('标签添加成功');
    } else {
      message.error('添加标签失败');
    }
    this.clearField();
    this.onClose();
  }

  fail = (err) => {
    message.error('添加标签失败');
    console.error(err);
    this.clearField();
    this.onClose();
  }

  onClose = () => {
    this.setState({ visible: false });
  }

  clearField = () => {
    this.props.form.setFieldsValue({'tagName': ''});
  }

  onSubmit = () => {
    const tagName = this.props.form.getFieldValue('tagName');
    const url = `${baseApiUrl}/tag/add`;
    const data = { name: tagName };
    axios.post(url, data)
      .then(this.success)
      .catch(this.fail);
  };

  // TODO: 改善下
  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.visible })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          title="新建"
          width={250}
          placement="right"
          onClose={this.onClose}
          maskClosable={false}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row>
              <Col span={24}>
                <Form.Item label="标签名">
                  {getFieldDecorator('tagName', {
                    rules: [{ required: true, message: '请输入标签名' }],
                  })(
                    <Input
                      style={{ width: '100%' }}
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              关闭
            </Button>
            <Button onClick={this.onSubmit} type="primary">提交</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(DrawerForm);