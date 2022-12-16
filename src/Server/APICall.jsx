import axios from "axios";

const DOMAIN = "https://a2a-api.onrender.com/api/v1";

function APICall(_url, _method, _data) {
  if (_url[_url.length - 1] === "/") {
    // URLs with '/' at the end require an identity at the end.
    // Must be provided.
    return false;
  }

  const request = {
    method: _method,
    url: DOMAIN + _url,
    headers: { 
      'Content-Type': 'application/json'
    },
  };

  if (_data) {
    request.data = _data;
  } else if (_method === "POST") {
    // POST Request must have data.
    return false;
  }

  axios(request).then((res) => {
    console.log(res);
    console.log(res.statusText);
    if (res.status != 200) {
      return false;
    }
    return res;
  });
}

export default APICall;
