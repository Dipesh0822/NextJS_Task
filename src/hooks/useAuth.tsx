import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TInitialValues } from "../types";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  return useContext(AuthContext);
};
