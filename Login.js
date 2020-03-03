import React from "react";
import { useLogin } from "./useLogin";

const Login = ({isAuthenticated}) => {
  const { validate, setEmail, setPassword } = useLogin(isAuthenticated);
  return (
    <>
      <div className='welcome-header'> Welcome </div>
      <form name="Login" onSubmit={(e)=>validate(e)}>
        LOGIN
        <br />
        <input
          required
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          required
          type='password'
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" >
          login
        </button>
      </form>
    </>
  );
};

export default Login;
