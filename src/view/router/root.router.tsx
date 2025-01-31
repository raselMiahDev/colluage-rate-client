import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../page/home/home.page";
import { RouteUrl } from "./url";
import SearchResultPage from "../page/search-result/search-result.page";
import SingleProfilePage from "../page/single-profile/single-profile.page";
import RatingPage from "../page/rating/rating.page";
import ReportPage from "../page/report/report.page";
import LoginPage from "../page/login/login.page";
import SignUpPage from "../page/sign-up/sign-up.page";
import AboutYouPage from "../page/about-you/about-you.page";
import { useLoading } from "../../contexts/loading-context";
import { useEffect } from "react";
import LoadingSpinner from "../components/common/loading-spinner";
import UserProfilePage from "../page/user-profile/user-profile.page";

export default function RootRouter() {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);
  return (
    <>
      {loading && <LoadingSpinner />}
      <Routes>
        <Route path={RouteUrl.HOME} element={<HomePage />} />
        <Route path={RouteUrl.SEARCH_RESULT} element={<SearchResultPage />} />
        <Route path={RouteUrl.RATING} element={<RatingPage />} />
        <Route path={RouteUrl.REPORT} element={<ReportPage />} />
        <Route path={RouteUrl.LOGIN} element={<LoginPage />} />
        <Route path={RouteUrl.SIGN_UP} element={<SignUpPage />} />
        <Route path={RouteUrl.ABOUT_YOU} element={<AboutYouPage />} />
        <Route path={RouteUrl.SINGLE_PROFILE} element={<SingleProfilePage />} />
        <Route path={RouteUrl.PROFILE} element={<UserProfilePage />} />
      </Routes>
    </>
  );
}
