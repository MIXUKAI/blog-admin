import { Modal } from 'antd';

const confirm = Modal.confirm;

function showConfirm({title, content}) {
  confirm({
    title,
    content,
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

export default showConfirm;