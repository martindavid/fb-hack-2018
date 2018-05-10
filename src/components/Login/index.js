// @flow
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import Box from 'grommet/components/Box';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import { routes } from '../../utils/routes';
import { showAlert } from '../../actions/alert';
import { storeAuthData } from '../../actions/auth';
import bg from '../../assets/Logo_front.gif';

type Props = {
  errors: Object,
  history: Object,
  isSubmitting: boolean,
  touched: Object,
};


class Login extends Component {
  componentDidMount() {
    window.fbAsyncInit = function loadFb() {
      window.FB.init({
        appId: '162014514467964',
        cooke: true,
        xfbml: true,
        version: 'v3.0',
      });
      window.FB.Event.subscribe('auth.statusChange', (response) => {
        if (response.authResponse) {
          this.props.storeAuthData(response.authResponse);
          this.props.history.push(routes.onboarding);
        } else {
          console.log('login fail');
        }
      });
    }.bind(this);


    (function load(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
    props: Props;

    render() {
      const {
        errors, isSubmitting, handleSubmit, touched,
      } = this.props;
      return (
        <Box full justify="center" texture={bg} pad={{ vertical: 'medium', horizontal: 'medium', between: 'large' }}>
          <div id="fb-root" />
          <Form onSubmit={handleSubmit} style={{ marginTop: '320px' }}>
            <FormFields>
              <FormField label="Email" error={touched.email && errors.email && errors.email}>
                <Field name="email" type="email" />
              </FormField>
              <FormField
                label="Password"
                error={touched.password && errors.password && errors.password}
              >
                <Field name="password" type="password" />
              </FormField>
            </FormFields>
            <Box margin={{ top: 'large' }} pad={{ between: 'medium' }} align="center">
              <Button
                primary
                label="Login"
                type={isSubmitting ? 'button' : 'submit'}
              />
              <div
                className="fb-login-button"
                data-max-rows="1"
                data-size="large"
                data-button-type="login_with"
                data-show-faces="false"
                data-auto-logout-link="false"
                data-use-continue-as="false"
              />
              <Button label="Register" onClick={() => this.props.history.push(routes.register)} />
            </Box>
          </Form>
        </Box>
      );
    }
}

const mapPropsToValues = () => ({
  email: '',
  password: '',
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const handleSubmit = (values, { props }) => {
  props.storeAuthData({
    username: values.email,
    password: values.password,
  });
  props.history.push('/home');
};

export default compose(
  connect(null, { showAlert, storeAuthData }),
  withFormik({ mapPropsToValues, validationSchema, handleSubmit }),
)(Login);
