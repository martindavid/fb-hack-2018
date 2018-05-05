// @flow
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import { showAlert } from '../../actions/alert';
import { routes } from '../../utils//routes';

type Props = {
  errors: Object,
  history: Object,
  isSubmitting: boolean,
  touched: Object,
};

function Register(props: Props) {
  const { errors, isSubmitting, touched } = props;
  return (
    <Box full pad={{ vertical: 'medium', horizontal: 'medium', between: 'large' }}>
      <Heading strong margin="none">
        Register
      </Heading>
      <Form>
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
          <FormField
            label="Confirm Password"
            error={touched.confirmPassword && errors.confirmPassword && errors.confirmPassword}
          >
            <Field name="confirmPassword" type="password" />
          </FormField>
          <FormField label="Name" error={touched.name && errors.name && errors.name}>
            <Field name="name" type="text" />
          </FormField>
        </FormFields>
        <Box margin={{ top: 'large' }} pad={{ between: 'medium' }}>
          <Button primary label="Create Account" type={isSubmitting ? 'button' : 'submit'} />
          <Button label="Cancel" onClick={() => props.history.push(routes.login)} />
        </Box>
      </Form>
    </Box>
  );
}

const mapPropsToValues = () => ({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().test('matchPassword', 'Password does not match', function resolve(value) {
    const { password } = this.parent;
    return password === value;
  }),
  name: Yup.string().required('Required'),
});

const handleSubmit = (values, { props }) => {
  props.history.push(routes.home);
};

export default compose(
  connect(null, { showAlert }),
  withFormik({ mapPropsToValues, validationSchema, handleSubmit }),
)(Register);
