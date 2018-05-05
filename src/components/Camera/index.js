import React from 'react';
import CameraButton from './cameraButton';

class Camera extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSrc: null,
    };
  }

  captureImage(image) {
    const reader = new FileReader(); //eslint-disable-line
    const file = image;

    reader.onloadend = () => {
      this.setState({
        imageSrc: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }


  render() {
    const { imageSrc } = this.state;

    return (
      <div>
        <CameraButton
          onChange={e => this.captureImage(e)}
        />
        <div>
          { imageSrc && <img src={this.state.imageSrc} alt="Camera" />}
        </div>
      </div>
    );
  }
}

export default Camera;
