import React, { useState,useEffect } from "react";
import "./Auth.css";
import WelcomImg from "../../assets/images/Auth.png";
import { button } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login,register } from "../../features/auth/actions/authActions";
import Loader from "../../components/Loader/Loader";
import Model from "../../components/Model/Model";
import Toaster from "../../components/Toaster/Toaster";


function Auth() {
  // const [firstName, setFirstName] = useState("Karthi");
  // const [lastName, setLastName] = useState("P");
  // const [username, setUsername] = useState("Karthi");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })

  const [inputErrors, setInputErrors] = useState({})
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();                           
  const {loading,error,errorMsg} = useSelector(state => state.auth)
  const handleInput = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
  }
// if(loading){
//   localStorage.clear()
// }

  const vaildation = (formData) => {
    const error = {}

    if (!isLogin) {
      if (formData.firstName == '') {
        error.firstName = "Firstname is required!!"
      }

      if (formData.lastName == '') {
        error.lastName = "Lastname is required!!"
      }

      if (formData.username == '') {
        error.username = "Username is required!!"
      }

    }
    if (formData.email == '') {
      error.email = "Email is required!!"
    }

    if (formData.password == '') {
      error.password = "Password is required!!"
    }
    return error;
  }

  
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("submit");

    let errorVaildation = vaildation(formData)

    setInputErrors(errorVaildation);

    if (Object.keys(errorVaildation).length == 0) {
      if (isLogin) {
        const { email, password } = formData

        let isEmail = email.search("@");

        if (isEmail && isEmail != -1) {  //username or email check
          dispatch(login({ email, password }));
          console.log('signIn in email');
          console.log({ email,password });
          
        } else {
          dispatch(login({  username:email, password }));
          console.log('signIn in username');

        }
      } else {
        dispatch(register(formData));
      }
    }
  };


  const signInForm = () => {
    setIsLogin(!isLogin)
    setInputErrors({})
  }






  return (
    <div className="Auth">
      {/* {inputErrors.email && <Toaster msg="User not found" />} */}
       
      {loading && <Model><Loader color='wh' size='md'/></Model>}
      <div className="Auth-container">
        <div className="left">
          <img className="image" src={WelcomImg} alt="welcome-image" />
        </div> 
        <div className="right" >
          <form className="form" onSubmit={submitHandle} >
            <div className="form-content">
              <h2 className="title">Hello Again!</h2>
              <p className="desc">welcome back you've been missed!</p>
            </div>
            {!isLogin ? (
              <div>
                <div className="form-name-group">
                  <div className="form-group">
                    <input
                      className={inputErrors.firstName ? "inputField  input-error":"inputField"}
                      type="text"
                      placeholder="First name"
                      // value={firstName}
                      // onChange={(e) => setFirstName(e.target.value)}
                      onChange={(e) => handleInput(e)}
                      name="firstName"
                    />
                    {inputErrors.firstName && <p className="error">{inputErrors.firstName}</p>}
                 
                  </div>
                  <div className="form-group">
                    <input
                      className={inputErrors.lastName ? "inputField  input-error":"inputField"}
                      type="text"
                      placeholder="Last name "
                      // value={lastName}
                      // onChange={(e) => setLastName(e.target.value)}
                      onChange={(e) => handleInput(e)}
                      name="lastName"
                    />
                    {inputErrors.lastName && <p className="error">{inputErrors.lastName}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className={inputErrors.username ? "inputField  input-error":"inputField"}
                    type="text"
                    placeholder="username "
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={(e) => handleInput(e)}
                    name="username"

                  />
                  {inputErrors.username && <p className="error">{inputErrors.username}</p>}
                </div>
              </div>
            ) : null}

            <div className="form-group">
              <input
                className={inputErrors.email ? "inputField  input-error" : "inputField"}
                type={isLogin ? 'text' : 'email'}
                placeholder={
                  isLogin ? "Enter username or email" : "Enter email"
                }
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                onChange={(e) => handleInput(e)}
                name="email"


              />
              {inputErrors.email && <p className="error">{inputErrors.email}</p>}
            </div>
            <div className="form-group">
              <input
                className={inputErrors.password ? "inputField  input-error":"inputField"}
                type="password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => handleInput(e)}
                name="password"

              />
              {inputErrors.password && <p className="error">{inputErrors.password}</p>}
            </div>
            <a
              href="/"
              className="recovery-password-btn"
              onClick={(e) => test(e)}
            >
              Recovery Password
            </a>
            <button className="btn login-btn">
              {isLogin ? "Sign In" : "Sign Up"}
            </button>

            <p className="register-btn">

              {isLogin ? "Not a member ": "Already have an account  "}
              <span
                onClick={() => signInForm()}
              >
                {isLogin ? "Register now":"Login"}
              </span>
            </p>
            {error && <h5 className=' error login-error'>{errorMsg}</h5>}

          </form>
          <div className="blur" style={{ top: "10%", right: "10%" }}></div>
          <div className="blur" style={{ top: "18%", left: "0%" }}></div>
          <div className="blur" style={{ bottom: "10%", right: "0" }}></div>
          <div className="blur" style={{ bottom: "0%", left: "0" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
