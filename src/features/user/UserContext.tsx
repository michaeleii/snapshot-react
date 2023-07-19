import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getCurrentUser } from "../../services/apiAuth";

interface User {
  id: string;
  username: string;
}

interface UserContextType {
  currentUser: User | null;
  isLoadingUser: boolean;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType>({
  currentUser: null,
  isLoadingUser: false,
  isAuthenticated: false,
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });
  const currentUser = data ?? null;
  const isAuthenticated = !!currentUser;
  return (
    <UserContext.Provider
      value={{ currentUser, isLoadingUser: isLoading, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");

  return context;
}

export default UserProvider;
export { useUser };
