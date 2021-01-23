import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import { Box, Button, Form, FormField, Heading } from '../../../components';
import Auth from '../../../services/Auth';
import * as AuthActions from '../../../redux/actions/Auth';

const SigninForm = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector(state => state.auth);

  /*if user is already authenticated */
  if (isSignedIn) return <Redirect to='/' />;

  return (
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
        values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit
      }) => (
        <Form onSubmit={handleSubmit} padding={4} rounded outlined>
          <Heading as="h2" padding={2}>Sign in</Heading>

          <FormField label="Email" padding={2} name="email" type="text" required
            placeholder="Email" value={values.email} onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="auth-feedback">{errors.email}</div>
          )}

          <FormField label="Password" padding={2} name="password" type="password"
            required placeholder="Password" value={values.password} onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="auth-feedback">{errors.password}</div>
          )}

          <Box padding={2}>
            <Button onClick={handleSubmit} bg="#28D" color="#FFF" disabled={isSubmitting} rounded >Sign In</Button>
          </Box>
        </Form>
      )
      }
    </Formik>
  );
}
export default SigninForm;