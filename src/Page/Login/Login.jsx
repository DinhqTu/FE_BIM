import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css';
import signIn from '../../assets/image/signin-image.jpg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container2">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signIn} alt="sing up image" />
              </figure>
              <Link to="/register" className="signup-image-link">
                Create an account
              </Link>
            </div>

            <div className="signin-form">
              <h2 className="form-title text-4xl font-extrabold">Sign up</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group flex items-center gap-2 ">
                  <UserOutlined />
                  <input
                    className="px-2 input focus:outline-none w-full"
                    type="text"
                    name="your_name"
                    id="your_name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group flex items-center gap-2 ">
                  <LockOutlined />
                  <input
                    className="px-2 input focus:outline-none w-full"
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group flex gap-3 ml-1">
                  <input type="checkbox" name="check_remember" id="check_remember" />
                  <div className="">Remember me</div>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="input form-submit"
                    value="Log in"
                  />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <a href="#">
                      <box-icon className="bx-border" type="logo" name="facebook-circle"></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <box-icon type="logo" name="twitter"></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <box-icon name="google" type="logo"></box-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
