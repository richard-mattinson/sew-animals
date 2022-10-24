import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = "http://localhost:4000";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  console.log("Login State", loginData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = loginData;

    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const login = await response.json();
    console.log("Handle Login response", login);
    // below: local storage takes a key/value pair
    localStorage.setItem("token", login.data);
    setLoggedIn(true)
    navigate("/");
  };

  return (
    <>
      <form className="sign-in" onSubmit={handleSubmit}>
        <div class="m-2">
          <p className="text-primary">SIGN IN</p>
          <label for="loginEmailInput" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="loginEmailInput"
            onChange={handleChange}
            required
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="m-2">
          <label for="passwordInput" class="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="passwordInput"
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" class="m-2 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
