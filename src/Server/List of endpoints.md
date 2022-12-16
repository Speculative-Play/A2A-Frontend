#### List of endpoints 


| Title | Status | HTTP Method | Endpoint | Authorization Required |
| ----------- | ----------- | ------ | ----------------- | ------ | 
| Login | **OK** | POST | https://a2a-api.onrender.com/api/v1/login | No |
| Logout | **OK** | DELETE | https://a2a-api.onrender.com/api/v1/logout | Yes | 
| Signup/Create account | **400** | POST | https://a2a-api.onrender.com/api/v1/signup | No | 
| Create User Profile   | **INCOMP** | POST | https://a2a-api.onrender.com/api/v1/signup-user | Not sure | 
| Parent signup search for child  | **PEND** | POST | https://a2a-api.onrender.com/api/v1/search-child | No | 
| Create Parent Profile   | **PEND** | POST | https://a2a-api.onrender.com/api/v1/signup-parent | No | 
| Delete account | **PEND** | DELETE | https://a2a-api.onrender.com/api/v1/delete-account | Yes |
| User Profile | **OK** | GET | https://a2a-api.onrender.com/api/v1/user_profile | Yes |
| Update User Profile | **PEND** | PUT | https://a2a-api.onrender.com/api/v1/user_profile/edit | Yes |
| Update User Avatar | **PEND** | PUT | https://a2a-api.onrender.com/api/v1/user_profile/avatar| Yes |
| Matchmaking Categories | **OK** | GET | https://a2a-api.onrender.com/api/v1/matchmaking_categories | No | 
| Matchmaking Questions | **OK** | GET | https://a2a-api.onrender.com/api/v1/questions | No | 
| Questions In a Category | **OK** | GET | https://a2a-api.onrender.com/api/v1/questions/matchmaking_category/[match_category_id] | No | 
| Get Pie Chart Percentages  | **OK** | GET | https://a2a-api.onrender.com/api/v1/category_percentages | Yes | 
| Save Pie Chart Percentages  | **PEND** | POST | https://a2a-api.onrender.com/api/v1/category_percentages | Yes | 
| Matches using Pie chart values | **PEND** | POST | https://a2a-api.onrender.com/api/v1/match | Yes | 
| User's Responses  | **OK** | GET | https://a2a-api.onrender.com/api/v1/my_question_answers | Yes | 
| Match Profile's Responses  | **PEND** | GET | https://a2a-api.onrender.com/api/v1/match_question_answers | Yes | 
| Parent's View of Profile  | **PEND** | GET | https://a2a-api.onrender.com/api/v1/view-child | Yes | 
| Change response visibility  | **PEND** | PUT | https://a2a-api.onrender.com/api/v1/toggle_question/[user_question_answer_id] | Yes | 
| Get Specific Match Profile | **OK & NULL** | GET | https://a2a-api.onrender.com/api/v1/match_profiles/[match_profiles_id] | No | 
| Search for Matches based on Attributes  | **PEND** | POST | https://a2a-api.onrender.com/api/v1/search-matches | Yes | 
| Starred Match Profiles by parent | **OK** | GET | https://a2a-api.onrender.com/api/v1/starred_match_profiles | Yes | 
| Save (Star) Match Profile | **PEND** | POST | https://a2a-api.onrender.com/api/v1/starred_match_profiles | Yes | 
| Delete a Starred Match Profile | **PEND** | DELETE | https://a2a-api.onrender.com/api/v1/starred_match_profiles/delete | Yes | 
| Favourite Match Profiles by User | **OK** | GET | https://a2a-api.onrender.com/api/v1/favourited_match_profiles | Yes | 
| Save (Favourite) Match Profile | **PEND** | POST | https://a2a-api.onrender.com/api/v1/favourited_match_profiles | Yes | 
| Delete a Favourite Match Profile | **PEND** | DELETE | https://a2a-api.onrender.com/api/v1/favourited_match_profiles/delete | Yes | 