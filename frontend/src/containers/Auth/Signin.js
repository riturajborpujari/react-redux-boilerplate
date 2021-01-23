import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';

import * as AuthActions from '../../store/actions/Auth';
import Auth from '../../services/Auth';
import Button from '../styled/Button';

const SigninForm = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector(state => state.auth);

  /*if user is already authenticated */
  if (isSignedIn) return <Redirect to='/' />;

  return (
    <div className="auth-wrapper">
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          Auth.signin(values, user => {
            if (user) {
              /** Auth succeeded */
              dispatch(AuthActions.SignIn(user));
            }
            else {
              /** 
               * Auth failed
               * @todo SHOW error message 
               */
            }
            setSubmitting(false);
          })
        }}

        validate={values => {
          let errors = {};

          if (values.password.length < 8) {
            errors.password = "Password must be of 8 characters"
          }
          return errors;
        }}
      >
        {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>

              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email && (
                <div className="auth-feedback">{errors.email}</div>
              )}

              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && touched.password && (
                <div className="auth-feedback">{errors.password}</div>
              )}

              <Button
                onClick={handleSubmit}
                bg="#28D"
                color="#FFF"
                disabled={isSubmitting}
                rounded
              >Sign In</Button>
            </form>
          )
        }
      </Formik>
    </div>
  );
}
export default SigninForm;