import { GoogleLogin } from "@react-oauth/google";
import { LoginController } from "../login.controller";
import {ImageConstants} from "../../../../constants/image.constants"
const Login = () => {
  const { onSuccess, onError } = LoginController();
  return (
    <div className="block md:flex gap-10 items-center justify-center min-h-[80vh] px-5">
      <div className="space-y-6 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold">Welcome Back 👏</h1>
        <p className="text-lg">
          Today is a new day. it's your day. You shape it. <br /> Sign in to
          start rating today.
        </p>

        <div className="w-96">
          <GoogleLogin onSuccess={onSuccess} onError={onError} size="large"/>
        </div>
      </div>
      <div>
        <img src={ImageConstants.Login_image} alt="" className="h-128 md:h-screen" />
      </div>
    </div>
  );
};

export default Login;
