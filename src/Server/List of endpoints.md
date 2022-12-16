#### List of endpoints 


| Module | Title | HTTP Method | Status | Endpoint URL | Authorization Required |
| ----- | ----------- | ----------- | ------ | ----------------- | ------ | 
| Auth | Login | POST | **OK**  | https://a2a-api.onrender.com/api/v1/login | No |
| Auth | Logout | DELETE | **OK**  | https://a2a-api.onrender.com/api/v1/logout | Yes | 
| Auth | Signup/Create account | POST | **400** | https://a2a-api.onrender.com/api/v1/signup | No | 
| Auth | Create User Profile   | POST | **INCOMP** | https://a2a-api.onrender.com/api/v1/signup-user | Not sure | 
| Auth | Parent signup search for child  | POST | **OK & NULL** | https://a2a-api.onrender.com/api/v1/search-child | No | 
| Auth | Create Parent Profile | POST | **PEND** | https://a2a-api.onrender.com/api/v1/signup-parent | No | 
| Auth | Delete account | DELETE | **PEND** | https://a2a-api.onrender.com/api/v1/delete-account | Yes |
| Profile | User Profile | GET | **OK** | https://a2a-api.onrender.com/api/v1/user_profile | Yes |
| Profile | Update User Profile | PUT | **PEND** | https://a2a-api.onrender.com/api/v1/user_profile/edit | Yes |
| Profile | Update User Avatar | PUT | **PEND** | https://a2a-api.onrender.com/api/v1/user_profile/avatar| Yes |
| Profile | User's Responses  | GET | **OK** | https://a2a-api.onrender.com/api/v1/my_question_answers | Yes | 
| Profile | Match Profile's Responses  | GET | **PEND** | https://a2a-api.onrender.com/api/v1/match_question_answers | Yes | 
| Profile | Parent's View of Profile  | GET | **PEND** | https://a2a-api.onrender.com/api/v1/view-child | Yes | 
| Profile | Change response visibility  | PUT | **PEND** | https://a2a-api.onrender.com/api/v1/toggle_question/[user_question_answer_id] | Yes | 
| Profile | Get Specific Match Profile | GET | **OK & NULL** | https://a2a-api.onrender.com/api/v1/match_profiles/[match_profiles_id] | No | 
| Matching | Matchmaking Categories | GET | **OK** | https://a2a-api.onrender.com/api/v1/matchmaking_categories | No | 
| Matching | Matchmaking Questions | GET | **OK** | https://a2a-api.onrender.com/api/v1/questions | No | 
| Matching | Questions In a Category | GET | **OK** | https://a2a-api.onrender.com/api/v1/questions/matchmaking_category/[match_category_id] | No | 
| Matching | Get Pie Chart Percentages  | GET | **OK** | https://a2a-api.onrender.com/api/v1/category_percentages | Yes | 
| Matching | Save Pie Chart Percentages  | POST | **PEND** | https://a2a-api.onrender.com/api/v1/category_percentages | Yes | 
| Matching | Matches using Pie chart values | POST | **PEND** | https://a2a-api.onrender.com/api/v1/match | Yes | 
| Matching | Search for Matches based on Attributes  | POST | **PEND** | https://a2a-api.onrender.com/api/v1/search-matches | Yes | 
| Matching | Starred Match Profiles by parent | GET | **OK** | https://a2a-api.onrender.com/api/v1/starred_match_profiles | Yes | 
| Matching | Save (Star) Match Profile | POST | **PEND** | https://a2a-api.onrender.com/api/v1/starred_match_profiles | Yes | 
| Matching | Delete a Starred Match Profile | DELETE | **PEND** | https://a2a-api.onrender.com/api/v1/starred_match_profiles/delete | Yes | 
| Matching | Favourite Match Profiles by User | GET | **OK** | https://a2a-api.onrender.com/api/v1/favourited_match_profiles | Yes | 
| Matching | Save (Favourite) Match Profile | POST | **PEND** | https://a2a-api.onrender.com/api/v1/favourited_match_profiles | Yes | 
| Matching | Delete a Favourite Match Profile | DELETE | **PEND** | https://a2a-api.onrender.com/api/v1/favourited_match_profiles/delete | Yes | 