import { useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { Model } from '../Login/Login';

function Register() {
  return (
    <div className="main">
      <section className="signup">
        <div className="container2">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title text-4xl font-extrabold">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group flex items-center gap-x-3">
                  <UserOutlined />
                  <input
                    className="input focus:outline-none w-full"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group flex items-center gap-x-3">
                  <MailOutlined />
                  <input
                    className="input focus:outline-none w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group flex items-center gap-x-3">
                  <LockOutlined />
                  <input
                    className="input focus:outline-none w-full"
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group flex items-center gap-x-3">
                  <LockOutlined />
                  <input
                    className="input focus:outline-none w-full"
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="form-group flex gap-2">
                  <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                  <label className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{' '}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="input form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <Canvas camera={{ fov: 70, position: [20, 20, 65] }}>
                  <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} position={[0, 0, 50]} />
                    <Model />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                  </Suspense>
                </Canvas>
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
