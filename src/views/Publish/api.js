import baseApiUrl from '../../utils/api';
import moment from 'moment';
import axios from 'axios';

export const fetchAllArticles = (resolve, reject) => {
  const url = `${baseApiUrl}/article/all`;
  axios.get(url)
    .then(res => {
      const data = res.data;
      const listData = data.map(item => {
        return {
          title: item.title,
          description: item.description,
          createAt: moment(item.createAt).format('YYYY-MM-DD'),
          tags: item.tags,
          id: item._id
        };
      })
      resolve(listData)
    }).catch(err => {
      reject(err);
    })
};

export const deleteArticle = (id) => {
  const url = `${baseApiUrl}/article/delete/${id}`;
  console.log(url);
  // TODO: 这样不行
  // return axios.post(url, { headers: { Authorization: "Bearer " + localStorage.getItem('token') }});
  return axios({ method: 'POST', url: url, headers: { Authorization: "Bearer " + localStorage.getItem('token')}});
};
