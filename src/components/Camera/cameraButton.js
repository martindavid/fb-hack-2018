import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CameraButtonDiv = styled.div`
  text-align: center !important;
  position: fixed;
  bottom: 70px;

  input {
    display: none;
  }
`;

const Button = styled.button`
    width: 100px;
    height: 60px !important;
    border: none;
    background-color: #d60b52 !important;
`;

class CameraButton extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <CameraButtonDiv>
        <Button onClick={() => this.cameraDom.click()}><i className="fa fa-camera" /></Button>
        <br /><br />
        <input
          ref={node => this.cameraDom = node}
          type="file"
          accept="image/png, image/jpeg;capture=camera"
          onChange={e => onChange(e.target.files[0])}
        />
      </CameraButtonDiv>
    );
  }
}

CameraButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CameraButton;
