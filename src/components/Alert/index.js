// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toast from 'grommet/components/Toast';
import { hideAlert } from '../../actions/alert';

type Props = {
  hideAlert: () => void,
  message: string,
  pathname: string,
  status: string,
  visible: boolean,
};

class Alert extends Component {
  componentWillReceiveProps(nextProps) {
    const { visible, pathname } = this.props;

    if (visible && pathname !== nextProps.pathname) {
      this.props.hideAlert();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.visible !== this.props.visible) return true;
    return false;
  }

  onClose = () => {
    this.props.hideAlert();
  };

  props: Props;

  render() {
    const { message, status, visible } = this.props;
    return visible ? (
      <Toast status={status} onClose={this.onClose}>
        {message}
      </Toast>
    ) : null;
  }
}

const mapStateToProps = state => ({
  message: state.alert.message,
  status: state.alert.status,
  visible: state.alert.visible,
});

export default connect(mapStateToProps, { hideAlert })(Alert);
