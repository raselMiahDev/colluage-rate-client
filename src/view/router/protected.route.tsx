import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/user.store";
// import MyLoading from "../components/common/my-loading"
import { RouteUrl } from "./url";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useAuthStore();

  // if (loading) {
  //     return <MyLoading />
  // }
  if (!user) return <Navigate to={RouteUrl.LOGIN} />;

  return <>{children}</>;
}
