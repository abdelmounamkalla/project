import React from 'react'
import { useRef,useState,useEffect,useContext } from 'react'
import  AuthContext  from '../../../state/AuthProvider'
import axios from '../../../api/axios'
import "./Login.css"

const LOGIN_URL = '/auth';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef= useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd,setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(()=> {
    userRef.current.focus();
  },[])

  useEffect(()=> {
    setErrMsg("");
  },[user,pwd])

  const handleSumbit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ user, pwd }),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed');
      }
      errRef.current.focus();
  }
  }

  return (
    <div className="bg-purple flex items-center justify-center h-screen">
    <div className=" bg-white text-black w-[400px] p-[32px] rounded-lg ">
    {success ? (
        <section >
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) : (
        <section className="text-black max-w-[300px] mx-auto" >
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} 
            aria-live="assertive">{errMsg}</p>
            <h1 className="text-center text-[32px]">Sign In</h1>
            <form onSubmit={handleSumbit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button className={"bg-purple text-white py-4 mt-[20px]"}>
                Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className=" mb-[32px] text-black">
                    {/*put router link here*/}
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
    )
    }
    </div>
    </div>
  )
}

export default Login;