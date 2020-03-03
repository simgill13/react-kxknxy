import React from "react";
import { useLogin } from "./useLogin";

const Login = ({isAuthenticated}) => {
  const { validate, setEmail, setPassword } = useLogin(isAuthenticated);
  return (
    <>
      <div className='welcome-header'> Welcome </div>
      <form name="Login" onSubmit={(e)=>validate(e)}>
        <p className='form-name' >LOGIN</p>
        <br />
        <input
          className='form-input'
          required
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          name="email"
        />
        <input
         className='form-input'
          required
          type='password'
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
        <button  className='form-input' type="submit" >
          login
        </button>
      </form>
    </>
  );
};

export default Login;
