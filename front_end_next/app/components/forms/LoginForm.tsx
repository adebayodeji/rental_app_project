import './formstyles.css'
function LoginForm() {
    return (
        <div className='login-page'>
          <h3 id='reg-title'>Log into your account</h3>
          <form action="">
            <div className='form-rows'>
              <input type="text" id='form-input' placeholder='E-mail'/>
              <div id='pswd-con'>
                <input type='password' id='form-input' placeholder='Password' />
                <div id='utils'>
                    <div id='essentials'>
                        <input type='checkbox' id='show-password' />
                        <label htmlFor="show-password">Show password</label>
                    </div>
                    <a href="" id='forgot-password'>Forgot password?</a>
                </div>
              </div>
              <button className='reg-btn'>Log in</button>
              <div className='alt-signup'>
                <p id='ins-login'>Don&apost have an account?</p>
                <a href="/users/signup">Sign Up</a>
              </div>
            </div>
          </form>
        </div>
    )
}

export default LoginForm