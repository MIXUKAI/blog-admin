import baseApiUrl from '../../utils/api';


// 获得tag的数据，用于selector
export const fetchTags = (resolve, reject) => {
  const url = `${baseApiUrl}/tag/`;
  axios.get(url)
    .then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
}