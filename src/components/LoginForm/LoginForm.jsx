import React from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import { useDispatch, useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import google from '../../images/google.svg';
import { logIn, signUp } from '../../redux/Auth/authOperations';
import {
  FormLayout,
  Form,
  LoginLabel,
  LoginInput,
  LoginBtn,
  LoginBtnBlock,
  GoogleBtn,
} from './LoginForm.styled';


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIsLogin = useSelector(state => state.auth.isLoggedIn);
  const emailID = shortid.generate();
  const passwordlID = shortid.generate();
  return (
    <FormLayout>
      <p>You can log in with your Google Account:</p>
      <GoogleBtn type="button">
        <img src={google} alt="google" />
      </GoogleBtn>
      <p>Or log in using an email and password, after registering:</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={values => {
          dispatch(logIn(values));

          if (userIsLogin) {
            navigate('/main');
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <LoginLabel htmlFor={emailID}>Email:</LoginLabel>
            <LoginInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              id={emailID}
            />
            {errors.email && touched.email && errors.email}
            <LoginLabel htmlFor={passwordlID}>Password:</LoginLabel>
            <LoginInput
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id={passwordlID}
            />
            {errors.password && touched.password && errors.password}
            <LoginBtnBlock>
              <LoginBtn type="submit" disabled={isSubmitting}>
                Log in
              </LoginBtn>
              <LoginBtn
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  dispatch(signUp(values));
                  if (userIsLogin) {
                    navigate('/main');
                  }
                }}
              >
                Registration
              </LoginBtn>
            </LoginBtnBlock>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default LoginForm;
