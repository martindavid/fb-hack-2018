// @flow
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import App from 'grommet/components/App';
import PageLoading from 'components/PageLoading';
import Alert from 'components/Alert';
import Login from 'components/Login';
import Register from 'components/Register';
import Home from 'containers/Home';
import Onboarding from 'components/Onboarding';
import Dictionary from 'components/Dictionary';
import { routes } from '../../utils/routes';
import { connect } from 'react-redux';


type Props = {
  history: Object,
  location: Object,
};

class Root extends Component {
  constructor(props) {
    super(props);
    const { auth } = props;

    if (!auth) {
      props.history.push('/login');
    }
  }

  props: Props;


  render() {
    return (
      <App centered={false}>
        <Alert key="alert" pathname={this.props.location.pathname} />
        <Switch key="content">
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.onboarding} component={Onboarding} />
          <Route path={routes.home} component={Home} />
          <Route path="/" />
        </Switch>
      </App>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
});

export default withRouter(connect(mapStateToProps)(Root));
