import React from "react";

export const useAuth = () => {
  const isAuthenticated = localStorage.getItem("isAuth")
    ? localStorage.getItem("isAuth")
    : false;

  return {isAuthenticated};
};
