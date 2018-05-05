import React from 'react';
import Spinner from 'components/Spinner';
import styled from 'styled-components';
import CameraButton from './cameraButton';
import { connect } from 'react-redux';
import { uploadImageSuccess } from 'actions/home';

class Camera extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSrc: null,
      isLoading: false,
    };
  }

  captureImage(image) {
    const reader = new FileReader(); //eslint-disable-line
    const file = image;
    this.setState({ imageSrc: null, isLoading: true });

    reader.onloadend = () => {
      setTimeout(() => {
        this.props.uploadImageSuccess(reader.result);
        this.setState({
          imageSrc: reader.result,
          isLoading: false,
        });
      }, 2000);
    };

    reader.readAsDataURL(file);
    this.props.onChange();
  }


  render() {
    const { isLoading, imageSrc } = this.state;

    return (
      <div>
        <CameraButton
          onChange={e => this.captureImage(e)}
        />
        <div>
          { isLoading && <Spinner style={{ position: 'fixed', left: '45%', marginTop: '20%' }} /> }
          { imageSrc && <img src={this.state.imageSrc} alt="Camera" />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  uploadImageSuccess: image => dispatch(uploadImageSuccess(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
