//Packages
import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

//Source files
import AuthPage from '../Modules/Welcome/Auth/SignIn';
import GetMatchPage from '../Modules/Home/GetMatch/GetMatchPage';
import ProfilePage from '../Modules/Profile/ProfilePage/ProfilePage';
import LandingPage from '../Modules/Welcome/HomeScreen/LandingPage';
import SignUp from "../Modules/Welcome/Auth/SignUp";
import ChildOnboarding from "../Modules/Welcome/OnboardingTutorialChild/ChildOnboarding";
import ParentOnboarding from "../Modules/Welcome/OnboardingTutorialParent/ParentOnboarding";
import SearchChild from "../Modules/Welcome/Auth/SearchChild";
import ProfileNotFound from "../Modules/Welcome/Auth/ProfileNotFound";
import ParentRecommendations from "../Modules/Parents/ParentsStarred";

//Component
function PageRoutes(props){
    return <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/profile' exact element={<ProfilePage />} />
          <Route path='/auth' exact element={<AuthPage />} />
          <Route path='/create-account' exact element={<SignUp />} />
          <Route path='/get-match' exact element={<GetMatchPage />} />
          <Route path='/onboarding' exact element={<ChildOnboarding />} />
          <Route path='/onboarding-parent' exact element={<ParentOnboarding />} />
          <Route path='/search-child' exact element={<SearchChild />} />
          <Route path='/profile-not-found' exact element={<ProfileNotFound />}/>
          <Route path='/parent-stars' exact element={<ParentRecommendations />}/>
        </Routes>
      </Router>
    </div>
}

export default PageRoutes;
