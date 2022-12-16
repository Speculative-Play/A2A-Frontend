import APICall from "./APICall";
import A2AEndpoints from "./endpoints";

export function GetUserProfile() {
  return APICall(A2AEndpoints.userProfile.url, A2AEndpoints.userProfile.method);
}
export function UpdateUserProfile(_data) {
  return APICall(
    A2AEndpoints.updateUserProfile.url,
    A2AEndpoints.updateUserProfile.method,
    _data
  );
}
export function UpdateUserAvatar(_data) {
  return APICall(
    A2AEndpoints.updateUserAvatar.url,
    A2AEndpoints.updateUserAvatar.method,
    _data
  );
}

export function UserResponses() {
  return APICall(
    A2AEndpoints.userResponses.url,
    A2AEndpoints.userResponses.method
  );
}

export function MatchProfileResponses() {
    return APICall(
        A2AEndpoints.matchResponses.url,
        A2AEndpoints.matchResponses.method
    );
}
export function ParentViewProfile() {
    return APICall(
        A2AEndpoints.viewChild.url,
        A2AEndpoints.viewChild.method
    );
}
export function ChangeResponseVisibility(_responseID, _data) {
    return APICall(
        A2AEndpoints.toggleResponseVisibility.url + _responseID,
        A2AEndpoints.toggleResponseVisibility.method,
        _data
    );
}
export function GetMatchProfile(_matchProfileID) {
    return APICall(
      A2AEndpoints.getMatchProfile.url + _matchProfileID,
      A2AEndpoints.getMatchProfile.method
    );
}
