import React from 'react';
import LeftParantheses from 'assets/left_parenthesis.png';
import RightParantheses from 'assets/right_parenthesis.png';
import SuccessIcon from 'assets/Save_cat.png';

class SuccessAction extends React.Component {
  render() {
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
            this.props.history.push('/home');
          }}
          >Ok
          </button>
        </div>
      </div>
    );
  }
}

export default SuccessAction;
