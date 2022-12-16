import axios from "axios";

const DOMAIN = "https://a2a-api.onrender.com/api/v1";

function APICall(_url, _method, _body = null) {
  if (_url[_url.length - 1] === "/") {
    // URLs with '/' at the end require an identity at the end.
    // Must be provided.
    return false;
  }

  const request = {
    method: _method,
    url: DOMAIN + _url,
  };

  if (_body) {
    request.body = _body;
  } else if (_method === "POST") {
    // POST Request must have a body.
    return false;
  }

  axios(request).then((res) => res);
}

export default APICall;
