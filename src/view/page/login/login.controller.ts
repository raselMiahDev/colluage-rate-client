//@ts-ignore
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "../../../store/user.store";
import { useNavigate } from "react-router-dom"
import { RouteUrl } from "../../router/url";
export const LoginController = () => {
    const setUser = useAuthStore.getState().setUser
    const navigate = useNavigate();
    return {
        onSuccess: (credentialResponse: any) => {
            const decoded: any = jwtDecode(credentialResponse.credential);
            console.log(decoded);
            setUser({
                aud: decoded.aud || "",
                azp: decoded.azp || "",
                email: decoded.email || "",
                email_verified: decoded.email_verified || "",
                exp: decoded.exp || "",
                given_name: decoded.given_name || "",
                iat: decoded.iat || "",
                iss: decoded.iss || "",
                jti: decoded.jti || "",
                name: decoded.name || "",
                nbf: decoded.nbf || "",
                picture: decoded.picture || "",
                sub: decoded.sub || ""
            });
            navigate(RouteUrl.RATING, { replace: true });
            // window.location.reload();
        },
        onError: () => {
            console.log("Login Failed");
        }
    };
};
