import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../user/UserContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingUser } = useUser();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  if (isLoadingUser) return null;

  if (isAuthenticated) return children;
}
export default ProtectedRoute;
