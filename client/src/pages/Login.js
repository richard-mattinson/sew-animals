const Login = () => {
  return (
    <>
      <form className="sign-in">
        <div class="m-2">
          <p className="text-primary">SIGN IN</p>
          <label for="emailInput" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
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
            type="password"
            class="form-control"
            id="passwordInput"
          />
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
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
