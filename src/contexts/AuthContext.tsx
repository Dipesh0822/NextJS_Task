import React, { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRouter } from "next/router";
import { useCreateUserMutation } from "../store/query/auth.query";
import { toast } from "react-toastify";

const initialValues = {
  user: null,
  login: function ({}) {
    throw new Error("Function not implemented.");
  },
  logout: function () {
    throw new Error("Function not implemented.");
  },
};

export const AuthContext = createContext(initialValues);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const [addNewUser] = useCreateUserMutation();

  const register = (data: { name: any; email: any; password: any }) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    addNewUser(userData)
      .unwrap()
      .then((res) => {
        toast.success(`User Registration successfull`);
        setUser({ name: userData.name, email: userData.email });
        setTimeout(() => router.replace("/dashboard"), 1000);
      })
      .catch((error) => {
        toast.error("Unable to register. Please try again.");
      });
  };

  const router = useRouter();

  const logout = () => {
    setUser(null);
    router.push("/auth/login");
  };

  const login = async (data: any) => {
    setUser({ email: data.email });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
