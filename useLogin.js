import React from "react";

export const useLogin = (isAuthenticated) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
   const [err, setErr] = React.useState('');

  React.useEffect(() => {
    isAuthenticated ? (document.location.href = "/") : null;
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return !!password; 
  };

  const setAuth = () => {
    localStorage.setItem("isAuth", true);
    document.location.href = "/";
  };

  async function validate (e) {
    e.preventDefault();
    const verifiedEmail = await validateEmail(email);
    const verifiedPassword = await validatePassword(password);
    if(verifiedEmail && verifiedPassword) {
      setAuth();
    }else{
      setErr('invalid email ')
    };
    
  };

  return {
    validate,
    setEmail,
    setPassword,
    err
  };
};
