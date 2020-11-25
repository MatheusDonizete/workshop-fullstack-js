const baseUrl = 'http://localhost:3000/signatures';
const defaultHeaders = new Headers();
defaultHeaders.set('Content-Type', 'application/json');
defaultHeaders.set('Access-Control-Allow-Origin', 'GET, POST');

const getAll = () => {
  return fetch(baseUrl, {
    headers: defaultHeaders
  }).then(res => {
    if (res.status > 300) {
      return Promise.reject(res.status);
    }

    return res.json();
  });
};

export {
  getAll
};
