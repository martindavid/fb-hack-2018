// @flow
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import App from 'grommet/components/App';
import PageLoading from 'components/PageLoading';
import Alert from 'components/Alert';
import Login from 'components/Login';
import Register from 'components/Register';
import Home from 'containers/Home'
import Question1 from 'components/Onboarding';
import { routes } from '../../utils//routes';

type Props = {
  history: Object,
  location: Object,
};

class Root extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loading: false,
  };

  props: Props;

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <App centered={false}>
        <Alert key="alert" pathname={this.props.location.pathname} />
        <Switch key="content">
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.onboarding} component={Question1} />
          <Route path="/" />
        </Switch>
      </App>
    );
  }
}

export default withRouter(Root);