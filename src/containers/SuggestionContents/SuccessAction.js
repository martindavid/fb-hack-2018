import React from 'react';
import SuccessIcon from 'assets/Save_cat.png';
import styled from 'styled-components';

const FacebookButton = styled.button`
  background-color: #4267B2 !important;
  color: #FFF !important;
`;


function SuccessAction({ history }) {
  return (
    <div className="row text-center" style={{ marginTop: '100px' }}>
      <div className="col-sm-12">
        <img
          src={SuccessIcon}
          alt="Classifier Result"
          width="300px"
          height="300px"
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
        <br />
        <br />
        <br />
      </div>
      <div className="col-sm-12">
        <button
          className="btn btn-primary"
          onClick={() => {
          history.push('/home');
        }}
        >Ok
        </button>
        <br />
        <br />
        <FacebookButton
          className="btn btn-primary"
        >
          <i className="fa fa-facebook" />{' '}Share
        </FacebookButton>
      </div>
    </div>
  );
}

export default SuccessAction;
