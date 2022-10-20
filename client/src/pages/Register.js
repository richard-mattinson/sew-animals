const Register = () => {
  return (
    <>
      <form className="sign-up">
        <div class="m-2">
          <p className="text-primary">SIGN UP</p>
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class="m-2">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="m-2">
          <label for="exampleInputPassword2" class="form-label">
            Retype Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword2"
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

export default Register;
