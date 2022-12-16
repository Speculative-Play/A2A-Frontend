import APICall from "./APICall";
import A2AEndpoints from "./endpoints";

export function GetAllMatchmakingCategories() {
  return APICall(
    A2AEndpoints.matchmakingCategories.url,
    A2AEndpoints.matchmakingCategories.method
  );
}
export function GetAllQuestions() {
  return APICall(
    A2AEndpoints.matchmakingQuestions.url,
    A2AEndpoints.matchmakingQuestions.method
  );
}
export function GetQuestionsInCategory(_categoryID) {
  return APICall(
    A2AEndpoints.categoryQuestions.url + _categoryID,
    A2AEndpoints.categoryQuestions.method
  );
}
export function GetPieChart() {
  return APICall(
    A2AEndpoints.piechartPercentages.url,
    A2AEndpoints.piechartPercentages.method
  );
}
export function SavePieChart(_newPercentages) {
  return APICall(
    A2AEndpoints.savePiechartPercentages.url,
    A2AEndpoints.savePiechartPercentages.method,
    _newPercentages
  );
}
export function MatchingAlgorithm(_piechartPercentages) {
  return APICall(
    A2AEndpoints.match.url,
    A2AEndpoints.match.method,
    _piechartPercentages
  );
}
export function SearchMatchesAttributes(_attributes) {
  return APICall(
    A2AEndpoints.filterMatches.url,
    A2AEndpoints.filterMatches.method,
    _attributes
  );
}
export function ParentStarredMatchProfiles() {
  return APICall(
    A2AEndpoints.parentsStarred.url,
    A2AEndpoints.parentsStarred.method
  );
}
export function StarMatchProfile(_data) {
  return APICall(
    A2AEndpoints.starProfile.url,
    A2AEndpoints.starProfile.method,
    _data
  );
}
export function UnstarMatchProfile() {
  // Delete Call
  return APICall(
    A2AEndpoints.unstarProfile.url,
    A2AEndpoints.unstarProfile.method
  );
}
export function FavouriteMatchProfiles() {
  return APICall(
    A2AEndpoints.userFavorites.url,
    A2AEndpoints.userFavorites.method
  );
}
export function SaveMatchProfile(_data) {
  return APICall(
    A2AEndpoints.favoriteProfile.url,
    A2AEndpoints.favoriteProfile.method,
    _data
  );
}
export function ForgetMatchProfile() {
  // Delete Call
  return APICall(
    A2AEndpoints.unfavoriteProfile.url,
    A2AEndpoints.unfavoriteProfile.method
  );
}
