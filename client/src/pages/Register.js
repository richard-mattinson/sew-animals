import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = "http://localhost:4000";


const Register = () => {
  const navigate = useNavigate();
  const [ registerData, setRegisterData ] = useState({
    email: "",
    password: "",
    retypedPassword: "",
  });
  console.log("Register State", registerData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = registerData;
    
    if (registerData.password !== registerData.retypedPassword) {
      console.log("Passwords don't match");
      return;
    }
    
    fetch(`${apiUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then(() => {
    navigate("/login")
    });
  };
  return (
    <>
      <form className="sign-up" onSubmit={handleSubmit}>
        <div class="m-2">
          <p className="text-primary">SIGN UP</p>
          <label for="registerEmailInput" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="registerEmailInput"
            onChange={handleChange}
            required
          />
        </div>
        <div class="m-2">
          <label for="registerPasswordInput" class="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="registerPasswordInput"
            onChange={handleChange}
            required
          />
        </div>
        <div class="m-2">
          <label for="registerRetypePasswordInput" class="form-label">
            Retype Password
          </label>
          <input
            name="retypedPassword"
            type="password"
            class="form-control"
            id="registerRetypePasswordInput"
            onChange={handleChange}
            required
          />
        </div>
        {/* <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="m-2 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
