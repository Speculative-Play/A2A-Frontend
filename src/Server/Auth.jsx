import APICall from "./APICall";
import A2AEndpoints from "./endpoints";

export function Login(_email, _password) {
  const data = JSON.stringify({
    session: {
      email: _email,
      password: _password,
    },
  });

  const response = APICall(
    A2AEndpoints.login.url,
    A2AEndpoints.login.method,
    data
  );
}

export function Logout() {
  return APICall(A2AEndpoints.logout.url, A2AEndpoints.logout.method, null);
}

export function GetUserProfile() {
  return APICall(A2AEndpoints.userProfile.url, A2AEndpoints.userProfile.method, null);
}
