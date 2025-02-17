import { Link } from "react-router-dom";
import { RouteUrl } from "../../../router/url";
import { GoogleLogin } from "@react-oauth/google";
import { LoginController } from "../login.controller";
import LoginImage from "../../../../assets/login.svg";

const Login = () => {
  const { onSuccess, onError } = LoginController();
  return (
    <div className="flex justify-center items-center space-x-44 ">
      <div className="max-w-5xl space-y-7">
        <h1 className="text-4xl font-bold">Welcome Back 👏</h1>
        <p className="text-lg">
          Today is a new day. it's your day. You shape it. <br /> Sign in to
          start rating today.
        </p>

        <div className="w-96">
          <GoogleLogin onSuccess={onSuccess} onError={onError} size="large" />
        </div>
        <div>
          <p>
            Don't you have an account?{" "}
            <Link to={RouteUrl.SIGN_UP} className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img src={LoginImage} alt="" className="h-screen" />
      </div>
    </div>
  );
};

export default Login;
