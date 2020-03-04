import React from "react";
import { useLogin } from "./useLogin";

const Login = ({isAuthenticated}) => {
  const { validate, setEmail, setPassword ,err} = useLogin(isAuthenticated);
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
        <p  className='form-input'> {err}</p>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p> disclaimer - due to busy schedule did not have time to style the application :( But  All functionality is there</p>
      </form>
    </>
  );
};

export default Login;
