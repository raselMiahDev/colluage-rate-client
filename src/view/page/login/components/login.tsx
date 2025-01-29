import { Link } from "react-router-dom";
import { RouteUrl } from "../../../router/url";

const Login = () => {
  return (
    <div className="max-w-5xl space-y-7">
      <h1 className="text-2xl font-bold">Welcome Back</h1>
      <p>
        Today is a new day. it's your day. You shape it. Sign in to start rating
        today.
      </p>

      <div>
        <button>Sign in with Google</button>
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
  );
};

export default Login;
