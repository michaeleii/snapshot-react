import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingUser } = useUser();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate]);

  if (isLoadingUser) return null;

  if (isAuthenticated) return children;
}
export default ProtectedRoute;
