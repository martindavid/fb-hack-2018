// @flow
import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import App from 'grommet/components/App';
import Alert from 'components/Alert';
import Login from 'components/Login';
import Register from 'components/Register';
import Home from 'containers/Home';
import Onboarding from 'components/Onboarding';
import { connect } from 'react-redux';
import { routes } from '../../utils/routes';


type Props = {
  history: Object,
  location: Object,
};

class Root extends Component {
  componentWillMount() {}

  props: Props;

  render() {
    return (
      <App centered={false}>
        <Alert key="alert" pathname={this.props.location.pathname} />
        <Switch key="content">
          <Redirect exact from="/" to="/home" />
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.onboarding} component={Onboarding} />
          <Route path={routes.home} component={Home} />
        </Switch>
      </App>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
});

export default withRouter(connect(mapStateToProps)(Root));
