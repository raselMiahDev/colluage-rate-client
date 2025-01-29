import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFoundPage from "../page/not-found/not-found.page"
// import LoginPage from "../page/login/login.page"
// import ProtectedRoute from "./protected.route"
import HomePage from "../page/home/home.page";
// import PublicRoute from "./public.route"
import { RouteUrl } from "./url";
import SearchResultPage from "../page/search-result/search-result.page";
import SingleProfilePage from "../page/single-profile/single-profile.page";
import RatingPage from "../page/rating/rating.page";
import ReportPage from "../page/report/report.page";
import LoginPage from "../page/login/login.page";
import SignUpPage from "../page/sign-up/sign-up.page";
import AboutYouPage from "../page/about-you/about-you.page";

export default function RootRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RouteUrl.HOME} element={<HomePage />} />
          <Route path={RouteUrl.SEARCH_RESULT} element={<SearchResultPage />} />
          <Route path={RouteUrl.RATING} element={<RatingPage />} />
          <Route path={RouteUrl.REPORT} element={<ReportPage />} />
          <Route path={RouteUrl.LOGIN} element={<LoginPage />} />
          <Route path={RouteUrl.SIGN_UP} element={<SignUpPage />} />
          <Route path={RouteUrl.ABOUT_YOU} element={<AboutYouPage />} />
          <Route
            path={RouteUrl.SINGLE_PROFILE}
            element={<SingleProfilePage />}
          />
          {/* <Route
                        path={RouteUrl.LOGIN}
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    /> */}

          {/* <Route path={RouteUrl.NOT_FOUND} element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
