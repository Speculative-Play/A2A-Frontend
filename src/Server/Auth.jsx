import APICall from "./APICall";
import A2AEndpoints from "./endpoints";

export function Login(_email, _password) {
  const data = JSON.stringify({
    session: {
      email: _email,
      password: _password,
    },
  });

  return APICall(A2AEndpoints.login.url, A2AEndpoints.login.method, data);
}

export function Logout() {
  return APICall(A2AEndpoints.logout.url, A2AEndpoints.logout.method, null);
}

export function Signup(_email, _password, isUser) {
  const data = JSON.stringify({
    account: {
      email: _email,
      password: _password,
      account_type: isUser ? "user" : "parent",
    },
  });

  return APICall(A2AEndpoints.signup.url, A2AEndpoints.signup.method, data);
}

export function CreateUser(_firstName, _lastName) {
  //MSA: Need input from Ursula: how is this formatted?
  const data = JSON.stringify({
    user: {
      firstName: _firstName,
      lastName: _lastName,
    },
  });

  return APICall(
    A2AEndpoints.createUserProfile.url,
    A2AEndpoints.createUserProfile.method,
    data
  );
}

export function GetUserProfile() {
  // Cookie based authentication
  return APICall(
    A2AEndpoints.userProfile.url,
    A2AEndpoints.userProfile.method,
    null
  );
}

export function SearchChild(_email) {
  const data = JSON.stringify({
    email: _email 
  }); 

  return APICall(A2AEndpoints.searchChild.url, A2AEndpoints.searchChild.method, data);
}

export function DeleteAccount () {
  return APICall(A2AEndpoints.deleteAccount.url, A2AEndpoints.deleteAccount.method);
}

